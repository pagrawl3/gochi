const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Email = new Schema(
  {
    date: { type: Date },
    subject: { type: String, default: '' },
    from: { type: String, default: '' },
    to: { type: String, default: '' },
    cc: { type: String, default: '' },
    snippet: { type: String, default: '' },
    textPlain: { type: String, default: '' },
    textHtml: { type: String, default: '' },

    threadId: { type: String, default: '' },
    category: { type: Schema.ObjectId, ref: 'Category' },
    resolved: { type: Boolean, default: false },
    status: { type: String, default: '' },
    dashboard: { type: Schema.ObjectId, ref: 'Dashboard' },
    replies: [{ type: Schema.ObjectId, ref: 'Reply' }]
  },
  { timestamps: true }
);

module.exports = mongoose.model('Email', Email);
