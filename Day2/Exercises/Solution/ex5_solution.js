const express = require('express');
const session = require('express-session');

const app = express();

// -------------------------------
// Configure Session Middleware
// -------------------------------
app.use(
  session({
    secret: 'mySecretKey',     // used to sign the session ID cookie
    resave: false,             // do not save session if unchanged
    saveUninitialized: true,   // save new sessions
    cookie: { maxAge: 600000 } // session expires after 10 minutes
  })
);

// -------------------------------
// Route Using Session Data
// -------------------------------
app.get('/', (req, res) => {
  // Initialize visit counter if it does not exist
  if (!req.session.visits) {
    req.session.visits = 1;
  } else {
    req.session.visits++;
  }

  res.send(`
    <h1>Express Sessions Lab</h1>
    <p>You have visited this page <strong>${req.session.visits}</strong> times.</p>
    <p>Session ID: ${req.session.id}</p>
    <p><a href="/reset">Reset Session</a></p>
  `);
});

// -------------------------------
// Reset Session Route
// -------------------------------
app.get('/reset', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.send('Error resetting session');
      return;
    }

    res.send(`
      <h1>Session Reset</h1>
      <p>Your session data has been cleared.</p>
      <p><a href="/">Go back</a></p>
    `);
  });
});

// -------------------------------
// Start Server
// -------------------------------
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
