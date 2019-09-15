const utils = require('../../utils');
const User = require('../../models/user');

const { returnError, returnSuccess, verifyToken } = utils;

exports.create = function(req, res) {
  var newUser = req.body.data;
  new User(newUser)
    .save()
    .then(newUser => returnSuccess(res, 'User created successfully', newUser))
    .catch(err => returnError(res, err));
};

exports.get = function(req, res) {
  const userID = req.params.id;
  User.findOne({ _id: userID })
    .populate('dashboards')
    .then(user => returnSuccess(res, 'User fetched successfully', user))
    .catch(err => returnError(res, err));
};

exports.login = async function(req, res) {
  const email = req.body.data.email;
  User.findOne({ email })
    .then(user => returnSuccess(res, 'Logged in successfully', user))
    .catch(e => returnError(res, 'User does not exist'));
};

exports.authenticate = function(req, res, next) {
  var token = req.body.token || req.query.token;

  if (!token) {
    return returnError(res, 'Access Token not provided');
  }

  console.log('AUTHENTICATING YALL');
  verifyToken(token)
    .then(decoded => User.findOne({ _id: decoded.id }))
    .then(user => {
      console.log('VERIFYING TOKEN');
      req.user = user;
      next();
    })
    .catch(err => returnError(res, err));
};

exports.authenticateRoute = function(req, res) {
  if (!req.user) returnError(res, 'User not found');
  User.findOne({ _id: req.user._id })
    .populate('dashboards')
    .then(user => returnSuccess(res, 'User fetched successfully', user))
    .catch(err => returnError(res, err));
};
