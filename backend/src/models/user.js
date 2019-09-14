const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, default: '' },
    dashboards: [{ type: Schema.ObjectId, ref: 'Dashboard' }],
    auth: { type: String },
    refreshToken: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', User);
