const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Blocked = sequelize.define(
  "blocked",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
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
    tableName: "blocked",
    updatedAt: false,
  }
);

module.exports = Blocked;
