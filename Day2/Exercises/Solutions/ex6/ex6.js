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
app.use(session({
  secret: 'pitlane-secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.default.create({
    mongoUrl: 'mongodb://localhost:27017/pitlane-studios'
  })
}));

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
app.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// TODO: Task 3 - Create POST route to handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Check credentials
  if (username === 'greg' && password === 'password123') {
    // Save username to session
    req.session.username = username;
    // Redirect to home page
    res.redirect('/');
  } else {
    // Show error
    res.render('login', { error: 'Invalid username or password' });
  }
});

// TODO: Task 4 - Create middleware to check if user is logged in
function requireLogin(req, res, next) {
  if (req.session.username) {
    // User is logged in, continue
    next();
  } else {
    // User not logged in, redirect to login
    res.redirect('/login');
  }
}

// TODO: Task 5 - Protect the upload page route with authentication
// Render upload page (will be protected in Task 5)
app.get('/', requireLogin, (req, res) => {
  res.render('upload', { username: req.session?.username ?? null });
});

// TODO: Task 6 - Create logout route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/login');
  });
});

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