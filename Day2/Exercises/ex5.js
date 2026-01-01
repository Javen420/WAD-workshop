/*
Exercise 5

----------------------------------------------------
SETUP INSTRUCTIONS
----------------------------------------------------

1. Navigate to Day2 directory:
   cd c:\Programming\WAD-workshop\Day2

2. Install dependencies (if not already done):
   npm install

3. Run the exercise:
   npm run ex5

4. Visit http://localhost:3000 in your browser

----------------------------------------------------
PART 1: SESSION SETUP
----------------------------------------------------

Your task:
- Set up express-session middleware
- Configure a session with a secret
- Allow Express to store session data for each user

----------------------------------------------------
PART 2: USING SESSION DATA
----------------------------------------------------

Your task:
- Track how many times a user has visited the site
- Store the visit count in the session
- Display the visit count in the browser

----------------------------------------------------
STARTER CODE
----------------------------------------------------
*/

const express = require('express');
const session = require('express-session');

const app = express();

// -------------------------------
// PART 1: Configure Session Middleware
// -------------------------------
app.use(
  session({
    secret: 'mySecretKey', // used to sign the session ID cookie
    resave: false,         // do not save session if unchanged
    saveUninitialized: true // save new sessions
  })
);

// -------------------------------
// PART 2: Route Using Session Data
// -------------------------------
app.get('/', (req, res) => {
  // TODO:
  // 1. Check if req.session.visits exists
  // 2. If not, initialize it to 1
  // 3. Otherwise, increment it
  // 4. Send a response showing the visit count

  res.send('Session lab starter code');
});

// -------------------------------
// BONUS ROUTE: Reset Session
// -------------------------------
app.get('/reset', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.send('Error resetting session');
      return;
    }
    res.send('Session has been reset');
  });
});

// -------------------------------
// Start Server
// -------------------------------
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

/*
----------------------------------------------------
EXPECTED BEHAVIOR
----------------------------------------------------

- Refreshing the page should increase the visit count
- Opening the site in a different browser or incognito
  window should start a new session
- Visiting /reset should clear the session data

----------------------------------------------------
BONUS (OPTIONAL)
----------------------------------------------------
- Store a username in the session
- Display the session ID
- Set a session expiration time
*/
