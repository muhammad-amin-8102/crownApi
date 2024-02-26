const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Request = sequelize.define(
  "request",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accessories: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    guard: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    fo: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: "requests",
    updatedAt: false,
  }
);

module.exports = Request;
