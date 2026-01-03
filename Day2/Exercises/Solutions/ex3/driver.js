const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const driverSchema = new Schema({
  name: String,
  number: Number,
  team: String,
  nationality: String,
  points: Number
});

module.exports = model('Driver', driverSchema);