const LeaveRequest = require("../models/leaveRequest");
const Guard = require("../models/guard");
const { createNotification } = require("./notification");

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

const getAllLeaveRequests = async (req, res) => {
  try {
    const leaveRequests = await LeaveRequest.findAll();
    const finalList = [];
    for (const leaveRequest of leaveRequests) {
      const guard = await Guard.findByPk(leaveRequest.guard);
      finalList.push({
        ...leaveRequest.toJSON(),
        guardDetails: guard.toJSON(),
      });
    }
    res.json({ status: true, message: "Success", leaveRequests: finalList });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting leave requests" });
  }
};

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

const updateLeaveRequestStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const leaveRequest = await LeaveRequest.findByPk(id);

    if (!leaveRequest) {
      return res
        .status(404)
        .json({ status: false, message: "Leave request not found" });
    }

    await leaveRequest.update({ status });
    await createNotification(
      ["guard"],
      "Leave request",
      `Your leave request is ${status}.`,
      leaveRequest.guard
    );
    res.json({
      status: true,
      message: "Leave request status updated successfully",
    });
  } catch (error) {
    console.error("Error updating leave request status:", error);
    res
      .status(500)
      .json({ status: false, message: "Error updating leave request status" });
  }
};

module.exports = {
  addLeaveRequest,
  getAllLeaveRequests,
  getLeaveRequestsByGuard,
  updateLeaveRequestStatus,
};
