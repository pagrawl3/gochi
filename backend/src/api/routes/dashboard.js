const express = require('express');
const utils = require('../../utils');
const CONST = require('../../const');

const userController = require('../controllers/user');
const dashboardController = require('../controllers/dashboard');

module.exports = function(app) {
  const router = express.Router();
  const route = utils.createRoute(router, userController.authenticate);
  const { getAllDashboards, getDashboard, createDashboard, updateDashboard, deleteDashboard } = dashboardController;

  route('/', getAllDashboards, 'GET');
  route('/', createDashboard, 'POST');
  route('/:id', getDashboard, 'GET');
  route('/:id', updateDashboard, 'PUT');
  route('/:id', deleteDashboard, 'DELETE');

  app.use(`${CONST.API_PATH}dashboards`, router);
};
