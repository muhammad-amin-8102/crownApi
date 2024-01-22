const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Incident = sequelize.define(
  "incident",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    incident: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "incidents",
    updatedAt: false,
  }
);

module.exports = Incident;
