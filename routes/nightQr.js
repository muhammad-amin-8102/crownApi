const express = require("express");
const router = express.Router();
const nightQRController = require("../controllers/nightQr");

router.post("/night-qr", nightQRController.markNightQr);
router.get("/night-qr/site", nightQRController.generateNightQRBySiteId);

module.exports = router;
