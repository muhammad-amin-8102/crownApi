const Attendance = require("../models/attendance");
const NightQR = require("../models/nightQr");

// Create a new attendance record
const addAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json({
      status: true,
      message: "Attendance added successfully",
      attendance,
    });
  } catch (error) {
    res.status(400).json({ status: false, message: "Error adding attendance" });
  }
};

// Get all attendance records
const getAllAttendance = async (req, res) => {
  try {
    const attendances = await Attendance.findAll();

    const finalList = [];
    for (const attendance of attendances) {
      const nightQr = await NightQR.findAll({
        where: { attId: attendance.id },
      });
      finalList.push({ ...attendance.toJSON(), nightQr });
    }

    res.json({ status: true, message: "Success", attendances: finalList });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting attendance records" });
  }
};

// Get attendance records by guard and date
const getAttendanceByGuardAndDate = async (req, res) => {
  const { guard, date } = req.params;
  try {
    const attendance = await Attendance.findOne({
      where: { guard, date },
    });
    if (!attendance) {
      return res.json({ status: false, message: "Success", attendance });
    } else if (attendance.endTime != null) {
      return res.json({ status: false, message: "Success", attendance: null });
    }
    attendance.dress = attendance.dress;

    res.json({ status: true, message: "Success", attendance });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error getting attendance records by guard and date",
    });
  }
};

// Get attendance records by site and date
const getAttendanceBySiteAndDate = async (req, res) => {
  const { site, date } = req.params;
  try {
    const attendance = await Attendance.findOne({
      where: { site, date },
    });
    attendance.dress = attendance.dress;
    res.json({ status: true, message: "Success", attendance });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error getting attendance records by site and date",
    });
  }
};

const updateEndTimeById = async (req, res) => {
  const { id } = req.params;
  const { endTime } = req.body;

  try {
    const attendance = await Attendance.findByPk(id);

    if (!attendance) {
      return res
        .status(404)
        .json({ status: false, message: "Attendance record not found" });
    }

    // Update endTime
    attendance.endTime = endTime;
    await attendance.save();

    return res.json({
      status: true,
      message: "EndTime updated successfully",
      attendance,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "Error updating endTime" });
  }
};

module.exports = {
  addAttendance,
  getAllAttendance,
  getAttendanceByGuardAndDate,
  getAttendanceBySiteAndDate,
  updateEndTimeById,
};
