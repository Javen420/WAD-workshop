const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { validateDriversData, viewTeamsWithDrivers } = require('./helper');
const { getTeamsData, getDriverIdsByNames } = require('./teamsData');

const COMPLETE = false;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pitlane-studios')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('connection error:', err));

// TODO: Task 1 - Connect to mongodb pitlane-studios database
// and create the teamSchema with correct fields
// and create the teamModel using teamSchema
const teamSchema = new Schema({
    name: String,
    base: String,
    teamPrincipal: String,
    drivers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Driver'
    }]
});

const teamModel = model('Team', teamSchema);

// TODO: Task 2 - Create the saveTeams() function
// It should be able to create each team's document with data from getTeamsData()
// and include driver refences using getDriverIdsByNames()
async function saveTeams(){
    const teams = getTeamsData();
    for (const teamData of teams){
        teamData.drivers = await getDriverIdsByNames(teamData.drivers)
        const team = new teamModel(teamData);
        try{
            await team.save();
            console.log(`✅ ${teamData.name} saved successfully`);
        }catch(error){
            console.error("Failed to save team: ", teamData.name);
        }
    }
    
    await mongoose.connection.close();
    console.log('Connection closed');
}

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