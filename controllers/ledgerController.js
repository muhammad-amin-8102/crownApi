const Ledger = require("../models/ledger");

// Create a new ledger entry
const createLedgerEntry = async (req, res) => {
  try {
    const ledgerEntry = await Ledger.create(req.body);
    res.status(201).json({
      status: true,
      message: "Ledger Entry Added Successfully!",
      ledgerEntry,
    });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: false, message: "Error creating ledger entry" });
  }
};

// Get ledger entries by site id
const getLedgerEntriesBySiteId = async (req, res) => {
  const { siteId } = req.params;
  try {
    const ledgerEntries = await Ledger.findAll({
      where: { site_id: siteId },
    });
    res.json({ status: true, message: "Success", ledgerEntries });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting ledger entries" });
  }
};

module.exports = {
  createLedgerEntry,
  getLedgerEntriesBySiteId,
};
