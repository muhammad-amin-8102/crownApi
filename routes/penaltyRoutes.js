const express = require("express");
const router = express.Router();
const penaltyController = require("../controllers/penaltyController");

router.post("/penalties", penaltyController.createPenalty);
router.get("/penalties", penaltyController.getAllPenalties);
router.get("/penalties/:id", penaltyController.getPenaltyById);
router.put("/penalties/:id", penaltyController.updatePenalty);
router.delete("/penalties/:id", penaltyController.deletePenalty);
router.get("/guard/penalties", penaltyController.getGuardPenalty);

module.exports = router;
