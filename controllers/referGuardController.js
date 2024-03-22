const Guard = require("../models/referGuard");

// Create a new guard
const createGuard = async (req, res) => {
  try {
    const guard = await Guard.create(req.body);
    res
      .status(201)
      .json({ status: true, message: "Guard Added Successfully!", guard });
  } catch (error) {
    console.log(error);
    res.status(400).json({ status: false, message: "Error creating guard" });
  }
};

// Get all guards
const getAllGuards = async (req, res) => {
  try {
    const guards = await Guard.findAll();
    res.json({ status: true, message: "Success", guards });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Error getting guards" });
  }
};

// Get a specific guard by ID
const getGuardById = async (req, res) => {
  const { id } = req.params;
  try {
    const guard = await Guard.findByPk(id);
    if (!guard) {
      res.status(404).json({ status: false, message: "Guard not found" });
      return;
    }
    res.json({ status: true, message: "Success", guard });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error getting guard" });
  }
};

// Update a guard by ID
const updateGuard = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Guard.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedGuard = await Guard.findByPk(id);
      res.json({
        status: true,
        message: "Guard Updated Successfully!",
        updatedGuard,
      });
    } else {
      res.status(404).json({ status: false, message: "Guard not found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error updating guard" });
  }
};

// Delete a guard by ID
const deleteGuard = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Guard.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ status: true, message: "Guard deleted" });
    } else {
      res.status(404).json({ status: false, message: "Guard not found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error deleting guard" });
  }
};

const loginGuard = async (req, res) => {
  const { phone } = req.params;
  try {
    const guard = await Guard.findAll({
      where: { mobile: phone },
    });
    if (guard.length === 0) {
      res.status(404).json({ status: false, message: "Guard not found" });
      return;
    }
    res.json({ status: true, message: "Success", guard: guard[0] });
  } catch (e) {
    res.status(500).json({ status: false, message: "Error fetching guard" });
  }
};

const getAllGuardsOnly = async (req, res) => {
  try {
    const guards = await Guard.findAll({ where: { post: "Security Guard" } });
    res.status(200).json({ status: true, message: "OK", guards });
  } catch (e) {
    res.status(500).json({ status: false, message: "Error fetching guard" });
  }
};

module.exports = {
  createGuard,
  getAllGuards,
  getGuardById,
  updateGuard,
  deleteGuard,
  loginGuard,
  getAllGuardsOnly,
};
