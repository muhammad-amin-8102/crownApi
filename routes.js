const express = require("express");
const app = express();
const guardRoutes = require("./routes/guardRoutes");
const siteRoutes = require("./routes/siteRoutes");
const penaltiesRoutes = require("./routes/penaltyRoutes");
const blockedRoutes = require("./routes/blockedRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const trainingTopicsRoutes = require("./routes/trainingTopicsRoutes");
const incidentSummaryRoutes = require("./routes/incidentSummaryRoutes");
const workRoutes = require("./routes/workRoutes");
const requestRoutes = require("./routes/requestRoutes");
const adminRoutes = require("./routes/adminRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const leaveRequestRoutes = require("./routes/leaveRequestRoutes");
const referRoutes = require("./routes/referenceRoutes");
const emergencyRoutes = require("./routes/emergencyRoutes");
const complianceRoutes = require("./routes/complianceRoutes");
const puchedRoute = require("./routes/puchedRoute");
const pfc = require("./routes/paymentFollowupContactRoutes");
const ledger = require("./routes/ledgerRoutes");
const recorn = require("./routes/recornRoutes");
const notification = require("./routes/notification");
const slip = require("./routes/salarySlip");
const clientPenalty = require("./routes/clientSitePenalty");
const referGuard = require("./routes/referGuardController");
const nightQR = require("./routes/nightQr");
const rateCart = require("./routes/rateCart");
const bill = require("./routes/bill");

app.use(express.json());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use("/QRCodes", express.static(__dirname + "/QRCodes"));
app.use("/", require("./routes/helpers"));

//Routes
app.use("/", guardRoutes);
app.use("/", siteRoutes);
app.use("/", penaltiesRoutes);
app.use("/", blockedRoutes);
app.use("/", attendanceRoutes);
app.use("/", incidentRoutes);
app.use("/", trainingTopicsRoutes);
app.use("/", incidentSummaryRoutes);
app.use("/", workRoutes);
app.use("/", requestRoutes);
app.use("/", adminRoutes);
app.use("/", complaintRoutes);
app.use("/", leaveRequestRoutes);
app.use("/", referRoutes);
app.use("/", emergencyRoutes);
app.use("/", complianceRoutes);
app.use("/", puchedRoute);
app.use("/", pfc);
app.use("/", ledger);
app.use("/", recorn);
app.use("/", notification);
app.use("/", slip);
app.use("/", clientPenalty);
app.use("/", referGuard);
app.use("/", nightQR);
app.use("/", rateCart);
app.use("/", bill);

//Handle Wrong URL
app.use((req, res) => {
  res.status(404).json({ status: false, message: "Route not found" });
});

module.exports = app;
