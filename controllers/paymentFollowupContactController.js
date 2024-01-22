const PaymentFollowupContact = require("../models/paymentFollowupContact");

// Create a new payment follow-up contact
const createPaymentFollowupContact = async (req, res) => {
  try {
    const paymentFollowupContact = await PaymentFollowupContact.create(
      req.body
    );
    res.status(201).json({
      status: true,
      message: "Payment Follow-up Contact Added Successfully!",
      paymentFollowupContact,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: false,
      message: "Error creating payment follow-up contact",
    });
  }
};

// Get payment follow-up contact by site id
const getPaymentFollowupContactBySiteId = async (req, res) => {
  const { siteId } = req.params;
  try {
    const paymentFollowupContacts = await PaymentFollowupContact.findAll({
      where: { site_id: siteId },
    });
    res.json({ status: true, message: "Success", paymentFollowupContacts });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Error getting payment follow-up contacts",
    });
  }
};

module.exports = {
  createPaymentFollowupContact,
  getPaymentFollowupContactBySiteId,
};
