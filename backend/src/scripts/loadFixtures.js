const mongoose = require('mongoose');
const fixtures = require('../fixtures');
const Category = require('../models/Category');
const User = require('../models/User');
const Status = require('../models/Status');
const Dashboard = require('../models/Dashboard');

mongoose.connect('mongodb://localhost/gochi');

Tables = {
  Category,
  User,
  Status,
  Dashboard
};

Object.keys(fixtures).map(async Table => {
  console.log('GOCHI: LOADING FIXTURES: ', Table);

  await Tables[Table].remove({});

  if (Array.isArray(fixtures[Table])) {
    fixtures[Table].forEach(record => {
      new Tables[Table](record).save();
    });
  } else {
    Object.keys(fixtures[Table]).map(recordKey => {
      new Tables[Table](fixtures[Table][recordKey]).save();
    });
  }
});
