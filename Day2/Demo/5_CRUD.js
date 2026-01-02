/*
    CRUD
    C: Create
    R: Read
    U: Update
    D: Delete
*/

const mongoose = require('mongoose')
const User = require('./3_user.js'); //Reusing the user schema

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/Demo_Database')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('connection error:', err));

let user_id = "69579b54eade5aa1d0940ebe";

async function createUser(){
    const newUser = new User({
        name: "Cindy",
        email: "cindy@smuellipsis.com"
    });
    await newUser.save()

    user_id = newUser.id

    //Create Syntax
    await User.create({
        email: "cody@smuellipsis.com",
        name: 'Cody'
    });

    await User.create([
        {email: 'jack@smuellipsis.com', name: "Jack"},
        {email: 'artie@smuellipsis.com', name: 'Artie'}
    ]);

    console.log('Users created')
}

async function insertUser(){
    await User.insertOne({
        email: "leslie@smuellipsis.com",
        name: "Leslie"
    })

    await User.insertMany([
        {email: 'emily@smuellipsis.com', name: "Emily"},
        {email: 'Mike@smuellipsis.com', name: 'Mike'}
    ])
    console.log("users inserted")
}

async function findUser(){
    console.log(
        await User.findById(user_id).exec()
    )

    console.log("--------------------")

    console.log(
        await User.find({
            _id: user_id
        }).exec()
    )

    console.log("--------------------")

    console.log(
        await User.findOne({
            email: 'cody@smuellipsis.com'
        }).exec()
    )

    console.log("--------------------")

    console.log(
        await User.find({
            name: /Leslie/
        }).exec()
    )
}

async function updateUser(){
    //If you commented out createUser, remember to find and insert the ID of cindy to user_id
    // user_id = '' //Insert Cindy's ID here

    const result1 = await User.updateOne({_id: user_id}, {email: 'cindy@smuellipsis.org'})
    const result2 = await User.updateMany({name:/Cody/}, {email: "cody@smuellipsis.org"})
    console.log("------ Update ------")
    console.log(result1)
    console.log("---------")
    console.log(result2)
    console.log("---------")
    
    //what happens if you remove {new:true}?
    const result3 = await User.findByIdAndUpdate(user_id, {email: 'cindy@smuellipsis.net'}, {new: true})
    const result4 = await User.findOneAndUpdate({name: /Cody/}, {email: 'cody@smuellipsis.net'}, {new: true})
    console.log("------ Find & Update ------")
    console.log(result3)
    console.log("---------")
    console.log(result4)
    console.log("---------")

}

async function deleteUser(){
    //If you commented out createUser, remember to find and insert the ID of cindy to user_id
    user_id = '69579b54eade5aa1d0940ebe' //Insert Cindy's ID here
    const result1 = await User.deleteOne({_id: user_id});
    const result2 = await User.deleteMany({name: /Cody/});
    console.log("------ Delete ------")
    console.log(result1)
    console.log("---------")
    console.log(result2)
    console.log("---------")

    user_id = "69579b54eade5aa1d0940ec3" //Plug in a user_id of another user here.

    const result3 = await User.findByIdAndDelete(user_id);
    const result4 = await User.findOneAndDelete({name: /Leslie/});
    console.log("------ Find & Delete ------")
    console.log(result3)
    console.log("---------")
    console.log(result4)
    console.log("---------")
}


async function main(){
    try{
        await createUser();
        // await insertUser();
        // await findUser();
        // await updateUser();
        // await deleteUser();
    }catch(error){
        console.error('Error:', error);
    }finally{
        await mongoose.connection.close(); //Always remember to close the connection when your done.
        console.log('Connection closed');
    }
}

main();

