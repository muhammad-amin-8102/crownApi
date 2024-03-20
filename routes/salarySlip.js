const express = require("express");
const router = express.Router();
const salarySlip = require("../controllers/salarySlip");

router.post("/slip", salarySlip.createSalarySlip);
router.get("/slip/:id", salarySlip.getSlipOfEmployee);

module.exports = router;
