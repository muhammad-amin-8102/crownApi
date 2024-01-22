const LeaveRequest = require("../models/leaveRequest");

// Create a new leave request record
const addLeaveRequest = async (req, res) => {
  try {
    const leaveRequest = await LeaveRequest.create(req.body);
    res.status(201).json({
      status: true,
      message: "Leave request added successfully",
      leaveRequest,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "Error adding leave request" });
  }
};

// Get all leave request records
const getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.findAll();
    res.json({ status: true, message: "Success", leaveRequests });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error getting leave requests" });
  }
};

// Get leave request records by guard
const getLeaveRequestsByGuard = async (req, res) => {
  const { guard } = req.params;
  try {
    const leaveRequests = await LeaveRequest.findAll({
      where: { guard },
    });
    res.json({ status: true, message: "Success", leaveRequests });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error getting leave requests by guard",
    });
  }
};

module.exports = {
  addLeaveRequest,
  getAllLeaveRequests,
  getLeaveRequestsByGuard,
};
