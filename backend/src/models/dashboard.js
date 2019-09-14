const mongoose = require('mongoose');
const CONST = require('../const');
const Schema = mongoose.Schema;

const Dashboard = new Schema(
  {
    email: { type: String, required: true },
    title: { type: String, default: '' },
    durationType: { type: String, default: CONST.DURATION_TYPES.WEEKLY },
    startDate: { type: Date, default: new Date() },
    authKey: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Dashboard', Dashboard);
