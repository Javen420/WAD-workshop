const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views folder to ex5.5
app.set("views", path.join(__dirname, "ex5.5"));

// Daily specials data
const dailySpecials = [
    { day: "Monday", dish: "Truffle Risotto", description: "Creamy arborio rice with black truffle and parmesan", price: 45.00 },
    { day: "Tuesday", dish: "Lobster Bisque", description: "Rich and creamy lobster soup with cognac", price: 38.00 },
    { day: "Wednesday", dish: "Beef Wellington", description: "Prime beef tenderloin wrapped in puff pastry", price: 85.00 },
    { day: "Thursday", dish: "Seafood Platter", description: "Fresh oysters, prawns, and crab with champagne", price: 120.00 },
    { day: "Friday", dish: "Wagyu Steak", description: "A5 Japanese wagyu with truffle butter", price: 150.00 },
    { day: "Saturday", dish: "Chef's Tasting Menu", description: "Seven-course journey through Chef Whitmore's classics", price: 200.00 },
    { day: "Sunday", dish: "Roast Duck", description: "Slow-roasted duck with orange glaze and seasonal vegetables", price: 65.00 }
];

const restaurantInfo = {
    name: "The Wistonian",
    subtitle: "Forty Years of Excellence",
    phone: "+65 6123 4567",
    email: "reservations@thewistonian.com",
    address: "123 Fine Dining Street, Singapore 123456"
};

// Get today's day name
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = dayNames[new Date().getDay()];

// Route for specials page
app.get("/", (req, res) => {
    res.render("specials", {
        restaurant: restaurantInfo,
        specials: dailySpecials,
        today: today
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian is running on http://localhost:${PORT}`);
    console.log(`Today is ${today}`);
});