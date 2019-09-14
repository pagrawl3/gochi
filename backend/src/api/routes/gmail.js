const express = require("express");
const utils = require("../../utils");
const CONST = require("../../const");

const gmailController = require("../controllers/gmail");

module.exports = function(app) {
  const router = express.Router();

  router.get("/getLoginURL", gmailController.getLoginURL);
  router.get("/getAccessToken", gmailController.getAccessToken);
  app.use(CONST.API_PATH, router);
};
