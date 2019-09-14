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

exports.getAccessToken = async function(req, res) {
  let code = req.query.code ? req.query.code : "";
  console.log("reqqqq", req);
  if (code) {
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

    axios
      .post(`${CONST.GMAIL.TOKEN_URI}`, qs.stringify(requestBody), CONFIG)
      .then(res => {
        if (res.data.access_token) {
          let decoded = jwt.decode(res.data.id_token);
          let { email } = decoded;
          User.findOne({ email })
            .then(user => {
              if (!user) {
                let newUser = {
                  email: email,
                  auth: res.data.access_token,
                  refreshToken: res.data.refresh_token
                };
                new User(newUser)
                  .save()
                  .then(newUser =>
                    returnSuccess(res, "User created successfully", newUser)
                  )
                  .catch(err => returnError(res, err));
              }
            })
            .catch(e => console.log("rror", e));
        }
        // User.findOne({ email })
        //   .then(user => returnSuccess(res, "Logged in successfully", user))
        //   .catch(e => returnError(res, "User does not exist"));
      })
      .catch(err => {
        console.log("err", err);
      });
  }

  returnSuccess(res, "");
};
