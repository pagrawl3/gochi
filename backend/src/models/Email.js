const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Email = new Schema(
  {
    date: { type: Date },
    subject: { type: String, default: '' },
    fromName: { type: String, default: '' },
    fromEmail: { type: String, default: '' },
    body: { type: String, default: '' },
    replies: [{ type: Schema.ObjectId, ref: 'Reply' }],
    category: { type: Schema.ObjectId, ref: 'Category' },
    status: { type: Schema.ObjectId, ref: 'Status' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Email', Email);
