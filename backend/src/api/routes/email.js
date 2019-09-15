const express = require('express');
const utils = require('../../utils');
const CONST = require('../../const');

const userController = require('../controllers/user');
const emailController = require('../controllers/email');

module.exports = function(app) {
  const router = express.Router();
  const route = utils.createRoute(router, userController.authenticate);
  const { getAllEmails, getEmail, getReplies, changeEmailCategory, changeEmailResolution } = emailController;

  route('/dashboards/:dashboardId/emails', getAllEmails, 'GET');
  route('/emails/:id', getEmail, 'GET');
  route('/emails/:threadId/replies', getReplies, 'GET');
  route('/emails/:id/category', changeEmailCategory, 'POST');
  route('/emails/:id/resolution', changeEmailResolution, 'POST');

  app.use(`${CONST.API_PATH}`, router);
};
