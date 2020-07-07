const dal = require('../libs/db');
const logger = require('../libs/logger');

const getProvinceData = () => {
  logger.info('Retrieving location data');
  return dal.getDataFromTable('infoProvince');
};

module.exports = {
  getProvinceData,
}