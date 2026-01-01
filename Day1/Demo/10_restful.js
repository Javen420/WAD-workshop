// RESTful Routing with HTTP Methods​
// To test these routes, use Thunder Client.
const express = require("express");

const app = express();

app.post("/user", (req, res) =>
  res.sendStatus(200));

app.put("/user/:uid", (req, res) =>
  res.sendStatus(200));

app.delete("/user/:uid", (req, res) =>
  res.sendStatus(200));


app.listen(3000);