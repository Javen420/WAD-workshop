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

// Middleware to validate required fields
function validateFields(req, res, next) {
    const { name, email, date, time, guests } = req.body;

    if (!name || !email || !date || !time || !guests) {
        return res.redirect("/error.html");
    }

    next();
}

// Middleware to validate guest count
function validateGuests(req, res, next) {
    const guests = parseInt(req.body.guests);

    if (guests < 1 || guests > 8) {
        return res.redirect("/error.html");
    }

    next();
}

// Middleware to validate reservation time
function validateTime(req, res, next) {
    const { time } = req.body;

    if (time < "17:00" || time > "22:00") {
        return res.redirect("/error.html");
    }

    next();
}

// POST route for "/reservations" - Create a new reservation
app.post("/reservations", validateFields, validateGuests, validateTime, (req, res) => {
    const { name, email, date, time, guests } = req.body;

    const newReservation = {
        id: nextId,
        name: name,
        email: email,
        date: date,
        time: time,
        guests: parseInt(guests)
    };

    nextId++;
    reservations.push(newReservation);

    console.log("New reservation:", newReservation);

    res.redirect("/success.html");
});

// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian Reservation System is running on http://localhost:${PORT}`);
});