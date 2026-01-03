const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const mongoose = require('mongoose');
const Driver = require('./driver');

const app = express();

app.use(express.json());
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pitlane-studios')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('connection error:', err));

// Create uploads directory if it doesn't exist
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// TODO: Task 1 - Set up Multer storage configuration


// TODO: Task 2 - Create the upload middleware


// TODO: Task 3 - Create POST route to upload driver photo


// TODO: Task 4 - Create GET route to download driver photo



app.get('/', (req,res) => {
    res.render('upload');
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});