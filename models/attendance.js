const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Attendance = sequelize.define(
  "attendance",
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
    site: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dress: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reason: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    tableName: "attendances",
    updatedAt: false,
  }
);

module.exports = Attendance;
