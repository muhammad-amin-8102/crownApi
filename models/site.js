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
    billingAddress: DataTypes.STRING,
    contactPerson: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    designation: DataTypes.STRING,
    contractStart: DataTypes.STRING,
    contactEnd: DataTypes.STRING,
    qr: DataTypes.STRING,
    guard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tSO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tSS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tSG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tLG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tMFA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tFFA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tAG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    tCO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    dayShirtGuard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    nightShiftGuard: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    shift: {
      type: DataTypes.JSON,
      defaultValue: ["1st Shift", "2nd Shift", "3rd Shift"],
    },
    pattern: {
      type: DataTypes.JSON,
      defaultValue: ["8 hours, 12 hours"],
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
