const Complaint = require("../models/complaint");
const Guard = require("../models/guard");
const { createNotification } = require("./notification");

const createComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);
    res.status(201).json({
      status: true,
      message: "Complaint added successfully",
      complaint,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: "Error creating complaint" });
  }
};

const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.findAll();

    const finalList = [];
    for (const complaint of complaints) {
      const guard = await Guard.findByPk(complaint.guard_id);
      complaint["guard"] = guard;
      const complaintData = {
        ...complaint.toJSON(),
        guard: guard
          ? {
              id: guard.id,
              image: guard.image,
              name: guard.name,
              pf_number: guard.pf_number,
              esic_number: guard.esic_number,
              mobile: guard.mobile,
              post: guard.post,
              createdAt: guard.createdAt,
            }
          : null,
      };
      finalList.push(complaintData);
    }

    res.json({ status: true, message: "Success", complaints: finalList });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting complaints" });
  }
};

const updateComplaintReplied = async (req, res) => {
  const { id } = req.params;
  const { replied } = req.body;
  try {
    const complaint = await Complaint.findByPk(id);

    if (!complaint) {
      res.status(404).json({ status: false, message: "Complaint not found" });
      return;
    }
    await complaint.update({ replied });
    await createNotification(
      ["client"],
      "Reply of your Complaint",
      replied,
      complaint.guard_id
    );
    res.json({
      status: true,
      message: "Complaint replied status updated successfully",
      complaint,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Error updating complaint replied status",
    });
  }
};

module.exports = {
  createComplaint,
  getAllComplaints,
  updateComplaintReplied,
};
