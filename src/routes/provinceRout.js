const express = require("express");

const logger = require('../libs/logger')
const { getProvinceData, getInhabitantsData } = require('../controllers/provinceCon');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const provinceData = await getProvinceData();
    const inhabitantsData = await getInhabitantsData();
    if (!provinceData || !inhabitantsData) {
      throw new Error('Could not retrieve any data.');
    }
    res.json([provinceData, inhabitantsData]);
  } catch (err) {
    logger.error(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;