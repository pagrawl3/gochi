const axios = require('axios');
const qs = require('query-string');
const jwt = require('jsonwebtoken');
const parseMessage = require('gmail-api-parse-message');
const User = require('../../models/user');
const Email = require('../../models/email');
const Reply = require('../../models/reply');
const CONST = require('../../const');
const utils = require('../../utils');

const { returnError, returnSuccess } = utils;

exports.getLoginURL = async function(req, res) {
  const URL = `${CONST.GMAIL.AUTH_URI}?client_id=${CONST.GMAIL.CLIENT_ID}&response_type=${CONST.GMAIL.RESPONSE_TYPE}&redirect_uri=${CONST.GMAIL.REDIRECT_URI}&scope=${CONST.GMAIL.SCOPE}&access_type=${CONST.GMAIL.ACCESS_TYPE}&prompt=consent`;
  returnSuccess(res, 'Link generated successfully', { URL: URL });
};

exports.getAccessToken = async function(req, expressRes) {
  let code = req.body.code ? req.body.code : '';

  if (!code) returnError(res, 'Code not provided');

  getGmailToken(code)
    .then(async data => {
      const decoded = jwt.decode(data.id_token);
      const { email } = decoded;
      const updatedProps = {
        email: email,
        auth: data.access_token,
        refreshToken: data.refresh_token,
        dashboards: ['5d7cc9566455590e63a4968e']
      };

      const user = await User.findOne({ email });

      let updatedUser = user;
      if (!user) {
        updatedUser = await new User(updatedProps).save();
      } else {
        updatedUser.auth = updatedProps.auth;
        updatedUser.refreshToken = updatedProps.refreshToken;
        await updatedUser.save();
      }

      const token = jwt.sign({ id: updatedUser._id }, 'gochigang');
      returnSuccess(expressRes, 'User info', {
        token: token,
        user: updatedUser
      });

      // sync(updatedProps.auth, updatedProps.refreshToken);
    })
    .catch(e => {
      returnError(expressRes, e);
    });
};

exports.sync = function(req, res) {
  const accessToken =
    'ya29.GluEB2SLqxoVfX4NImxOh1AVsyxIRQx8uW2svBaKUCMssdjnPlRUk3vIV_RMGQqIAk-fKoSrE0Bbp0wJLluVWCe5X0XeIvRhA-H__WyHM52FV3hb7lZpX3B4CdJ8';
  const refreshToken = '1/Hx-6hcJo6uGvRdd1-1-ke8A2tA-Zf5NaSbAQtwgyzlw';

  getGmailThreads(accessToken)
    .then(threads => {
      const threadRequests = threads.map(({ id }) => getGmailThread(id, accessToken));
      return Promise.all(threadRequests);
    })
    .then(threads => {
      const normalizedThreads = threads.map(thread => {
        const [firstMessage, ...otherMessages] = thread.messages;
        return { email: getEmail(firstMessage), replies: getReplies(otherMessages) };
      });

      return Promise.resolve(normalizedThreads);
    })
    .then(async normalizedThreads => {
      const dbCalls = normalizedThreads.map(
        ({ email, replies }) =>
          new Promise(async (resolve, reject) => {
            await Email.remove({ threadId: email.threadId });
            await Reply.remove({ threadId: email.threadId });
            const newEmail = await new Email(email).save();
            const newReplies = await Reply.insertMany(replies.map(reply => ({ ...reply, email: newEmail._id })));
            resolve({ email: newEmail, replies: newReplies });
          })
      );

      return Promise.all(dbCalls);
    })
    .then(dbThreads => returnSuccess(res, 'Synced successfully', dbThreads))
    .catch(e => returnError(res, e.toString()));
};

function getGmailToken(code) {
  const requestBody = {
    code: code,
    client_id: CONST.GMAIL.CLIENT_ID,
    client_secret: CONST.GMAIL.CLIENT_SECRET,
    grant_type: CONST.GMAIL.GRANT_TYPE,
    redirect_uri: CONST.GMAIL.REDIRECT_URI
  };

  const CONFIG = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  return new Promise((resolve, reject) => {
    axios
      .post(`${CONST.GMAIL.TOKEN_URI}`, qs.stringify(requestBody), CONFIG)
      .then(async res => {
        if (res.data.access_token) resolve(res.data);
        else reject(res.data);
      })
      .catch(e => reject(e));
  });
}

function getGmailThreads(accessToken) {
  const CONFIG = { headers: { authorization: `Bearer ${accessToken}` } };
  return new Promise((resolve, reject) => {
    axios
      .get('https://www.googleapis.com/gmail/v1/users/me/threads', CONFIG)
      .then(res => {
        resolve(res.data.threads);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getGmailThread(id, accessToken) {
  const CONFIG = { headers: { authorization: `Bearer ${accessToken}` } };
  return new Promise((resolve, reject) => {
    axios
      .get(`https://www.googleapis.com/gmail/v1/users/me/threads/${id}`, CONFIG)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getEmail(message) {
  const parsedMessage = parseMessage(message);
  const { headers, textHtml, snippet, textPlain, threadId } = parsedMessage;
  return {
    threadId,
    date: headers.date,
    subject: headers.subject,
    from: headers.from,
    to: headers.to,
    cc: headers.cc,
    snippet,
    textPlain,
    textHtml,
    dashboard: '5d7cc9566455590e63a4968e'
  };
}

function getReplies(otherMessages) {
  return otherMessages.map(message => {
    const parsedMessage = parseMessage(message);
    const { headers, textHtml, snippet, textPlain, threadId } = parsedMessage;
    return {
      threadId,
      date: headers.date,
      from: headers.from,
      cc: headers.cc,
      snippet,
      textPlain,
      textHtml
    };
  });
}
