const Admin = require("../models/admin");

// Create a new admin record
const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res
      .status(201)
      .json({ status: true, message: "Admin added successfully", admin });
  } catch (error) {
    res.status(400).json({ status: false, message: "Error creating admin" });
  }
};

// Get admin records by phone
const getAdminByPhone = async (req, res) => {
  const { phone } = req.params;
  try {
    const admin = await Admin.findOne({
      where: { phone },
    });
    if (admin) {
      res.json({ status: true, message: "Success", admin });
    } else {
      res.status(404).json({ status: false, message: "Admin not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error getting admin by phone" });
  }
};

module.exports = {
  createAdmin,
  getAdminByPhone,
};
