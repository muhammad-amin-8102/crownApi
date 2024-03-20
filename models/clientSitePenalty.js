const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SitePenalty = sequelize.define("sitePenalty", {
  siteName: {
    type: DataTypes.STRING,
  },
  details: {
    type: DataTypes.JSON,
  },
});

module.exports = SitePenalty;
