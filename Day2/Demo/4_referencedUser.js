const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// Friends are stored as references (ObjectIds) to other users
const referencedUserSchema = new Schema({
    id: Number,
    email: String,
    name: String,
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: "ReferencedUser"
        }
    ]
});

module.exports = model("ReferencedUser", referencedUserSchema);