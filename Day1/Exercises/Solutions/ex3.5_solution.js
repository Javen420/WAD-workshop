const express = require("express");
const app = express();
const PORT = 3000;

// Daily specials data
const dailySpecials = {
    monday: { day: "Monday", dish: "Truffle Risotto", description: "Creamy arborio rice with black truffle and parmesan", price: 45.00 },
    tuesday: { day: "Tuesday", dish: "Lobster Bisque", description: "Rich and creamy lobster soup with cognac", price: 38.00 },
    wednesday: { day: "Wednesday", dish: "Beef Wellington", description: "Prime beef tenderloin wrapped in puff pastry", price: 85.00 },
    thursday: { day: "Thursday", dish: "Seafood Platter", description: "Fresh oysters, prawns, and crab with champagne", price: 120.00 },
    friday: { day: "Friday", dish: "Wagyu Steak", description: "A5 Japanese wagyu with truffle butter", price: 150.00 },
    saturday: { day: "Saturday", dish: "Chef's Tasting Menu", description: "Seven-course journey through Chef Whitmore's classics", price: 200.00 },
    sunday: { day: "Sunday", dish: "Roast Duck", description: "Slow-roasted duck with orange glaze and seasonal vegetables", price: 65.00 }
};

// Array of valid days for validation
const validDays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

// GET route for "/specials" - All daily specials
app.get("/specials", (req, res) => {
    res.json(dailySpecials);
});

// GET route for "/specials/today" - Today's special
app.get("/specials/today", (req, res) => {
    const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const todayIndex = new Date().getDay();
    const todayName = dayNames[todayIndex];
    const todaySpecial = dailySpecials[todayName];

    res.json(todaySpecial);
});

// GET route for "/specials/:day" - Specific day's special
app.get("/specials/:day", (req, res) => {
    const day = req.params.day.toLowerCase();

    if (!validDays.includes(day)) {
        res.json({ error: "Invalid day. Please use: monday, tuesday, wednesday, thursday, friday, saturday, sunday" });
    } else {
        res.json(dailySpecials[day]);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian Specials API is running on http://localhost:${PORT}`);
});