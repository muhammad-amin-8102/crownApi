const express = require("express");
const router = express.Router();
const siteController = require("../controllers/siteController");

router.post("/sites", siteController.createSite);
router.get("/sites", siteController.getAllSites);
router.get("/sites/:id", siteController.getSiteById);
router.put("/sites/:id", siteController.updateSite);
router.delete("/sites/:id", siteController.deleteSite);
router.get("/client/site/:id", siteController.getSiteByClient);

module.exports = router;
