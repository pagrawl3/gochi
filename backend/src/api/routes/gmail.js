const express = require('express');
const utils = require('../../utils');
const CONST = require('../../const');

const gmailController = require('../controllers/gmail');

module.exports = function(app) {
  const router = express.Router();

  router.get('/login/url', gmailController.getLoginURL);
  router.post('/login/callback', gmailController.getAccessToken);
  app.use(CONST.API_PATH, router);
};
