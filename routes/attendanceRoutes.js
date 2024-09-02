const express = require("express");
const router = express.Router();
const attendanceController = require("../controllers/attendanceController");

router.post("/attendance", attendanceController.addAttendance);
router.get("/attendance", attendanceController.getAllAttendance);
router.get("/attendance/guard-with-range/:guard/:startDate/:endDate", attendanceController.getAllAttendanceByGuardAndDateRange);
router.get(
  "/attendance/guard/:guard/date/:date",
  attendanceController.getAttendanceByGuardAndDate
);
router.get(
  "/attendance/site/:site/date/:date",
  attendanceController.getAttendanceBySiteAndDate
);
router.put("/attendance/:id", attendanceController.updateEndTimeById);

module.exports = router;
