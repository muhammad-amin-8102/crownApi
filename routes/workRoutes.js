const express = require("express");
const router = express.Router();
const workController = require("../controllers/workController");

router.post("/work", workController.createWork);
router.get("/work/guard/:guard_id", workController.getWorkRecordsByGuardId);
router.get("/work/site/:site_id", workController.getWorkRecordsBySiteId);

module.exports = router;
