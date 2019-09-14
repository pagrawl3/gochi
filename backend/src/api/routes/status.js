const express = require('express');
const utils = require('../../utils');
const CONST = require('../../const');

const userController = require('../controllers/user');
const statusController = require('../controllers/status');

module.exports = function(app) {
  const router = express.Router();
  const route = utils.createRoute(router, userController.authenticate);
  const { getAllStatuses, getStatus, createStatus, updateStatus, deleteStatus } = statusController;

  route('/', getAllStatuses, 'GET');
  route('/', createStatus, 'POST');
  route('/:id', getStatus, 'GET');
  route('/:id', updateStatus, 'PUT');
  route('/:id', deleteStatus, 'DELETE');

  app.use(`${CONST.API_PATH}statuses`, router);
};
