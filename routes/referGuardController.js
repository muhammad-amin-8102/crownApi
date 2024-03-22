const express = require("express");
const router = express.Router();
const guardController = require("../controllers/referGuardController");

router.post("/referGuards", guardController.createGuard);
router.get("/referGuards", guardController.getAllGuards);
router.get("/referGuards/:id", guardController.getGuardById);
router.get("/referGuards", guardController.getAllGuardsOnly);
router.put("/referGuards/:id", guardController.updateGuard);
router.delete("/referGuards/:id", guardController.deleteGuard);
router.get("/login/referGuards/:phone", guardController.loginGuard);

module.exports = router;
