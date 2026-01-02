const mongoose = require('mongoose');
const EmbeddedUser = require('./4_embeddedUser');
const ReferencedUser = require('./4_referencedUser');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/Demo_Database')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('connection error:', err));


// EMBEDDED RELATIONSHIP
// Friends data is stored directly inside the user document
async function createEmbeddedUser() {
    const newUser = new EmbeddedUser({
        id: 101,
        email: 'sarah.j@example.com',
        name: "Sarah Jenkins",
        friends: [
            {
                id: 102,
                email: "mike.t@example.com",
                name: "Mike Tyson"
            },
            {
                id: 103,
                email: "angela.c@example.com",
                name: "Angela Christy"
            }
        ]
    });

    await newUser.save();
    console.log('User with EMBEDDED relationship created:');
    console.log(newUser);
    console.log('');
}

// REFERENCED RELATIONSHIP
// Friends are stored as references to other user documents
async function createReferencedUsers(){
    const mike = new ReferencedUser({
        id: 102,
        email: 'mike.t@example.com',
        name: "Mike Tyson",
        friends: []    // Will add references later
    });

    const angela = new ReferencedUser({
        id: 103,
        email: 'angela.c@example.com',
        name: "Angela Christy",
        friends: []
    });

    const sarah = new ReferencedUser({
        id: 101,
        email: 'sarah.j@example.com',
        name: "Sarah Jenkins",
        friends: []
    });

    // Save all users first
    await mike.save();
    await angela.save();
    await sarah.save();

    // Now add references to each other
    sarah.friends.push(mike._id, angela._id);
    mike.friends.push(sarah._id);
    angela.friends.push(sarah._id);

    // Save again with references
    await sarah.save();
    await mike.save();
    await angela.save();

    console.log('Users with REFERENCED relationship created:');
    console.log('Sarah:', sarah);
    console.log('Mike:', mike);
    console.log('Angela:', angela);
    console.log('');

    // Demonstrate populating references
    const sarahWithFriends = await ReferencedUser.findById(sarah._id).populate('friends');
    console.log('Sarah with populated friends:');
    console.log(sarahWithFriends);
}

async function main() {
    try {
        console.log('========== EMBEDDED RELATIONSHIP DEMO ==========');
        console.log('');
        await createEmbeddedUser();

        console.log('========== REFERENCED RELATIONSHIP DEMO ==========');
        console.log('');
        await createReferencedUsers();

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await mongoose.connection.close();
        console.log('Connection closed');
    }
}



main();