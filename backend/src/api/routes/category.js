const express = require('express');
const utils = require('../../utils');
const CONST = require('../../const');

const userController = require('../controllers/user');
const categoryController = require('../controllers/category');

module.exports = function(app) {
  const router = express.Router();
  const route = utils.createRoute(router, userController.authenticate);
  const { getAllCategories, getCategory, createCategory, updateCategory, deleteCategory } = categoryController;

  route('/', getAllCategories, 'GET');
  route('/', createCategory, 'POST');
  route('/:id', getCategory, 'GET');
  route('/:id', updateCategory, 'PUT');
  route('/:id', deleteCategory, 'DELETE');

  app.use(`${CONST.API_PATH}categories`, router);
};
