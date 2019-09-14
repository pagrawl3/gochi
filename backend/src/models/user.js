const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, default: "" },
    dashboards: [
      {
        type: Schema.ObjectId,
        ref: "Dashboard",
        default: new mongoose.Types.ObjectId("5d7cc9566455590e63a4968e")
      }
    ],
    auth: { type: String },
    refreshToken: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", User);
