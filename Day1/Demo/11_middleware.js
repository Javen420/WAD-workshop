// Middleware Example​

const express = require("express");

const app = express();

//Middleware Example
app.use(express.json()); // Built-in middleware to parse JSON bodies

const users = {};
app.post("/user", (req, res) => {
    // res.sendStatus(200);
      const id = Object.keys(users).length + 1;
      users[id] = req.body?.name ?? "Unknown"; // Optional chaining and nullish coalescing
      res.status(200).send({ id, message: `Added ${users[id]}` }); // Send back the new user ID and a message

});

//---------------------------------------------------------------------
// Custom Middleware Function

const isAuth = (req, res, next) => {
  if (req.user && req.user.isLoggedIn) {
    return next();
  }
  res.redirect("/login");
}

// app.use(isAuth); //This middleware is applied to the entire app
// app.use("/user", isAuth); //This middleware is applied to /user route only
// app.get("/user", isAuth, (req, res) => { //This middleware is applied to /user route only
//     res.sendStatus(200);
// });

//---------------------------------------------------------------------

// Error-handling Middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
}


app.listen(3000);