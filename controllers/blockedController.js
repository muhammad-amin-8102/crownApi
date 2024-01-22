const Blocked = require("../models/blocked");

// Create a new blocked item
const createBlockedItem = async (req, res) => {
  try {
    const blockedItem = await Blocked.create(req.body);
    res.status(201).json({
      status: true,
      message: "Blocked item added successfully",
      blockedItem,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "Error creating blocked item" });
  }
};

// Get all blocked items
const getAllBlockedItems = async (req, res) => {
  try {
    const blockedItems = await Blocked.findAll();
    res.json({ status: true, message: "Success", blockedItems });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error getting blocked items" });
  }
};

// Get a specific blocked item by ID
const getBlockedItemById = async (req, res) => {
  const { user_id } = req.params;
  try {
    const blockedItem = await Blocked.findOne({
      where: { user_id },
    });
    if (!blockedItem) {
      res
        .status(404)
        .json({ status: false, message: "Blocked item not found" });
      return;
    }
    res.json({ status: true, message: "Success", blockedItem });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting blocked item" });
  }
};

// Update a blocked item by ID
const updateBlockedItem = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Blocked.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedBlockedItem = await Blocked.findByPk(id);
      res.json({
        status: true,
        message: "Blocked item updated successfully",
        updatedBlockedItem,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Blocked item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error updating blocked item" });
  }
};

// Delete a blocked item by ID
const deleteBlockedItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Blocked.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ status: true, message: "Blocked item deleted" });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Blocked item not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error deleting blocked item" });
  }
};

module.exports = {
  createBlockedItem,
  getAllBlockedItems,
  getBlockedItemById,
  updateBlockedItem,
  deleteBlockedItem,
};
