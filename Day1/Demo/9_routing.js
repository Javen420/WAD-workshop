// RegExp Routing​
// To test these routes, use a browser or Thunder Client.

const express = require("express");

const app = express();


app.get('/hello/cody', (req, res) => res.send("Hello Cody!"));

app.get('/hello/bello', (req, res) => res.send("Hello Bello!"));

app.get('/hello/artie', (req, res) => res.send("Hello Artie!"));

app.get('/hello/oscar', (req, res) => res.send("Hello Oscar!"));

// app.get('/hello/:user', (req, res) =>
//   res.send(`Hello ${req.params.user}`));

app.get('/', (req, res) => // Handles “/” path
  res.send('Hello World!'));

app.get('/*slug', (req, res) => // Handles unknown path
  res.sendStatus(400));


app.listen(3000);