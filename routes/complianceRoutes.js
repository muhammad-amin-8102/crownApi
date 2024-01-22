const express = require("express");
const router = express.Router();
const complianceController = require("../controllers/complianceController");

// Create a new compliance record
router.post("/compliances", complianceController.createCompliance);

// Get all compliance records by site
router.get("/compliances/:site", complianceController.getComplianceBySite);

module.exports = router;
