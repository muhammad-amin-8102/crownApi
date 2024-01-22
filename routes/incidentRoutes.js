const express = require("express");
const router = express.Router();
const incidentController = require("../controllers/incidentController");

router.post("/incidents", incidentController.createIncident);
router.get("/incidents", incidentController.getAllIncidents);
router.get("/incidents/:incident_id", incidentController.getIncidentById);
router.put("/incidents/:incident_id", incidentController.updateIncident);
router.delete("/incidents/:incident_id", incidentController.deleteIncident);

module.exports = router;
