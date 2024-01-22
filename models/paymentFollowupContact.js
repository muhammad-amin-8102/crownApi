const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const PaymentFollowupContact = sequelize.define(
  "paymentFollowupContacts",
  {
    site_name: DataTypes.STRING,
    site_code: DataTypes.STRING,
    contact_name: DataTypes.STRING,
    designation: DataTypes.STRING,
    contact_no1: DataTypes.STRING,
    contact_no2: DataTypes.STRING,
    email: DataTypes.STRING,
    site_id: DataTypes.INTEGER,
  },
  {
    tableName: "paymentFollowupContacts",
    updatedAt: false,
  }
);

module.exports = PaymentFollowupContact;
