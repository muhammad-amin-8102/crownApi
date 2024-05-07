const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const RateCart = sequelize.define("rateCart", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prices: {
    type: DataTypes.JSON,
  },
});

module.exports = RateCart;
