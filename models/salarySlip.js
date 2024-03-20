const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SalarySlip = sequelize.define("salarySlip", {
  guard: {
    type: DataTypes.INTEGER,
  },
  month: {
    type: DataTypes.STRING,
  },
  file: {
    type: DataTypes.STRING,
  },
});

module.exports = SalarySlip;
