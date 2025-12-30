const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views folder to ex5
app.set("views", path.join(__dirname, "ex5"));

// Menu data
const menuItems = [
    { id: 1, name: "Seared Foie Gras", category: "Starters", price: 38.00, available: true, featured: false },
    { id: 2, name: "Beef Tartare", category: "Starters", price: 36.00, available: false, featured: false },
    { id: 3, name: "Wagyu Beef Tenderloin", category: "Mains", price: 135.00, available: true, featured: true },
    { id: 4, name: "Pan-Roasted Dover Sole", category: "Mains", price: 85.00, available: true, featured: true },
    { id: 5, name: "Lobster Thermidor", category: "Mains", price: 98.00, available: true, featured: false },
    { id: 6, name: "Citrus Duck", category: "Mains", price: 78.00, available: false, featured: false },
    { id: 7, name: "Mille-Feuille", category: "Desserts", price: 26.00, available: true, featured: false },
    { id: 8, name: "Tarte Tatin", category: "Desserts", price: 22.00, available: true, featured: true }
];

const restaurantInfo = {
    name: "The Wistonian",
    subtitle: "Forty Years of Excellence",
    phone: "+65 6123 4567",
    email: "reservations@thewistonian.com",
    address: "123 Fine Dining Street, Singapore 123456"
};

// Categories for grouping
const categories = ["Starters", "Mains", "Desserts"];

// Route for menu page
app.get("/", (req, res) => {
    res.render("menu", {
        restaurant: restaurantInfo,
        menuItems: menuItems,
        categories: categories
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`The Wistonian is running on http://localhost:${PORT}`);
});