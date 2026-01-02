const mongoose = require('mongoose')
const User = require('./3_user.js')

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/Demo_Database')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('connection error:', err));

async function createUser(){

    const newUser = new User({
        name: "Alice",
        email: "alice.example.com"
    });

    await newUser.save()
    console.log('User created:', newUser)
}

async function main(){
    try{
        await createUser(); //What happens if you don't include await?
    }catch(error){
        console.error('Error:', error);
    }finally{
        await mongoose.connection.close(); //Always remember to close the connection when your done.
        console.log('Connection closed');
    }
}

main();

