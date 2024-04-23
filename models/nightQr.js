const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const NightQR = sequelize.define("nightQr", {
  attId: {
    type: DataTypes.INTEGER,
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
});

module.exports = NightQR;
