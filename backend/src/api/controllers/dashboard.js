const utils = require('../../utils');
const Dashboard = require('../../models/dashboard');

const { returnError, returnSuccess } = utils;

exports.getAllDashboards = async function(req, res) {
  Dashboard.find({})
    .then(dashboards => {
      if (!dashboards) throw Error('No dashboards found');
      returnSuccess(res, 'Dashboards fetched successfully', dashboards);
    })
    .catch(() => returnError(res, 'Error fetching dashboards', 500));
};

exports.getDashboard = function(req, res) {
  const dashboardID = req.params.id;
  Dashboard.findOne({ _id: dashboardID })
    .then(dashboard => returnSuccess(res, 'Dashboard fetched successfully', dashboard))
    .catch(() => returnError(res, 'Error fetching dashboard', 500));
};

exports.createDashboard = async function(req, res) {
  const dashboard = req.body.data;
  new Dashboard(dashboard)
    .save()
    .then(newDashboard => returnSuccess(res, 'Dashboard created successfully', newDashboard))
    .catch(() => returnError(res, 'Error creating dashboard', 500));
};

exports.updateDashboard = function(req, res) {
  const dashboard = req.body.data;
  Dashboard.findOneAndUpdate({ _id: req.params.id }, dashboard, { new: true })
    .then(dashboard => returnSuccess(res, 'Dashboard updated successfully', dashboard))
    .catch(() => returnError(res, 'Error updating dashboard', 500));
};

exports.deleteDashboard = function(req, res) {
  Dashboard.deleteOne({ _id: req.params.id })
    .then(() => returnSuccess(res, 'Dashboard deleted successfully'))
    .catch(() => returnError(res, 'Error deleting dashboard', 500));
};
