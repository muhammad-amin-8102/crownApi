const Emergency = require("../models/emergency");

// Create a new emergency
const createEmergency = async (req, res) => {
  try {
    const emergency = await Emergency.create(req.body);
    res.status(201).json({
      status: true,
      message: "Emergency Added Successfully!",
      emergency,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: "Error creating emergency" });
  }
};

// Get all emergencies
const getAllEmergencies = async (req, res) => {
  try {
    const emergencies = await Emergency.findAll();
    res.json({ status: true, message: "Success", emergencies });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting emergencies" });
  }
};

module.exports = {
  createEmergency,
  getAllEmergencies,
};
