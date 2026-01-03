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

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pitlane-studios')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('connection error:', err));

app.get('/team/:name', async (req,res) =>{
    try{

        //Manual
        const team = await Team.find({
                                name: req.params.name
                            }).exec()
        const drivers = team[0].drivers
        const driver1 = await Driver.findById(drivers[0]).exec()
        const driver2 = await Driver.findById(drivers[1]).exec()
        console.log(driver1, driver2)
        team[0].drivers = [driver1, driver2]
        res.json(team[0])

        //Populate() version:
        // const team = await Team.findOne({ name: req.params.name })
        //                        .populate('drivers')
        //                        .exec();
        
        // if (!team) {
        //     return res.status(404).json({ error: 'Team not found' });
        // }
        
        // res.json(team);

    }catch(error){
        console.error('Team not found')
        res.sendStatus(404, "Team not found")
    }
})


// TODO Task 2 - Create renameDriverimages() to 
// rename all the profile images to use the driver name.
async function renameDriverImages(){
    try{
        const drivers = await Driver.find();
        for(const driver of drivers){
            console.log(driver)
            const oldPath = "images/" + driver.number + ".png";
            const newPath = "images/" + driver.name.toLowerCase().replace(/ /g, '-') + '.png';
            await fs.rename(oldPath, newPath);
            console.log('Succesfully renamed image for:', driver.name)
        }
    } catch(error){
        console.error(error)
    }
}


//TODO: Task 3 - Create the function updateDriverProfiles() to
// update all drivers to have a new field for Profile Pictures
async function updateDriverProfiles(){
    try{
        const drivers = await Driver.find();
        for(const driver of drivers){
            const imageLink = `/images/${driver.name.toLowerCase().replace(/ /g, '-')}.png`;
            await Driver.findByIdAndUpdate(driver._id, {imageLink: imageLink});
            console.log(`✅ Updated ${driver.name} (#${driver.number}) with profile picture`);
        }
        console.log('🏁 All driver profiles updated!');
    } catch(error){
        console.error('❌ Error updating driver profiles:', error);
    }
}




mongoose.connection.once('open', async () =>{
   await renameDriverImages()
   await updateDriverProfiles()
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});