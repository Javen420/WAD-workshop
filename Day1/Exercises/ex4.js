const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static("ex4"));

// Store reservations in memory
const reservations = [];
let nextId = 1;

// TODO: Create middleware function "validateFields"
// Check that name, email, date, time, and guests are all present in req.body
// If any fields are missing or empty, redirect to "/error"
// If all fields are present, call next() to continue


// TODO: Create middleware function "validateGuests"
// Check that guests is a number between 1 and 8
// Hint: req.body.guests is a string, convert it to a number using parseInt()
// If invalid, redirect to "/error"
// If valid, call next()


// TODO: Create middleware function "validateTime"
// Check that time is between "17:00" and "22:00"
// Hint: You can compare time strings directly (e.g., "17:00" < "19:00" is true)
// If invalid, redirect to "/error"
// If valid, call next()


// TODO: Create POST route for "/reservations" with all three middleware functions
// The route should:
// 1. Use validateFields, validateGuests, and validateTime middleware
// 2. Create a new reservation object with an id
// 3. Add it to the reservations array
// 4. Redirect to "/success.html"
app.post("/reservations", (req, res) => {
    console.log(req.body)
});


// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian Reservation System is running on http://localhost:${PORT}`);
});