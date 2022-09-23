const dbConfig = require("../config/db-config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DATABASE,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    dialect: dbConfig.DIALECT,
    host: dbConfig.HOST,
  }
);

module.exports = sequelize;
