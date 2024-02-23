const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Complaint = sequelize.define(
  "complaint",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    siteName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    guard_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    replied: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "complaints",
    updatedAt: false,
  }
);

module.exports = Complaint;
