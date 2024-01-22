const express = require("express");
const router = express.Router();
const blockedController = require("../controllers/blockedController");

router.post("/blocked", blockedController.createBlockedItem);
router.get("/blocked", blockedController.getAllBlockedItems);
router.get("/blocked/:user_id", blockedController.getBlockedItemById);
router.put("/blocked/:id", blockedController.updateBlockedItem);
router.delete("/blocked/:id", blockedController.deleteBlockedItem);

module.exports = router;
