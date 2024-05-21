const Ledger = require("../models/ledger");

const createLedgerEntry = async (req, res) => {
  try {
    await Ledger.destroy({
      where: {
        billing_month: req.body.billing_month,
        site_id: req.body.site_id,
      },
    });

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

const getLedgerEntriesBySiteId = async (req, res) => {
  const { siteId } = req.params;
  const month = req.query.month;
  try {
    const ledgerEntries = await Ledger.findOne({
      where: { site_id: siteId, billing_month: month },
    });

    if (!ledgerEntries) {
      return res.status(404).json({
        status: false,
        message: "No ledger entries found for this site",
      });
    }

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
