const express = require("express");
const router = express.Router();
const notification = require("../controllers/notification");

router.get("/notifications", notification.getAllNotifications);

module.exports = router;
