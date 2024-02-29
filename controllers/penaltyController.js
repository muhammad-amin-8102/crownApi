const Penalty = require("../models/penalty");
const Guard = require("../models/guard");

Penalty.belongsTo(Guard, { foreignKey: "guard_id" });
Guard.hasMany(Penalty, { foreignKey: "guard_id" });

// Create a new penalty
const createPenalty = async (req, res) => {
  try {
    const penalty = await Penalty.create(req.body);
    res
      .status(201)
      .json({ status: true, message: "Penalty Added Successfully!", penalty });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: "Error creating penalty" });
  }
};

// Get all penalties
const getAllPenalties = async (req, res) => {
  try {
    const penalties = await Penalty.findAll({
      include: Guard,
    });

    res.json({ status: true, message: "Success", penalties });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, message: "Error getting penalties" });
  }
};

// Get a specific penalty by ID
const getPenaltyById = async (req, res) => {
  const { id } = req.params;
  try {
    const penalty = await Penalty.findAll({
      where: {
        guard_id: id,
      },
    });
    if (!penalty) {
      res.status(404).json({ status: false, message: "Penalty not found" });
      return;
    }
    const flattenedResponse = {
      status: true,
      message: "Success",
      penalty,
    };
    res.json(flattenedResponse);
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error getting penalty and guard details",
    });
  }
};

// Update a penalty by ID
const updatePenalty = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Penalty.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedPenalty = await Penalty.findByPk(id);
      res.json({
        status: true,
        message: "Penalty Updated Successfully!",
        updatedPenalty,
      });
    } else {
      res.status(404).json({ status: false, message: "Penalty not found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error updating penalty" });
  }
};

// Delete a penalty by ID
const deletePenalty = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Penalty.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ status: true, message: "Penalty deleted" });
    } else {
      res.status(404).json({ status: false, message: "Penalty not found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error deleting penalty" });
  }
};

const getGuardPenalty = async (req, res) => {
  try {
    const id = req.query.id;
    console.log(id);
    const penalties = await Penalty.findAll({
      where: { guard_id: id },
      include: Guard,
    });
    res.status(200).json({ status: true, message: "OK", penalties });
  } catch (e) {
    console.log(e);
    res.status(500).json({ status: false, message: "Server error" });
  }
};

module.exports = {
  createPenalty,
  getAllPenalties,
  getPenaltyById,
  updatePenalty,
  deletePenalty,
  getGuardPenalty,
};
