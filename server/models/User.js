const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  token: { type: String, default: null },
  date: { type: Date, required: true },
  lastChange: { type: Date },
});

module.exports = mongoose.model("User", userSchema);
