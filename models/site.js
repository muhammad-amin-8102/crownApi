const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../config/db");

const Site = sequelize.define(
  "sites",
  {
    image: DataTypes.STRING,
    person: DataTypes.INTEGER,
    site_name: DataTypes.STRING,
    site_code: DataTypes.STRING,
    site_address: DataTypes.STRING,
    qr: DataTypes.STRING,
    shift: {
      type: DataTypes.JSON,
      defaultValue: ["Day Shift"],
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  },
  {
    tableName: "sites",
    updatedAt: false,
  }
);

module.exports = Site;
