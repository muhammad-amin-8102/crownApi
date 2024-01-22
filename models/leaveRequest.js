const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const LeaveRequest = sequelize.define(
  "leaveRequest",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    guard: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reason: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "leaveRequests",
    updatedAt: false,
  }
);

module.exports = LeaveRequest;
