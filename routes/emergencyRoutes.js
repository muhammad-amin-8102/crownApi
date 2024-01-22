const express = require("express");
const router = express.Router();
const emergencyController = require("../controllers/emergencyController");

// Create a new emergency
router.post("/emergencies", emergencyController.createEmergency);

// Get all emergencies
router.get("/emergencies", emergencyController.getAllEmergencies);

module.exports = router;
