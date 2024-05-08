const Site = require("../models/site");
const { generateBarCode } = require("../utils/helper");

// Create a new site
const createSite = async (req, res) => {
  try {
    const site = await Site.create(req.body);
    const qrCode = await generateBarCode(site.id, "");
    site.qr = qrCode;
    await site.save();
    res
      .status(201)
      .json({ status: true, message: "Site Added Successfully!", site });
  } catch (error) {
    res.status(400).json({ status: false, message: "Error creating site" });
  }
};

// Get all sites
const getAllSites = async (req, res) => {
  try {
    const sites = await Site.findAll();
    res.json({ status: true, message: "Success", sites });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: false, message: "Error getting sites" });
  }
};

// Get a specific site by ID
const getSiteById = async (req, res) => {
  const { id } = req.params;
  try {
    const site = await Site.findByPk(id);
    if (!site) {
      res.status(404).json({ status: false, message: "Site not found" });
      return;
    }
    res.json({ status: true, message: "Success", site });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error getting site" });
  }
};

// Update a site by ID
const updateSite = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Site.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedSite = await Site.findByPk(id);
      res.json({
        status: true,
        message: "Site Updated Successfully!",
        updatedSite,
      });
    } else {
      res.status(404).json({ status: false, message: "Site not found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error updating site" });
  }
};

// Delete a site by ID
const deleteSite = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Site.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ status: true, message: "Site deleted" });
    } else {
      res.status(404).json({ status: false, message: "Site not found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error deleting site" });
  }
};

const getSiteByClient = async (req, res) => {
  const id = req.params.id;
  try {
    const sites = await Site.findAll({ where: { person: id } });
    res.status(200).json({ status: true, message: "OK", sites });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error deleting site" });
  }
};

module.exports = {
  createSite,
  getAllSites,
  getSiteById,
  updateSite,
  deleteSite,
  getSiteByClient,
};
