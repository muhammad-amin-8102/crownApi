const express = require("express");
const router = express.Router();
const recornController = require("../controllers/recornController");

// Create a new ledger entry
router.post("/recorn", recornController.createRecornEntry);

// Get ledger entries by site id
router.get("/recorn/:siteId", recornController.getRecornEntriesBySiteId);

module.exports = router;
