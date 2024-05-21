const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Ledger = sequelize.define(
  "ledgers",
  {
    billing_month: DataTypes.STRING,
    site_name: DataTypes.STRING,
    site_code: DataTypes.STRING,
    sub_code: DataTypes.STRING,
    bill_date: DataTypes.STRING,
    client_name: DataTypes.STRING,
    site_location: DataTypes.STRING,
    bill_no: DataTypes.STRING,
    bill_original_amt: DataTypes.STRING,
    bill_revised_amt: DataTypes.STRING,
    due_days: DataTypes.STRING,
    recd_days: DataTypes.STRING,
    cheque_deposit_date: DataTypes.STRING,
    bank_credit_date: DataTypes.STRING,
    cheque_no: DataTypes.STRING,
    drawee_bank: DataTypes.STRING,
    with_advice_amt_recd: DataTypes.STRING,
    without_advice_amt_recd: DataTypes.STRING,
    tds_percentage: DataTypes.STRING,
    tds_amt: DataTypes.STRING,
    difference_amt: DataTypes.STRING,
    bill_amt_cleared: DataTypes.STRING,
    actual_payable_gst: DataTypes.STRING,
    cleared_bill_amt_minus_gst: DataTypes.STRING,
    cleared_bill_amt_minus_gst_tds: DataTypes.STRING,
    original_bill_amt_minus_gst_tds: DataTypes.STRING,
    cgst: DataTypes.STRING,
    sgst: DataTypes.STRING,
    igst: DataTypes.STRING,
    site_incharge: DataTypes.STRING,
    site_id: DataTypes.STRING,
  },
  {
    tableName: "ledgers",
    updatedAt: false,
  }
);

module.exports = Ledger;
