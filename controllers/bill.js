const Bill = require("../models/bill");
const puppeteer = require("puppeteer");
const { join } = require("path");

async function generatePDF(htmlContent) {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(htmlContent);

    const fileName = `invoice_${Date.now()}.pdf`;
    const filePath = join(__dirname, "..", "invoices", fileName);

    await page.pdf({
      path: filePath,
      format: "A4",
      margin: {
        top: "0.5in",
        right: "0.5in",
        bottom: "0.5in",
        left: "0.5in",
      },
    });

    await browser.close();

    return fileName;
  } catch (error) {
    console.error("Error generating PDF:", error);
    throw new Error("Failed to generate PDF");
  }
}

const generateBill = async (req, res) => {
  try {
    const {
      siteId,
      gst,
      pan,
      taxOnReverseCharge,
      invoiceSerialNumber,
      invoiceDate,
      clientName,
      billingAddress,
      siteAddress,
      state,
      stateCodes,
      gstNumber,
      description,
      sacCode,
      shiftsMonthly,
      rate,
      totalTaxableValue,
      cgstRate,
      cgstAmount,
      cgstTotal,
      sgstRate,
      sgstAmount,
      sgstTotal,
      igstRate,
      igstAmount,
      igstTotal,
      subTotal,
      total,
      others,
      totalInvoice,
    } = req.body;

    const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Invoice</title>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script
      src="https://code.jquery.com/jquery-3.6.4.min.js"
      integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8="
      crossorigin="anonymous"
    ></script>
    <style>
      .row {
        margin-right: -15px;
        margin-left: -15px;
      }

      .col-xs-1,
      .col-sm-1,
      .col-md-1,
      .col-lg-1,
      .col-xs-2,
      .col-sm-2,
      .col-md-2,
      .col-lg-2,
      .col-xs-3,
      .col-sm-3,
      .col-md-3,
      .col-lg-3,
      .col-xs-4,
      .col-sm-4,
      .col-md-4,
      .col-lg-4,
      .col-xs-5,
      .col-sm-5,
      .col-md-5,
      .col-lg-5,
      .col-xs-6,
      .col-sm-6,
      .col-md-6,
      .col-lg-6,
      .col-xs-7,
      .col-sm-7,
      .col-md-7,
      .col-lg-7,
      .col-xs-8,
      .col-sm-8,
      .col-md-8,
      .col-lg-8,
      .col-xs-9,
      .col-sm-9,
      .col-md-9,
      .col-lg-9,
      .col-xs-10,
      .col-sm-10,
      .col-md-10,
      .col-lg-10,
      .col-xs-11,
      .col-sm-11,
      .col-md-11,
      .col-lg-11,
      .col-xs-12,
      .col-sm-12,
      .col-md-12,
      .col-lg-12 {
        position: relative;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
      }

      .col-lg-12 {
        width: 100%;
      }

      .text-center {
        text-align: center;
      }

      body {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont,
          "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
          "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
        background-color: #fff;
      }

      .container {
        max-width: 1200px;
        margin: 0 auto;
        border: 1px #333;
      }

      .content {
        padding: 10px;
      }

      .table {
        border-collapse: collapse !important;
        width: 100%;
      }

      .table-bordered td,
      .table-bordered th {
        border: 1px solid #ddd !important;
      }

      .table > tbody > tr > td,
      .table > tbody > tr > th,
      .table > tfoot > tr > td,
      .table > tfoot > tr > th,
      .table > thead > tr > td,
      .table > thead > tr > th {
        padding: 8px;
        line-height: 1.42857143;
        vertical-align: top;
      }
    </style>

    <style>
      .text-end {
        text-align: right;
      }

      .colon {
        font-weight: bold;
        padding-right: 5px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="content">
        <div class="table-responsive">
          <table class="table" width="100%">
            <tr style="border: 2px solid black">
              <td class="text-center">
                <img style="width: 70%" src="https://shellcode.co.in/logo.png" alt="" />
              </td>
              <td>
                <h1 class="text-center">CROWN SECURITY AGENCIES</h1>
                <h4 class="text-center">for complete security solutions</h4>
                <div class="text-center">
                  <p>
                    02, Hajra Mansion, off Dr. Ansari Road, 2nd Rabodi, Thane
                    (W) - 400 601
                  </p>
                  <p>Call: 022 - 2540 2928 / 2541 2928 / 2542 2928</p>
                  <p>Email: csa.secure@crownsecuritysolutions.com</p>
                  <p>
                    <a href="https://crownsecuritysolutions.com/"
                      >www.crownsecuritysolutions.com</a
                    >
                  </p>
                </div>
              </td>
            </tr>
          </table>
          <table class="table">
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td width="20%">GST Number</td>
              <td width="80%"><span class="colon">:</span> ${gst}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td>PAN Number</td>
              <td><span class="colon">:</span> ${pan}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td>Tax on Reverse Charge</td>
              <td><span class="colon">:</span> ${taxOnReverseCharge}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td>Invoice Serial Number</td>
              <td><span class="colon">:</span> ${invoiceSerialNumber}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
                border-bottom: 2px solid black;
              "
            >
              <td>Invoice Date</td>
              <td><span class="colon">:</span> ${invoiceDate}</td>
            </tr>
          </table>
          <table class="table">
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
                border-bottom: 2px solid black;
              "
            >
              <td width="100%">Details of Service Receiver (Billed to)</td>
            </tr>
          </table>
          <table class="table">
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td width="20%">Client Name</td>
              <td width="80%"><span class="colon">:</span> ${clientName}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td>Billing Address</td>
              <td><span class="colon">:</span> ${billingAddress}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td>Site Address</td>
              <td><span class="colon">:</span> ${siteAddress}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td>State</td>
              <td><span class="colon">:</span> ${state}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td>State Codes</td>
              <td><span class="colon">:</span> ${stateCodes}</td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
              "
            >
              <td>GST Number</td>
              <td><span class="colon">:</span> ${gstNumber}</td>
            </tr>
          </table>

          <table class="table table-bordered" width="100%">
            <tr
              style="
                border-right: 2px solid black;
                border-left: 2px solid black;
                border-top: 2px solid black;
              "
            >
              <th rowspan="2" style="width: 5%">Sr No</th>
              <th rowspan="2" style="width: 25%">Description</th>
              <th rowspan="2" style="width: 10%">SAC Code</th>
              <th rowspan="2" style="width: 10%">Shifts Monthly</th>
              <th rowspan="2" style="width: 10%">Rate</th>
              <th rowspan="2" style="width: 10%">Total Taxable Value</th>
              <th colspan="2">CGST</th>
              <th colspan="2">SGST</th>
              <th colspan="2">IGST</th>
            </tr>

            <tr
              style="
                border-right: 2px solid black;
                border-left: 2px solid black;
              "
            >
              <td>Rate</td>
              <td>Amount</td>
              <td>Rate</td>
              <td>Amount</td>
              <td>Rate</td>
              <td>Amount</td>
            </tr>

            <tr
              style="
                border-right: 2px solid black;
                border-left: 2px solid black;
                height: 500px;
              "
            >
              <td>1</td>
              <td>${description}</td>
              <td>${sacCode}</td>
              <td>${shiftsMonthly}</td>
              <td>${rate}</td>
              <td>${totalTaxableValue}</td>
              <td>${cgstRate}</td>
              <td>${cgstAmount}</td>
              <td>${sgstRate}</td>
              <td>${sgstAmount}</td>
              <td>${igstRate}</td>
              <td>${igstAmount}</td>
            </tr>

            <tr
              style="
                border-right: 2px solid black;
                border-left: 2px solid black;
                border-top: 2px double black;
              "
            >
              <td></td>
              <td class="text-end">SUB-TOTAL:</td>
              <td></td>
              <td></td>
              <td></td>
              <td>₹ ${subTotal}</td>
              <td></td>
              <td>₹ ${cgstTotal}</td>
              <td></td>
              <td>₹ ${sgstTotal}</td>
              <td></td>
              <td>₹ ${igstTotal}</td>
            </tr>
          </table>

          <table
            class="table table-bordered"
            style="width: 100%; border: 2px solid black"
          >
            <tr>
              <td class="text-center" style="width: 70%" rowspan="4">
                Bill for the month of: <br />
                Rated Billing days:
              </td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>₹ ${total}</td>
            </tr>
            <tr>
              <td>Others:</td>
              <td>₹ ${others}</td>
            </tr>
          </table>

          <table
            class="table table-bordered"
            style="
              width: 100%;
              border-bottom: 2px solid black;
              border-left: 2px solid black;
              border-right: 2px solid black;
            "
          >
            <tr>
              <td style="width: 70%" rowspan="4">
                <b> <u>Invoice Value (In Words): </u> </b> <br />
                No Rupees and No Paise
              </td>
            </tr>
            <tr>
              <td><b>INVOICE TOTAL :</b></td>
              <td>₹ ${totalInvoice}</td>
            </tr>
            <tr>
              <td style="height: 50px" colspan="2"></td>
            </tr>
          </table>
          <table class="table">
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
                border-bottom: 2px solid black;
              "
            >
              <td width="100%">
                Certified that the Particulars given above are true and correct
              </td>
            </tr>
          </table>

          <table class="table" width="100%">
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
                border-top: 2px solid black;
              "
            >
              <td style="width: 60%; padding: 30px; height: 100px">
                <div
                  style="
                    border: 3px solid black;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                  "
                >
                  Vide Notificat'n No.29/2018-Central Tax(Rate) dtd 31.12.2018,
                  w.e.f. 01.01.2019 any regd. person receiving Security Services
                  from any person other than a body corporate is reqd to pay GST
                  under RCM (Reverse Charge Mechanism).
                </div>
              </td>
              <td style="width: 40%">
                <h4 class="text-center">For CROWN SECURITY AGENCIES</h4>
              </td>
            </tr>
            <tr
              style="
                border-left: 2px solid black;
                border-right: 2px solid black;
                border-bottom: 2px solid black;
              "
            >
              <td style="width: 20%; height: 100px; padding: 30px">
                <div
                  style="
                    border: 3px solid black;
                    width: 100%;
                    height: 100%;
                    padding: 10px;
                  "
                >
                  <b>PLS. NOTE & ABIDE: </b><br />
                  TDS @ 1% from 01.10.2009 (for Individual Prop. Firm) as per
                  Ammendments in Sec.-194C thru Finance Act(2), 2009
                </div>
              </td>
              <td>
                <h4 class="text-center">AUTHORISED SIGNATORY</h4>
                <p>Name : Nayab J. Shaikh</p>
                <p>Designation : Accountant</p>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </body>
</html>
`;

    const pdfPath = await generatePDF(html);
    const fileUrl = `/invoices/${pdfPath}`;

    const bill = await Bill.create({ siteId, link: fileUrl });
    res.status(200).json({
      status: true,
      message: "Bill generated successfully",
      data: bill,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Error generating bill",
    });
  }
};

const getBillById = async (req, res) => {
  try {
    const { siteId } = req.params;
    const bills = await Bill.findAll({ where: { siteId } });
    res.status(200).json({
      status: true,
      message: "Bill fetched successfully",
      data: bills,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      message: "Error getting bill",
    });
  }
};

module.exports = {
  generateBill,
  getBillById,
};
