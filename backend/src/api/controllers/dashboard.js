const utils = require('../utils');
const Dashboard = require('../../models/Dashboard');

const { returnError, returnSuccess } = utils;

exports.getAll = async function(req, res) {
  Dashboard.find({})
    .then(dashboards => {
      if (!dashboards) throw Error('No dashboards found');
      returnSuccess(res, 'Dashboards fetched successfully', dashboards);
    })
    .catch(err => returnError(res, 'Error fetching dashboards', 500));
};

exports.get = function(req, res) {
  const dashboardID = req.params.id;
  Dashboard.findOne({ _id: dashboardID })
    .then(dashboard => returnSuccess(res, 'Dashboard fetched successfully', dashboard))
    .catch(err => returnError(res, 'Error fetching dashboard', 500));
};

exports.create = async function(req, res) {
  const dashboard = {
    title: req.body.data.title
  };

  new Dashboard(dashboard)
    .save()
    .then(newDashboard => returnSuccess(res, 'Dashboard created successfully', newDashboard))
    .catch(err => returnError(res, 'Error creating dashboard', 500));
};

exports.update = function(req, res) {
  const dashboard = {
    title: req.body.data.title,
    members: []
  };

  Dashboard.findOneAndUpdate({ _id: req.params.id }, dashboard, {
    new: true
  })
    .then(dashboard => returnSuccess(res, 'Dashboard updated successfully', dashboard))
    .catch(err => returnError(res, 'Error updating dashboard', 500));
};
