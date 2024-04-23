const RateCart = require("../models/rateCart");

const addRateCart = async (req, res) => {
  try {
    await RateCart.create(req.body);
    res.status(201).json({
      status: true,
      message: "RateCart added successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

const getRateCart = async (req, res) => {
  try {
    const rateCart = await RateCart.findAll();
    res.status(200).json({
      status: true,
      rateCart,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

const deleteRateCart = async (req, res) => {
  try {
    await RateCart.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: true,
      message: "RateCart deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

const updateByRateCart = async (req, res) => {
  try {
    await RateCart.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: true,
      message: "RateCart updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  addRateCart,
  getRateCart,
  deleteRateCart,
  updateByRateCart,
};
