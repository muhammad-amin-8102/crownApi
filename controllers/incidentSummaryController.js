const IncidentSummary = require("../models/incident_summary");

// Create a new incident summary record
const createIncidentSummary = async (req, res) => {
  try {
    const incidentSummary = await IncidentSummary.create(req.body);
    res.status(201).json({
      status: true,
      message: "Incident summary added successfully",
      incidentSummary,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "Error creating incident summary" });
  }
};

// Get all incident summary records
const getAllIncidentSummaries = async (req, res) => {
  try {
    const incidentSummaries = await IncidentSummary.findAll();
    res.json({ status: true, message: "Success", incidentSummaries });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error getting incident summaries" });
  }
};

// Get a specific incident summary record by incident_summary_id
const getIncidentSummaryById = async (req, res) => {
  const { incident_summary_id } = req.params;
  try {
    const incidentSummary = await IncidentSummary.findByPk(incident_summary_id);
    if (!incidentSummary) {
      res
        .status(404)
        .json({ status: false, message: "Incident summary not found" });
      return;
    }
    res.json({ status: true, message: "Success", incidentSummary });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error getting incident summary" });
  }
};

// Update an incident summary record by incident_summary_id
const updateIncidentSummary = async (req, res) => {
  const { incident_summary_id } = req.params;
  try {
    const [updated] = await IncidentSummary.update(req.body, {
      where: { incident_summary_id },
    });
    if (updated) {
      const updatedIncidentSummary = await IncidentSummary.findByPk(
        incident_summary_id
      );
      res.json({
        status: true,
        message: "Incident summary updated successfully",
        updatedIncidentSummary,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Incident summary not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error updating incident summary" });
  }
};

// Delete an incident summary record by incident_summary_id
const deleteIncidentSummary = async (req, res) => {
  const { incident_summary_id } = req.params;
  try {
    const deleted = await IncidentSummary.destroy({
      where: { incident_summary_id },
    });
    if (deleted) {
      res.json({ status: true, message: "Incident summary deleted" });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Incident summary not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error deleting incident summary" });
  }
};

const getIncidentSummariesByUserId = async (req, res) => {
  const { user_id } = req.params;
  try {
    const incidentSummaries = await IncidentSummary.findAll({
      where: { user_id },
    });
    res.json({ status: true, message: "Success", incidentSummaries });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error getting incident summaries by user_id",
    });
  }
};

const getIncidentSummariesBySite = async (req, res) => {
  const { site_code } = req.params;
  try {
    const incidentSummaries = await IncidentSummary.findAll({
      where: { site_code },
    });
    res.json({ status: true, message: "Success", incidentSummaries });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error getting incident summaries by user_id",
    });
  }
};

module.exports = {
  createIncidentSummary,
  getAllIncidentSummaries,
  getIncidentSummaryById,
  updateIncidentSummary,
  deleteIncidentSummary,
  getIncidentSummariesByUserId,
  getIncidentSummariesBySite,
};
