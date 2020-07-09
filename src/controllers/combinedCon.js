const dal = require('../libs/dbCombined.js');
const logger = require('../libs/logger');

const getCombinedData = () => {
  logger.info('Retrieving combined data');
  return dal.getCombinedDataFromTables('infoProvince', 'inhabitants');
};

module.exports = {
  getCombinedData,
}