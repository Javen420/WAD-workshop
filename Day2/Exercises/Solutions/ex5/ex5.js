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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Save files to 'uploads' folder
  },
  filename: function (req, file, cb) {
    // Save file with original name
    cb(null, file.originalname);
  }
});

// TODO: Task 2 - Create the upload middleware
const upload = multer({ storage: storage });

// TODO: Task 3 - Create POST route to upload driver photo
app.post('/driver/:number/upload', upload.single('photo'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }
    
    const driver = await Driver.findOne({ number: req.params.number });
    
    if (!driver) {
      return res.status(404).send('Driver not found');
    }
    
    // Update driver's imageLink
    await Driver.findByIdAndUpdate(driver._id, { 
      imageLink: '/uploads/' + req.file.filename 
    });
    
    res.send(`Photo uploaded for ${driver.name}: '/uploads/'${req.file.filename}`);
    
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).send('Server error');
  }
});

// TODO: Task 4 - Create GET route to download driver photo
app.get('/driver/:number/photo', async (req, res) => {
  try {
    const driver = await Driver.findOne({ number: req.params.number });
    
    if (!driver) {
      return res.status(404).send('Driver not found');
    }
    
    // Create absolute path to file
    const filePath = path.join(__dirname, driver.imageLink);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('Driver photo not found');
    }
    
    // Send file to client
    res.sendFile(filePath);
    
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).send('Server error');
  }
});



app.get('/', (req,res) => {
    res.render('upload');
})

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});