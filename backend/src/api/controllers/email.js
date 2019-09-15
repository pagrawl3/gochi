const utils = require('../../utils');
const Email = require('../../models/email');

const { returnError, returnSuccess } = utils;

exports.getAllEmails = async function(req, res) {
  Email.find({ dashboard: req.params.dashboardId })
    .populate('category')
    .populate('status')
    .select('-textHtml')
    .select('-textPlain')
    .then(emails => {
      if (!emails) throw Error('No emails found');
      returnSuccess(res, 'Emails fetched successfully', emails);
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
