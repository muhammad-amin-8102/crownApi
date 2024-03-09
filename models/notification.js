const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Notification = sequelize.define("notifications", {
  modelType: {
    type: DataTypes.JSON,
  },
  title: {
    type: DataTypes.STRING,
  },
  body: {
    type: DataTypes.STRING,
  },
});

module.exports = Notification;
