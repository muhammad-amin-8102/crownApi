const QRCode = require("qrcode");
const fs = require("fs");
const path = require("path");

const generateBarCode = async (code, person) => {
  const uploadsDir = path.join(__dirname, "../QRCodes");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  const mapData = { code, person };
  const mapDataString = JSON.stringify(mapData);
  const qrCodeBuffer = await QRCode.toBuffer(mapDataString);
  const fileName = `qrcode-${Date.now()}.png`;
  const filePath = path.join(uploadsDir, fileName);
  fs.writeFileSync(filePath, qrCodeBuffer);
  const relativePath = path.relative(process.cwd(), filePath);
  return `/${relativePath}`;
};

const generateNightQRCode = async (siteId) => {
  const uploadsDir = path.join(__dirname, "../NightQRCodes");
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
  }

  const mapData = { 
    "type" : "nightQR",
    "siteId" : siteId,
  };
  const mapDataString = JSON.stringify(mapData);
  const qrCodeBuffer = await QRCode.toBuffer(mapDataString);
  const fileName = `nightqrcode-${Date.now()}.png`;
  const filePath = path.join(uploadsDir, fileName);
  fs.writeFileSync(filePath, qrCodeBuffer);
  const relativePath = path.relative(process.cwd(), filePath);
  return `/${relativePath}`;
};

module.exports = { generateBarCode, generateNightQRCode };
