const express = require("express");
const router = express.Router();
const billController = require("../controllers/bill");

router.post("/bill", billController.generateBill);
router.get("/bill/:siteId", billController.getBillById);

module.exports = router;
