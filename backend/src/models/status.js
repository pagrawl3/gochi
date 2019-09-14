const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Status = new Schema(
  {
    title: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Status', Status);
