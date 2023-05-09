const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema({
  client: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model("Projects", projectsSchema);
