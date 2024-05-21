const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Bill = sequelize.define("bill", {
  siteId: {
    type: DataTypes.INTEGER,
  },
  link: {
    type: DataTypes.STRING,
  },
});

module.exports = Bill;
