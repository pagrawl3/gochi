const CONST = require("../../const");
const utils = require("../../utils");

const { returnError, returnSuccess } = utils;

exports.getLoginURL = async function(req, res) {
  const URL = `${CONST.GMAIL.AUTH_URI}?client_id=${CONST.GMAIL.CLIENT_ID}&response_type=${CONST.GMAIL.RESPONSE_TYPE}&redirect_uri=${CONST.GMAIL.REDIRECT_URI}&scope=${CONST.GMAIL.SCOPE}`;
  returnSuccess(res, "Link generated successfully", { URL: URL });
};
