const express = require("express");
const router = express.Router();
const requestController = require("../controllers/requestController");

router.post("/requests", requestController.createRequest);
router.get("/requests", requestController.getAllRequests);

module.exports = router;
