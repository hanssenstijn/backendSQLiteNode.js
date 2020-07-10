// Load packages
const express = require('express');
const health = require('express-ping');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// own package
const logger = require('./libs/logger');

// Require objects/methods (controllers)
const mockupData = require('./routes/mockupRout');
const provinceData = require('./routes/provinceRout');
const rowData = require('./routes/rowRout');
const combinedData = require('./routes/combinedRout');

// Save express package as constant
const app = express();

// testing purpose
app.get("/", (req, res) => {
  res.json({ status: "success", message: "Welcome To Testing API" });
});

// Define port, process.env incase envirnment variable PORT is set
const port = process.env.PORT || 4000;

// API ping
app.use(health.ping());

// Linking routers --> app.method(path,handler)
// app; instance expres, method; HTTP req method, path; on server, handler; function executed
app.use('/api/mockupData', mockupData);
app.use('/api/provinceData', provinceData);
app.use('/api/rowData', rowData);
app.use('/api/combinedData', combinedData);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Handle errors
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});

// Run application
const server = app.listen(port, () => console.log(
  `
    API ping is listening at http://localhost:${port}/ping
    Mockup data is listening at http://localhost:${port}/api/mockupData
    Province data from both tabels is listening at http://localhost:${port}/api/provinceData
    Row data from the inhabitants table is listening at http://localhost:${port}/api/rowData
    Combined data from both tables is listening at http://localhost:${port}/api/combinedData

  `))

module.exports = server