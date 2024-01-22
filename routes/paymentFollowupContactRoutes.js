const express = require("express");
const router = express.Router();
const paymentFollowupContactController = require("../controllers/paymentFollowupContactController");

router.post(
  "/payment-followup-contacts",
  paymentFollowupContactController.createPaymentFollowupContact
);

router.get(
  "/payment-followup-contacts/:siteId",
  paymentFollowupContactController.getPaymentFollowupContactBySiteId
);

module.exports = router;
