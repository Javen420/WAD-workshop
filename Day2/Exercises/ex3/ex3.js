const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { validateDriversData, viewTeamsWithDrivers } = require('./helper');
const { getTeamsData, getDriverIdsByNames } = require('./teamsData');

const COMPLETE = false; //Change this only after you've completed exercise 3.

// TODO: Task 1 - Connect to mongodb pitlane-studios database
// and create the teamSchema with correct fields
// and create the teamModel using teamSchema



// TODO: Task 2 - Create the saveTeams() function
// It should be able to create each team's document with data from getTeamsData()
// and include driver refences using getDriverIdsByNames()


// Run validation when server starts
mongoose.connection.once('open', async () => {
  await validateDriversData();
  if(!COMPLETE){
    await saveTeams()
  }else{
    await viewTeamsWithDrivers(teamModel) //If you have a different model name, put it here.
    await mongoose.connection.close();
    console.log('Connection closed');
  }
  
});