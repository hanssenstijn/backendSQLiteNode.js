const dal = require('../libs/db');
const logger = require('../libs/logger');

const getInhabitantsData = () => {
  logger.info('Retrieving inhabitants data');
  return dal.getDataFromTable('inhabitants');
};

const getProvinceData = () => {
  logger.info('Retrieving infoProvince data');
  return dal.getDataFromTable('infoProvince');
};

module.exports = {
  getProvinceData,
  getInhabitantsData
}