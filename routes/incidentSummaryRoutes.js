const express = require("express");
const router = express.Router();
const incidentSummaryController = require("../controllers/incidentSummaryController");

router.post(
  "/incident-summaries",
  incidentSummaryController.createIncidentSummary
);
router.get(
  "/incident-summaries",
  incidentSummaryController.getAllIncidentSummaries
);
router.get(
  "/incident-summaries/:incident_summary_id",
  incidentSummaryController.getIncidentSummaryById
);
router.put(
  "/incident-summaries/:incident_summary_id",
  incidentSummaryController.updateIncidentSummary
);
router.delete(
  "/incident-summaries/:incident_summary_id",
  incidentSummaryController.deleteIncidentSummary
);
router.get(
  "/incident-summaries/user/:user_id",
  incidentSummaryController.getIncidentSummariesByUserId
);
router.get(
  "/incident-summaries/site/:site_code",
  incidentSummaryController.getIncidentSummariesBySite
);

module.exports = router;
