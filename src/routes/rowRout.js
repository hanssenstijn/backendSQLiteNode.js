const express = require("express");

const logger = require('../libs/logger')
const { getRowData } = require('../controllers/specificRowsColumnsCon');

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const rowData = await getRowData();
    if (!rowData) {
      throw new Error('Could not retrieve any data.');
    }
    res.json(rowData);
  } catch (err) {
    logger.error(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;