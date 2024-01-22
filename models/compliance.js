const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Compliance = sequelize.define(
  "compliances",
  {
    guard: DataTypes.INTEGER,
    month: DataTypes.STRING,
    site: DataTypes.INTEGER,
    pdf: DataTypes.STRING,
  },
  {
    tableName: "compliances",
    updatedAt: false,
  }
);

module.exports = Compliance;
