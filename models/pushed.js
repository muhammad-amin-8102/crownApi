const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Punched = sequelize.define(
  "puncheds",
  {
    atId: DataTypes.INTEGER,
    guard: DataTypes.STRING,
    site: DataTypes.STRING,
    updateBy: DataTypes.STRING,
    date: DataTypes.STRING,
  },
  {
    tableName: "puncheds",
    updatedAt: false,
  }
);

module.exports = Punched;
