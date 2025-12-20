const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ""
  },
  datetime: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Task", taskSchema);
