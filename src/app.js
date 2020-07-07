// Load packages
const express = require('express');
const health = require('express-ping');

// Require objects/methods (controllers)
const mockupData = require('./routes/mockupRout');

// Save express package as constant
const app = express();

// Define port, process.env incase envirnment variable PORT is set
const port = process.env.PORT || 4000;

// API ping
app.use(health.ping());

// Linking routers --> app.method(path,handler)
// app; instance expres, method; HTTP req method, path; on server, handler; function executed
app.use('/api/mockupData', mockupData);

// Handle errors
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// Run application
app.listen(port, () => console.log(
  `
    API ping is listening at http://localhost:${port}/ping
    Mockup data is listening at http://localhost:${port}/api/mockupData
    
  `))