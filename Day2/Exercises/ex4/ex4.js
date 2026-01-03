const express = require('express');
const app = express();

const mongoose = require('mongoose');

const Driver = require('./driver')
const Team = require('./team');

const fs = require("fs/promises")


app.use('/images', express.static('images'));



//TODO: Task 1 - Connect to mongoose and create a /team/:name route
// Users should be able to enter a team name and receive data about that team
// The information should also include the drivers information.


// TODO Task 2 - Create renameDriverimages() to 
// rename all the profile images to use the driver name.


//TODO: Task 3 - Create the function updateDriverProfiles() to
// update all drivers to have a new field for Profile Pictures




mongoose.connection.once('open', async () =>{
   await renameDriverImages()
   await updateDriverProfiles()
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});