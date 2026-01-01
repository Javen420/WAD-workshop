// Handling HTTP Requests​
const express = require("express");	// Import Express Library​
const app = express();			// Initialize Express​

app.get('/', (req, res) =>	// Handles “/” path
  res.send('Hello World!'));

app.get('/check', (req, res) => // Handles “/check” path
  res.send('All OK!'));

app.get('/*all', (req, res) => // Handles unknown path
  res.sendStatus(404));


app.listen(3000);