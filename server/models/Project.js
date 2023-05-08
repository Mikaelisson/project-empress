const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  comments: { type: String },
  mobileSupport: { type: Boolean, required: true },
  image: { type: String, required: true },
  url: { type: String, required: true },
  repository: { type: String, required: true },
});

module.exports = mongoose.model("Projects", projectsSchema);
