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

// Middleware to validate required fields
function validateFields(req, res, next) {
    const { name, email, eventType, date, guests, budget } = req.body;

    if (!name || !email || !eventType || !date || !guests || !budget) {
        return res.redirect("/error.html");
    }

    next();
}

// Middleware to validate guest count
function validateGuests(req, res, next) {
    const guests = parseInt(req.body.guests);

    if (guests < 10 || guests > 50) {
        return res.redirect("/error.html");
    }

    next();
}

// Middleware to validate budget
function validateBudget(req, res, next) {
    const budget = parseInt(req.body.budget);

    if (budget < 1000) {
        return res.redirect("/error.html");
    }

    next();
}

// POST route for "/book-event" - Create a new booking
app.post("/book-event", validateFields, validateGuests, validateBudget, (req, res) => {
    const { name, email, eventType, date, guests, budget } = req.body;

    const newBooking = {
        id: nextId,
        name: name,
        email: email,
        eventType: eventType,
        date: date,
        guests: parseInt(guests),
        budget: parseInt(budget)
    };

    nextId++;
    bookings.push(newBooking);

    console.log("New booking:", newBooking);

    res.redirect("/success.html");
});

// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian Private Events is running on http://localhost:${PORT}`);
});