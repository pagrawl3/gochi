const axios = require("axios");
const qs = require("query-string");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const CONST = require("../../const");
const utils = require("../../utils");

const { returnError, returnSuccess } = utils;

exports.getLoginURL = async function(req, res) {
  const URL = `${CONST.GMAIL.AUTH_URI}?client_id=${CONST.GMAIL.CLIENT_ID}&response_type=${CONST.GMAIL.RESPONSE_TYPE}&redirect_uri=${CONST.GMAIL.REDIRECT_URI}&scope=${CONST.GMAIL.SCOPE}&access_type=${CONST.GMAIL.ACCESS_TYPE}&prompt=consent`;
  returnSuccess(res, "Link generated successfully", { URL: URL });
};

exports.getAccessToken = async function(req, expressRes) {
  let code = req.body.code ? req.body.code : "";

  if (!code) {
    returnError(res, "Code not provided");
  }

  const CONFIG = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  };

  const requestBody = {
    code: code,
    client_id: CONST.GMAIL.CLIENT_ID,
    client_secret: CONST.GMAIL.CLIENT_SECRET,
    grant_type: CONST.GMAIL.GRANT_TYPE,
    redirect_uri: CONST.GMAIL.REDIRECT_URI
  };

  await axios
    .post(`${CONST.GMAIL.TOKEN_URI}`, qs.stringify(requestBody), CONFIG)
    .then(async res => {
      if (res.data.access_token) {
        let decoded = jwt.decode(res.data.id_token);
        let { email } = decoded;
        await User.findOne({ email }).then(async user => {
          if (!user) {
            let newUser = {
              email: email,
              auth: res.data.access_token,
              refreshToken: res.data.refresh_token
            };
            await new User(newUser)
              .save()
              .then(newUser => {
                let token = jwt.sign({ id: newUser._id }, "gochigang");

                getThreads(CONFIG);
                returnSuccess(expressRes, "User info", {
                  token: token,
                  user: {
                    email: newUser.email,
                    dashboard: newUser.dashboards
                  }
                });
              })
              .catch(err => returnError(res, err));
          } else {
            user.auth = res.data.access_token;
            user.refreshToken = res.data.refresh_token;
            user
              .save()
              .then(() => {
                let token = jwt.sign({ id: user._id }, "gochigang");

                getThreads(CONFIG);
                returnSuccess(expressRes, "User info", {
                  token: token,
                  user: {
                    email: user.email,
                    dashboard: user.dashboards
                  }
                });
              })
              .catch(err => {
                console.log("err", err);
                returnError(expressRes, "Error occurred! Try again later");
              });
          }
        });
      }
    })
    .catch(err => {
      console.log("err", err);
    });
};

function getThreads(config) {
  axios
    .get("https://www.googleapis.com/gmail/v1/users/me/threads", config)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
}
