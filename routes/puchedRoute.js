const express = require("express");
const router = express.Router();
const punchedController = require("../controllers/puchedController");

router.post("/puncheds", punchedController.createPunched);

router.get("/puncheds", punchedController.getAllPunched);

module.exports = router;
