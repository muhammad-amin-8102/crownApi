const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const IncidentSummary = sequelize.define(
  "incident_summary",
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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    incident: {
      type: DataTypes.STRING,
    },
    site_code: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    media: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "incident_summaries",
    updatedAt: false,
  }
);

module.exports = IncidentSummary;
