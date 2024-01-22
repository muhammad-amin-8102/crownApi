const express = require("express");
const router = express.Router();
const trainingTopicsController = require("../controllers/trainingTopicsController");

router.post("/training-topics", trainingTopicsController.createTrainingTopic);
router.get("/training-topics", trainingTopicsController.getAllTrainingTopics);
router.get(
  "/training-topics/:id",
  trainingTopicsController.getTrainingTopicById
);
router.put(
  "/training-topics/:training_topics_id",
  trainingTopicsController.updateTrainingTopic
);
router.delete(
  "/training-topics/:training_topics_id",
  trainingTopicsController.deleteTrainingTopic
);

router.get(
  "/training-topics/site/:id",
  trainingTopicsController.getTrainingTopicBySite
);

module.exports = router;
