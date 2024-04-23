const NightQR = require("../models/nightQr");

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

module.exports = {
  markNightQr,
};
