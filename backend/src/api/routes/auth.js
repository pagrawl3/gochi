const express = require('express');
const utils = require('../utils');
const CONST = require('../const');

const userController = require('../controllers/user');

module.exports = function(app) {
  const router = express.Router();
  const route = utils.createRoute(router, userController.authenticate);

  router.post('/login', userController.login);
  app.use(CONST.API_PATH, router);
};
