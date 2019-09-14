const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Dashboard = new Schema(
  {
    title: { type: String, default: '', required: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Dashboard', Dashboard);
