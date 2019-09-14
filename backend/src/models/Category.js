const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema(
  {
    title: { type: String, required: true },
    color: { type: String, default: '', required: true },
    duration: { type: Number, default: 3600, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', Category);
