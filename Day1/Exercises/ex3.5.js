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

// TODO: Create GET route for "/specials" that returns all daily specials


// TODO: Create GET route for "/specials/today" that returns today's special
// Hint: Use new Date().getDay() to get the current day (0 = Sunday, 1 = Monday, etc.)
// Hint: Create an array to convert the number to a day name


// TODO: Create GET route for "/specials/:day" that returns a specific day's special
// Hint: Use req.params.day to get the day from the URL
// Hint: Convert to lowercase to handle cases like "Monday" or "MONDAY"
// If the day is invalid, return: { error: "Invalid day. Please use: monday, tuesday, wednesday, thursday, friday, saturday, sunday" }


// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian Specials API is running on http://localhost:${PORT}`);
});