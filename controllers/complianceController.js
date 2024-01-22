const Compliance = require("../models/compliance");

// Create a new compliance record
const createCompliance = async (req, res) => {
  try {
    const compliance = await Compliance.create(req.body);
    res.status(201).json({
      status: true,
      message: "Compliance Record Added Successfully!",
      compliance,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: "Error creating compliance record" });
  }
};

// Get all compliance records by site
const getComplianceBySite = async (req, res) => {
  const { site } = req.params;
  try {
    const complianceRecords = await Compliance.findAll({ where: { site } });
    res.json({ status: true, message: "Success", complianceRecords });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting compliance records" });
  }
};

module.exports = {
  createCompliance,
  getComplianceBySite,
};
