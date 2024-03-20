const express = require("express");
const router = express.Router();
const ClientPenalty = require("../models/clientSitePenalty");

router.post("/clientPenalties", async (req, res) => {
  try {
    await ClientPenalty.create({
      siteName: req.body.siteName,
      details: req.body.details,
    });
    res
      .status(201)
      .json({ status: true, message: "Client site penalty created" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

router.get("/clientPenalties", async (req, res) => {
  try {
    const site = req.query.siteName;
    const clientPenalty = await ClientPenalty.findAll({
      where: { siteName: site },
    });

    res.json({ status: true, message: "Success", clientPenalty });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
});

module.exports = router;
