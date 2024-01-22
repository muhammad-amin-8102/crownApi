const TrainingTopic = require("../models/trainingTopics");

// Create a new training topic
const createTrainingTopic = async (req, res) => {
  try {
    const trainingTopic = await TrainingTopic.create(req.body);
    res.status(201).json({
      status: true,
      message: "Training topic added successfully",
      trainingTopic,
    });
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "Error creating training topic" });
  }
};

// Get all training topics
const getAllTrainingTopics = async (req, res) => {
  try {
    const trainingTopics = await TrainingTopic.findAll();
    const result = trainingTopics.map((item) => {
      item.site = item.site;
      item.pdf = item.pdf;
      return item;
    });

    res.json({ status: true, message: "Success", trainingTopics: result });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error getting training topics" });
  }
};

// Get a specific training topic by training_topics_id
const getTrainingTopicById = async (req, res) => {
  const { id } = req.params;
  try {
    const trainingTopic = await TrainingTopic.findAll({
      where: { user_id: id },
    });
    const result = trainingTopic.map((topic) => {
      topic.site = topic.site;
      topic.pdf = topic.pdf;
      return topic;
    });
    res.json({ status: true, message: "Success", result });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error getting training topic" });
  }
};

// Update a training topic by training_topics_id
const updateTrainingTopic = async (req, res) => {
  const { training_topics_id } = req.params;
  try {
    const [updated] = await TrainingTopic.update(req.body, {
      where: { training_topics_id },
    });
    if (updated) {
      const updatedTrainingTopic = await TrainingTopic.findByPk(
        training_topics_id
      );
      res.json({
        status: true,
        message: "Training topic updated successfully",
        updatedTrainingTopic,
      });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Training topic not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error updating training topic" });
  }
};

// Delete a training topic by training_topics_id
const deleteTrainingTopic = async (req, res) => {
  const { training_topics_id } = req.params;
  try {
    const deleted = await TrainingTopic.destroy({
      where: { training_topics_id },
    });
    if (deleted) {
      res.json({ status: true, message: "Training topic deleted" });
    } else {
      res
        .status(404)
        .json({ status: false, message: "Training topic not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error deleting training topic" });
  }
};

const getTrainingTopicBySite = async (req, res) => {
  const id = req.params.id;
  try {
    const topics = await TrainingTopic.findAll();

    const result = [];
    for (const topic of topics) {
      const sites = topic.site;
      for (const site of sites) {
        if (site == id) {
          result.push(topic);
          break;
        }
      }
    }

    const finalList = result.map((item) => {
      item.site = id;
      item.pdf = item.pdf;
      return item;
    });

    res.status(200).json({ status: true, message: "Ok", result: finalList });
  } catch (error) {
    res
      .status(500)
      .json({ status: false, message: "Error updating training topic" });
  }
};

module.exports = {
  createTrainingTopic,
  getAllTrainingTopics,
  getTrainingTopicById,
  updateTrainingTopic,
  deleteTrainingTopic,
  getTrainingTopicBySite,
};
