const express = require("express");
const router = express.Router();
const complaintController = require("../controllers/complaintController");

router.post("/complaints", complaintController.createComplaint);
router.get("/complaints", complaintController.getAllComplaints);
router.put(
  "/complaints/:id/replied",
  complaintController.updateComplaintReplied
);

module.exports = router;
