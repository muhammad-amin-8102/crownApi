const Incident = require("../models/incident");

// Create a new incident record
const createIncident = async (req, res) => {
  try {
    const incident = await Incident.create(req.body);
    res
      .status(201)
      .json({ status: true, message: "Incident added successfully", incident });
  } catch (error) {
    res.status(400).json({ status: false, message: "Error creating incident" });
  }
};

// Get all incident records
const getAllIncidents = async (req, res) => {
  try {
    const incidents = await Incident.findAll();
    res.json({ status: true, message: "Success", incidents });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error getting incidents" });
  }
};

// Get a specific incident record by incident_id
const getIncidentById = async (req, res) => {
  const { incident_id } = req.params;
  try {
    const incident = await Incident.findByPk(incident_id);
    if (!incident) {
      res.status(404).json({ status: false, message: "Incident not found" });
      return;
    }
    res.json({ status: true, message: "Success", incident });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error getting incident" });
  }
};

// Update an incident record by incident_id
const updateIncident = async (req, res) => {
  const { incident_id } = req.params;
  try {
    const [updated] = await Incident.update(req.body, {
      where: { incident_id },
    });
    if (updated) {
      const updatedIncident = await Incident.findByPk(incident_id);
      res.json({
        status: true,
        message: "Incident updated successfully",
        updatedIncident,
      });
    } else {
      res.status(404).json({ status: false, message: "Incident not found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error updating incident" });
  }
};

// Delete an incident record by incident_id
const deleteIncident = async (req, res) => {
  const { incident_id } = req.params;
  try {
    const deleted = await Incident.destroy({
      where: { incident_id },
    });
    if (deleted) {
      res.json({ status: true, message: "Incident deleted" });
    } else {
      res.status(404).json({ status: false, message: "Incident not found" });
    }
  } catch (error) {
    res.status(500).json({ status: false, message: "Error deleting incident" });
  }
};

module.exports = {
  createIncident,
  getAllIncidents,
  getIncidentById,
  updateIncident,
  deleteIncident,
};
