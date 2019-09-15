const express = require('express');
const utils = require('../../utils');
const CONST = require('../../const');

const userController = require('../controllers/user');
const gmailController = require('../controllers/gmail');

module.exports = function(app) {
  const router = express.Router();
  const route = utils.createRoute(router, userController.authenticate);

  route('/sync', gmailController.sync, 'GET');
  router.get('/login/url', gmailController.getLoginURL);
  router.post('/login/callback', gmailController.getAccessToken);
  router.post('/login/authenticate', gmailController.authenticate);
  app.use(CONST.API_PATH, router);
};
