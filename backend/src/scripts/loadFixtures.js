const mongoose = require('mongoose');
const fixtures = require('../fixtures');
const Category = require('../models/category');
const User = require('../models/user');
const Status = require('../models/status');
const Dashboard = require('../models/dashboard');

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://ahem:brahmasami@gochi-n4snt.azure.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

Tables = {
  Category,
  User,
  Status,
  Dashboard
};

Object.keys(fixtures).map(async Table => {
  console.log("GOCHI: LOADING FIXTURES: ", Table);

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
