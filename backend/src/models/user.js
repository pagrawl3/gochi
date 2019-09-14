const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, default: '', required: true },
    dashboards: [{ type: Schema.ObjectId, ref: 'Dashboard' }],
    firstName: { type: String },
    lastName: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('User', User);
