const Punched = require("../models/pushed");

const createPunched = async (req, res) => {
  try {
    const punched = await Punched.create(req.body);
    res.status(201).json({
      status: true,
      message: "Punched Record Added Successfully!",
      punched,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: "Error creating punched record" });
  }
};

const getPushedAttbyFO = async (req, res) => {
  try {
    const punchedRecords = await Punched.findAll({
      where: {
        updateBy: req.params.fo,
      },
    });
    res.json({ status: true, message: "Success", punchedRecords });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting punched records" });
  }
};

const getAllPunched = async (req, res) => {
  try {
    const punchedRecords = await Punched.findAll();
    res.json({ status: true, message: "Success", punchedRecords });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting punched records" });
  }
};

module.exports = {
  createPunched,
  getAllPunched,
  getPushedAttbyFO,
};
