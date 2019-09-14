const Status = require('../../models/status');
const utils = require('../../utils');

const { returnError, returnSuccess } = utils;

exports.getAllStatuses = async function(req, res) {
  Status.find({})
    .then(statuses => {
      if (!statuses) throw Error('No statuses found');
      returnSuccess(res, 'Statuses fetched successfully', statuses);
    })
    .catch(err => returnError(res, 'Error fetching statuses', 500));
};

exports.getStatus = function(req, res) {
  const statusID = req.params.id;
  Status.findOne({ _id: statusID })
    .then(status => returnSuccess(res, 'Status fetched successfully', status))
    .catch(err => returnError(res, 'Error fetching status', 500));
};

exports.createStatus = async function(req, res) {
  new Status(req.body.data)
    .save()
    .then(newStatus => returnSuccess(res, 'Status created successfully', newStatus))
    .catch(err => returnError(res, 'Error creating status', 500));
};

exports.updateStatus = function(req, res) {
  const status = req.body.data;
  Status.findOneAndUpdate({ _id: req.params.id }, status, { new: true })
    .then(status => returnSuccess(res, 'Status updated successfully', status))
    .catch(err => returnError(res, 'Error updating status', 500));
};

exports.deleteStatus = function(req, res) {
  Status.deleteOne({ _id: req.params.id })
    .then(() => returnSuccess(res, 'Status deleted successfully'))
    .catch(() => returnError(res, 'Error deleting status', 500));
};
