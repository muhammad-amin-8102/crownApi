const express = require("express");
const multer = require("multer");
const router = express.Router();
const path = require("path");
const admin = require("firebase-admin");
const serviceAccount = require("../crown-6bb35-firebase-adminsdk-rblum-6f3fb88290.json");
const Notification = require("../models/notification");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://crown-6bb35-default-rtdb.firebaseio.com/",
});

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    const currentDateTime = Date.now();
    const extension = path.extname(file.originalname);
    const newFilename = `${currentDateTime}${extension}`;
    cb(null, newFilename);
  },
});
const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ status: false, message: "No file uploaded" });
  }
  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${
    req.file.filename
  }`;
  res
    .status(201)
    .json({ status: true, message: "File uploaded successfully", fileUrl });
});

router.post("/sendNotification", async (req, res) => {
  try {
    const { title, body, type } = req.body;

    for (const sendTo of type) {
      const message = {
        data: {
          title: title,
          body: body,
        },
        topic: sendTo,
      };
      await admin.messaging().send(message);
    }

    await Notification.create({ modelType: type, title, body });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ status: false, message: "Error sending notification" });
  }
});

router.get("/getNotification", async (req, res) => {
  try {
    const notifications = await Notification.findAll();
    res.json({ status: true, message: "Success", notifications });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: false, message: "Error getting notifications" });
  }
});

module.exports = router;
