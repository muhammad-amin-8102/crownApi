const Reference = require("../models/reference");

// Create a new reference
const createReference = async (req, res) => {
  try {
    const reference = await Reference.create(req.body);
    res.status(201).json({
      status: true,
      message: "Reference Added Successfully!",
      reference,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: "Error creating reference" });
  }
};

// Get all references
const getAllReferences = async (req, res) => {
  try {
    const references = await Reference.findAll();
    res.json({ status: true, message: "Success", references });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting references" });
  }
};

const getAllReferencesByGuard = async (req, res) => {
  const { guard } = req.params;
  try {
    const references = await Reference.findAll({
      where: { guard },
    });
    res.json({ status: true, message: "Success", references });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting references" });
  }
};

module.exports = {
  createReference,
  getAllReferences,
  getAllReferencesByGuard
};
