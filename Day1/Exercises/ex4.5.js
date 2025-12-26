const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from ex4.5 folder
app.use(express.static("ex4.5"));

// Store bookings in memory
const bookings = [];
let nextId = 1;

// TODO: Create middleware function "validateFields"
// Check that name, email, eventType, date, guests, and budget are all present in req.body
// If any fields are missing or empty, redirect to "/error.html"
// If all fields are present, call next() to continue


// TODO: Create middleware function "validateGuests"
// Check that guests is a number between 10 and 50
// Hint: req.body.guests is a string, convert it to a number using parseInt()
// If invalid, redirect to "/error.html"
// If valid, call next()


// TODO: Create middleware function "validateBudget"
// Check that budget is at least 1000
// Hint: req.body.budget is a string, convert it to a number using parseInt()
// If invalid, redirect to "/error.html"
// If valid, call next()


// TODO: Create POST route for "/book-event" with all three middleware functions
// The route should:
// 1. Use validateFields, validateGuests, and validateBudget middleware
// 2. Create a new booking object with an id
// 3. Add it to the bookings array
// 4. Redirect to "/success.html"


// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian Private Events is running on http://localhost:${PORT}`);
});