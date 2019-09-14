const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Email = new Schema(
  {
    date: { type: Date },
    subject: { type: String, default: '' },
    from: { type: String, default: '' },
    snippet: { type: String, default: '' },
    textPlain: { type: String, default: '' },
    textHtml: { type: String, default: '' },

    threadId: { type: String, default: '' },
    category: { type: Schema.ObjectId, ref: 'Category' },
    status: { type: Schema.ObjectId, ref: 'Status' },
    dashboard: { type: Schema.ObjectId, ref: 'Dashboard' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Email', Email);
