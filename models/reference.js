const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Reference = sequelize.define(
  "references",
  {
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    location: DataTypes.STRING,
    post: DataTypes.STRING,
    guard: DataTypes.INTEGER,
  },
  {
    tableName: "references",
    updatedAt: false,
  }
);

module.exports = Reference;
