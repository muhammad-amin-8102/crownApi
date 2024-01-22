const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/admins", adminController.createAdmin);
router.get("/admins/:phone", adminController.getAdminByPhone);

module.exports = router;
