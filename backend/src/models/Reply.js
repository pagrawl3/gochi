const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reply = new Schema(
  {
    date: { type: Date },
    fromName: { type: String, default: '' },
    fromEmail: { type: String, default: '' },
    body: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Reply', Reply);
