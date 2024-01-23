const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Ledger = sequelize.define(
  "ledgers",
  {
    billing_month: DataTypes.STRING,
    site_name: DataTypes.STRING,
    site_code: DataTypes.STRING,
    sub_code: DataTypes.STRING,
    bill_date: DataTypes.DATEONLY,
    client_name: DataTypes.STRING,
    site_location: DataTypes.STRING,
    bill_no: DataTypes.STRING,
    bill_original_amt: DataTypes.FLOAT,
    bill_revised_amt: DataTypes.FLOAT,
    due_days: DataTypes.INTEGER,
    recd_days: DataTypes.INTEGER,
    cheque_deposit_date: DataTypes.DATEONLY,
    bank_credit_date: DataTypes.DATEONLY,
    cheque_no: DataTypes.STRING,
    drawee_bank: DataTypes.STRING,
    with_advice_amt_recd: DataTypes.FLOAT,
    without_advice_amt_recd: DataTypes.FLOAT,
    tds_percentage: DataTypes.FLOAT,
    tds_amt: DataTypes.FLOAT,
    difference_amt: DataTypes.FLOAT,
    bill_amt_cleared: DataTypes.FLOAT,
    actual_payable_gst: DataTypes.FLOAT,
    cleared_bill_amt_minus_gst: DataTypes.FLOAT,
    cleared_bill_amt_minus_gst_tds: DataTypes.FLOAT,
    original_bill_amt_minus_gst_tds: DataTypes.FLOAT,
    cgst: DataTypes.FLOAT,
    sgst: DataTypes.FLOAT,
    igst: DataTypes.FLOAT,
    site_incharge: DataTypes.STRING,
    site_id: DataTypes.INTEGER,
  },
  {
    tableName: "ledgers",
    updatedAt: false,
  }
);

module.exports = Ledger;
