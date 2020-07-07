const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const logger = require('./logger');

const dbPath = path.resolve('./db/DutchProvinces.db');

const getDataFromTable = async (table) => {
  // Create database connection
  const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
    if (err) {
      logger.error(err.message);
      throw new Error('Could not read database');
    }
  });

  let params;
  let sql = `
    SELECT rowid AS id, *
    FROM ${table}`;

  // Query database
  const result = await new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) {
        logger.error(err);
        reject(err);
      }
      resolve(rows);
    });
  });

  // Close database connection
  db.close((err) => {
    if (err) {
      logger.error(err.message);
    }
  });

  return result;
};

module.exports = {
  getDataFromTable,
};