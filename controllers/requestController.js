const Request = require("../models/request");
const Guard = require("../models/guard");

// Create a new request record
const createRequest = async (req, res) => {
  try {
    const request = await Request.create(req.body);
    res
      .status(201)
      .json({ status: true, message: "Request added successfully", request });
  } catch (error) {
    res.status(400).json({ status: false, message: "Error creating request" });
  }
};

// Get all request records
const getAllRequests = async (req, res) => {
  try {
    const requests = await Request.findAll();

    const result = requests.map((request) => {
      request.accessories = JSON.parse(request.accessories);
      return request;
    });
    res.json({ status: true, message: "Success", requests: result });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error getting requests" });
  }
};

module.exports = {
  createRequest,
  getAllRequests,
};
