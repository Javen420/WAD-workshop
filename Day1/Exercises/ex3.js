const express = require("express");
const app = express();
const PORT = 3000;

// Menu data
const menuItems = [
    { id: 1, name: "Seared Foie Gras", category: "starters", price: 38.00 },
    { id: 2, name: "Beef Tartare", category: "starters", price: 36.00 },
    { id: 3, name: "Wagyu Beef Tenderloin", category: "mains", price: 125.00 },
    { id: 4, name: "Pan-Roasted Dover Sole", category: "mains", price: 85.00 },
    { id: 5, name: "Lobster Thermidor", category: "mains", price: 98.00 },
    { id: 6, name: "Mille-Feuille", category: "desserts", price: 26.00 },
    { id: 7, name: "Tarte Tatin", category: "desserts", price: 22.00 }
];

// Opening hours data
const openingHours = {
    monday: "Closed",
    tuesday: "18:00 - 23:00",
    wednesday: "18:00 - 23:00",
    thursday: "18:00 - 23:00",
    friday: "18:00 - 00:00",
    saturday: "17:00 - 00:00",
    sunday: "17:00 - 22:00"
};

// Contact information
const contactInfo = {
    phone: "+65 6123 4567",
    email: "reservations@thewistonian.com",
    address: "123 Fine Dining Street, Singapore 123456"
};

// TODO: Create GET route for "/" that returns a welcome message
// Response: { message: "Welcome to The Wistonian API" }


// TODO: Create GET route for "/menu" that returns all menu items


// TODO: Create GET route for "/menu/:category" that returns filtered menu items
// Valid categories: starters, mains, desserts
// If category is invalid, return: { error: "Category not found" }
// Hint: Use req.params.category to get the category from the URL
// Hint: Use the array filter() method to filter items by category


// TODO: Create GET route for "/hours" that returns opening hours


// TODO: Create GET route for "/contact" that returns contact information


// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian API is running on http://localhost:${PORT}`);
});