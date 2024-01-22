const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TrainingTopic = sequelize.define(
  "training_topics",
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
    site: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    pdf: {
      type: DataTypes.JSON,
      allowNull: false,
    },
  },
  {
    tableName: "training_topics",
    updatedAt: false,
  }
);

module.exports = TrainingTopic;
