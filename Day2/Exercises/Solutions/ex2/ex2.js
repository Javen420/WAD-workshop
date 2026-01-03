const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const { getDriversData } = require('./driverData')

// TODO: Task 1 - Connect to mongodb, create the Driver Schema, create the model
mongoose.connect('mongodb://localhost:27017/pitlane-studios')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('connection error:', err));

const driverSchema = new Schema({
    name: String,
    number: Number,
    team: String,
    nationality: String,
    points: Number
});

const driverModel = model('Driver', driverSchema);

// TODO: Task 2 - Create a function and call it to create driver documents and save them
// You can use getDriversData() to retrieve all 20 drivers as an array
// Always remember to close the mongoose connection when your done.

async function storeDrivers(){
    const drivers = getDriversData();
    for(const driverData of drivers){
        const driver = new driverModel(driverData);
        try{
            await driver.save()
            console.log(`✅ ${driverData.name} saved successfully`);
        } catch(error){
            console.error("Failed to add driver", driverData)
        }
    }
    console.log('🏁 All drivers saved!');
    await mongoose.connection.close();
    console.log('Connection closed');
}

storeDrivers()



