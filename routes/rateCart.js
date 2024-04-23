const express = require("express");
const router = express.Router();
const rateCartController = require("../controllers/rateCart");

router.post("/rateCarts", rateCartController.addRateCart);

router.get("/rateCarts", rateCartController.getRateCart);

router.delete("/rateCarts/:id", rateCartController.deleteRateCart);

router.put("/rateCarts/:id", rateCartController.updateByRateCart);

module.exports = router;
