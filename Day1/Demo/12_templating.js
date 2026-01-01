const express = require("express");
const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
// Set the views directory to the current directory (Demo folder)
app.set("views", __dirname);

const user = {
    name: "Cody",
    isAdmin: true,
    age: 28,
    shoppingList: ["Coffee", "Tea", "Milk", "Juice"]
};

app.get("/", (req, res) => { // Route for root path
    res.render("12_templating", {
        user: user,
        shoppingList: user.shoppingList
    }); // Render the EJS template named "12_templating.ejs"
});


app.listen(PORT, () => {
    console.log(`Listening on http://http://127.0.0.1/:${PORT}`); // Log server start message
});