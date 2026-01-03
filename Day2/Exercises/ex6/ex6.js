const express = require('express');
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const mongoose = require('mongoose');
const Driver = require('./driver');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pitlane-studios')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('connection error:', err));

// TODO: Task 1 - Configure express-session with MongoStore


// Multer configuration (from Exercise 5)
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

// TODO: Task 2 - Create GET route for login page


// TODO: Task 3 - Create POST route to handle login


// TODO: Task 4 - Create middleware to check if user is logged in


// TODO: Task 5 - Protect the upload page route with authentication
// Render upload page (will be protected in Task 5)
app.get('/', (req, res) => {
  res.render('upload', { username: req.session?.username ?? null });
});

// TODO: Task 6 - Create logout route


// Upload and photo routes from Exercise 5
app.post('/driver/:number/upload', upload.single('photo'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded');
    }
    
    const driver = await Driver.findOne({ number: req.params.number });
    
    if (!driver) {
      return res.status(404).send('Driver not found');
    }
    
    res.send(`Photo uploaded for ${driver.name}: ${req.file.filename}`);
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).send('Server error');
  }
});

app.get('/driver/:number/photo', async (req, res) => {
  try {
    const driver = await Driver.findOne({ number: req.params.number });
    
    if (!driver) {
      return res.status(404).send('Driver not found');
    }
    
    const filename = driver.name.toLowerCase().replace(/ /g, '-') + '.png';
    const filePath = path.join(__dirname, 'uploads', filename);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).send('Driver photo not found');
    }
    
    res.sendFile(filePath);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).send('Server error');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});