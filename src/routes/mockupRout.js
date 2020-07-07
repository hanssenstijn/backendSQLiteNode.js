const express = require("express");

const { getMockupData } = require('../controllers/mockupCon');

//Creating Router() object
const router = express.Router();

// Provide all routes here, this is for Home page.
router.get("/", getMockupData);

module.exports = router;