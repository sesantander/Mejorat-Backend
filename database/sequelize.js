/* eslint-disable global-require */
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

let sequelizeConfig;
if (process.env.NODE_ENV === 'production') {
  sequelizeConfig = require('./config').production;
} else if (process.env.NODE_ENV === 'test') {
  sequelizeConfig = require('./config').test;
} else {
  sequelizeConfig = require('./config').development;
}

const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
    logging: true,
  },

);
module.exports = sequelize;
