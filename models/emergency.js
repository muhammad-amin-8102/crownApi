const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Emergency = sequelize.define(
  "emergencies",
  {
    guard: DataTypes.INTEGER,
    site: DataTypes.INTEGER,
    lat: DataTypes.DECIMAL(10, 8),
    lng: DataTypes.DECIMAL(11, 8),
  },
  {
    tableName: "emergencies",
    updatedAt: false,
  }
);

module.exports = Emergency;
