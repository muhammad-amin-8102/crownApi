const NightQR = require("../models/nightQr");
const { generateNightQRBySiteId } = require("../utils/helper");

const markNightQr = async (req, res) => {
  try {
    const nightQr = await NightQR.create(req.body);
    res.status(201).json({
      status: true,
      message: "Night QR added successfully",
      nightQr,
    });
  } catch (e) {
    res.status(500).json({
      status: false,
      message: "Something went wrong",
    });
  }
};

const generateNightQRBySiteId = async (req, res) => {
  try {
    const { siteId } = req.params;
    const qrCode = await generateNightQRBySiteId(siteId);
    res
      .status(201)
      .json({ status: true, message: "Night QR Generated Successfully!", nightQrUrl: qrCode });
  } catch (error) {
    res.status(400).json({ status: false, message: "Error generating Qr Code" });
  }
};

module.exports = {
  markNightQr,
  generateNightQRBySiteId
};
