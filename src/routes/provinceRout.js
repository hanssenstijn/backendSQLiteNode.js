const express = require("express");

const logger = require('../libs/logger')
const { getProvinceData } = require('../controllers/provinceCon');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const provinceData = await getProvinceData();
    if (!provinceData) {
      throw new Error('Could not retrieve any location data.');
    }
    res.json(provinceData);
  } catch (err) {
    logger.error(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;