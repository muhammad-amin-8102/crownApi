const express = require("express");
const router = express.Router();
const ledgerController = require("../controllers/ledgerController");

// Create a new ledger entry
router.post("/ledger", ledgerController.createLedgerEntry);

// Get ledger entries by site id
router.get("/ledger/:siteId", ledgerController.getLedgerEntriesBySiteId);

module.exports = router;
