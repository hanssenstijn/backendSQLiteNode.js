const dal = require('../libs/dbRow');
const logger = require('../libs/logger');

const getRowData = () => {
  logger.info('Retrieving row data');
  return dal.getRowFromTable('inhabitants');
};

module.exports = {
  getRowData,
}