const express = require("express");
const router = express.Router();
const referenceController = require("../controllers/referenceController");

// Create a new reference
router.post("/references", referenceController.createReference);

// Get all references
router.get("/references", referenceController.getAllReferences);

// Get all references by guard
router.get("/references/guard/:guard", referenceController.getAllReferencesByGuard);

module.exports = router;
