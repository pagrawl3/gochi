const utils = require('../../utils');
const Email = require('../../models/email');
const Reply = require('../../models/reply');
const Dashboard = require('../../models/dashboard');

const { returnError, returnSuccess } = utils;

exports.getAllEmails = async function(req, res) {
  const dashboard = await Dashboard.findOne({ _id: req.params.dashboardId });
  const { durationType, startDate } = dashboard;
  const endDate = new Date(startDate);

  endDate.setDate(endDate.getDate() + (durationType === 'WEEKLY' ? 7 : 30));
  Email.find({
    dashboard: req.params.dashboardId,
    date: {
      // $gte: startDate,
      $lte: endDate
    }
  })
    .select('-textHtml')
    .select('-textPlain')
    .populate('replies', 'from')
    .lean()
    .then(async emails => {
      if (!emails) throw Error('No emails found');
      const enhancedEmails = await calculateDerivedData(emails);
      returnSuccess(res, 'Emails fetched successfully', enhancedEmails);
    })
    .catch(() => returnError(res, 'Error fetching emails', 500));
};

exports.getEmail = function(req, res) {
  const emailID = req.params.id;
  Email.findOne({ _id: emailID })
    .populate('category')
    .populate('status')
    .then(email => returnSuccess(res, 'Email fetched successfully', email))
    .catch(() => returnError(res, 'Error fetching email', 500));
};

exports.getReplies = function(req, res) {
  const threadId = req.params.threadId;
  Reply.find({ threadId: threadId })
    .then(replies => returnSuccess(res, 'Replies fetched successfully', replies))
    .catch(() => returnError(res, 'Error fetching email', 500));
};

exports.changeEmailCategory = async function(req, res) {
  const emailID = req.params.id;
  const categoryId = req.body.categoryId;
  const email = await Email.findOne({ _id: emailID });
  if (email) {
    email.category = categoryId;
    const updatedEmail = await email.save();
    returnSuccess(res, 'Email category updated successfully', updatedEmail);
  }
};

exports.changeEmailResolution = async function(req, res) {
  const emailID = req.params.id;
  const resolved = req.body.resolved;
  const email = await Email.findOne({ _id: emailID });
  if (email) {
    email.resolved = resolved;
    const updatedEmail = await email.save();
    returnSuccess(res, 'Email resolution updated successfully', updatedEmail);
  }
};

function calculateDerivedData(emails) {
  return Promise.all(emails.map(calculateDerivedDataForEmail));
}

function calculateDerivedDataForEmail(email) {
  return new Promise(async (resolve, reject) => {
    const numReplies = email.replies.length;
    const lastReply = email.replies[numReplies - 1];

    email.numReplies = email.replies.length;

    if (!numReplies) email.status = 'First Response Needed';
    else if (numReplies && lastReply.from === req.user.email) email.status = 'Waiting for Reply';
    else if (numReplies) email.status = 'Waiting for Reply';
    else if (email.resolved) email.status = 'Resolved';
    else if (!email.category) email.status = '';

    resolve(email);
  });
}
