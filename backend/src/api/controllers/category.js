const Category = require('../../models/Category');
const utils = require('../../utils');

const { returnError, returnSuccess } = utils;

exports.getAllCategories = async function(req, res) {
  Category.find({})
    .then(categories => {
      if (!categories) throw Error('No categories found');
      returnSuccess(res, 'Categories fetched successfully', categories);
    })
    .catch(() => returnError(res, 'Error fetching categories', 500));
};

exports.getCategory = function(req, res) {
  const categoryID = req.params.id;
  Category.findOne({ _id: categoryID })
    .then(category => returnSuccess(res, 'Category fetched successfully', category))
    .catch(() => returnError(res, 'Error fetching category', 500));
};

exports.createCategory = async function(req, res) {
  new Category(req.body.data)
    .save()
    .then(newCategory => returnSuccess(res, 'Category created successfully', newCategory))
    .catch(() => returnError(res, 'Error creating category', 500));
};

exports.updateCategory = function(req, res) {
  const category = req.body.data;
  Category.findOneAndUpdate({ _id: req.params.id }, category, { new: true })
    .then(category => returnSuccess(res, 'Category updated successfully', category))
    .catch(() => returnError(res, 'Error updating category', 500));
};

exports.deleteCategory = function(req, res) {
  Category.deleteOne({ _id: req.params.id })
    .then(() => returnSuccess(res, 'Category deleted successfully'))
    .catch(() => returnError(res, 'Error deleting category', 500));
};
