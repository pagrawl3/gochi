const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reply = new Schema(
  {
    date: { type: Date },
    from: { type: String, default: '' },
    cc: { type: String, default: '' },
    body: { type: String, default: '' },
    snippet: { type: String, default: '' },
    textPlain: { type: String, default: '' },
    textHtml: { type: String, default: '' },
    threadId: { type: String, default: '' },
    email: { type: Schema.ObjectId, ref: 'Email' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Reply', Reply);
