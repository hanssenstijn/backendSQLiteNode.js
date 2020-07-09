const express = require("express");

const logger = require('../libs/logger')
const { getCombinedData } = require('../controllers/combinedCon');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const combinedData = await getCombinedData();
    if (!combinedData) {
      throw new Error('Could not retrieve any data.');
    }
    res.json(combinedData);
  } catch (err) {
    logger.error(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;