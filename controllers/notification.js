const Notification = require("../models/notification");

const createNotification = async (modelType, title, body, toId) => {
  await Notification.create({ modelType, title, body, toId });
};

const getAllNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      order: [["createdAt", "DESC"]],
    });

    res
      .status(200)
      .json({ status: true, message: "Notifications found", notifications });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ status: false, message: "Error sending notification" });
  }
};

module.exports = {
  createNotification,
  getAllNotifications,
};
