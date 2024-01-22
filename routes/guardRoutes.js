const express = require("express");
const router = express.Router();
const guardController = require("../controllers/guardController");

router.post("/guards", guardController.createGuard);
router.get("/guards", guardController.getAllGuards);
router.get("/guards/:id", guardController.getGuardById);
router.get("/guardsOnly", guardController.getAllGuardsOnly);
router.put("/guards/:id", guardController.updateGuard);
router.delete("/guards/:id", guardController.deleteGuard);
router.get("/login/guards/:phone", guardController.loginGuard);

module.exports = router;
