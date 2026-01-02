const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const embeddedUserSchema = new Schema({
    id: Number,
    email: String,
    name: String,
    friends: [
        {
            id: Number,
            email: String,
            name: String
        }
    ]
});

// Make sure this line is correct
module.exports = model("EmbeddedUser", embeddedUserSchema);