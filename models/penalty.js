const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Penalty = sequelize.define(
  "penalties",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    guard_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    reason: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "penalties",
    updatedAt: false,
  }
);

module.exports = Penalty;
