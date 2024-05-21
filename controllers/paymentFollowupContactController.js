const PaymentFollowupContact = require("../models/paymentFollowupContact");
const Site = require("../models/site");

const createPaymentFollowupContact = async (req, res) => {
  try {
    await PaymentFollowupContact.destroy({
      where: { site_id: req.body.site_id },
    });

    const paymentFollowupContact = await PaymentFollowupContact.create(
      req.body
    );

    await Site.update(
      {
        contactPerson: req.body.contact_name,
        designation: req.body.designation,
        contactNumber: req.body.contact_no1,
      },
      { where: { id: req.body.site_id } }
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

const getPaymentFollowupContactBySiteId = async (req, res) => {
  const { siteId } = req.params;
  try {
    const paymentFollowupContacts = await PaymentFollowupContact.findOne({
      where: { site_id: siteId },
    });

    if (!paymentFollowupContacts) {
      return res.status(404).json({
        status: false,
        message: "No payment follow-up contact found for this site",
      });
    }

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
