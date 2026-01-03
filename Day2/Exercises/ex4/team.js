const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const teamSchema = new Schema({
    name: String,
    base: String,
    teamPrincipal: String,
    drivers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    }]
});


module.exports = model('Team', teamSchema);