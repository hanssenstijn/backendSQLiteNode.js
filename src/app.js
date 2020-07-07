// Load packages
const express = require('express');
const health = require('express-ping');

// Save express package as constant
const app = express();

// Define port, process.env incase envirnment variable PORT is set
const port = process.env.PORT || 4000;

// API ping
app.use(health.ping());

// Handle errors
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// Run application
app.listen(port, () => console.log(`API ping is listening at http://localhost:${port}/ping`))