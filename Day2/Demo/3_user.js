const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const userSchema = new Schema({
    name: String,
    email: String
});

module.exports = model("User", userSchema);