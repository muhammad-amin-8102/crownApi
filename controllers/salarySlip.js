const SalarySlip = require("../models/salarySlip");

const createSalarySlip = async (req, res) => {
  try {
    const salarySlip = await SalarySlip.create(req.body);
    res.status(201).json({
      status: true,
      message: "Salary Slip added successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error creating Salary Slip" });
  }
};

const getSlipOfEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const salarySlip = await SalarySlip.findAll({
      where: { guard: id },
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json({ status: true, message: "OK", salarySlip });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error getting Salary Slip" });
  }
};

module.exports = {
  createSalarySlip,
  getSlipOfEmployee,
};
