const Work = require("../models/work");
const Guard = require("../models/guard");
const Site = require("../models/site");

// Create a new work record
const createWork = async (req, res) => {
  try {
    const work = await Work.create(req.body);
    res
      .status(201)
      .json({ status: true, message: "Work record added successfully", work });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "Error creating work record" });
  }
};

// Get work records by guard_id
const getWorkRecordsByGuardId = async (req, res) => {
  const { guard_id } = req.params;
  try {
    const workRecords = await Work.findAll({
      where: { guard_id },
      include: [
        { model: Site, as: "sites" },
        { model: Guard, as: "guards" },
      ],
    });
    res.json({ status: true, message: "Success", workRecords: workRecords[0] });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Error getting work records by guard_id",
    });
  }
};

// Get work records by site_id
const getWorkRecordsBySiteId = async (req, res) => {
  const { site_id } = req.params;
  try {
    const workRecords = await Work.findAll({
      where: { site_id },
      include: [
        { model: Site, as: "sites" },
        { model: Guard, as: "guards" },
      ],
    });
    res.json({ status: true, message: "Success", workRecords });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error getting work records by site_id",
    });
  }
};

module.exports = {
  createWork,
  getWorkRecordsByGuardId,
  getWorkRecordsBySiteId,
};
