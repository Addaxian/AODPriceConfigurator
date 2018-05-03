// STUFF THAT WILL COME FROM A DB
// Exchange rates
const vAUD = 1.00;// AUD Exchange Rate
const vNZD = 1.05;// NZD Exchange Rate
const vBPS = 0.59;// BPS Exchange Rate

// Min Suite Count (Set as a variable so it can change in the future)
const vMinSuiteCount = 4;

// Greentree Prices
/* Standard Module */
const PGTMDLSTD = [ // Greentree  price & breaks
  [4, 577.50], // $577.50/user for first 12 users
  [12, 288.75], // $288.75/user for the next users until 12
  [40, 231.00], // $231.00/user for the next users until 40
  [80, 173.25],
  [199, 115.50],
  [9999, 999.00], // Failsafe catchall as we do not know what the pricing is after 199 users
];

/* Another Table */
const PGTMDLM_1 = [ // Greentree Mobile Table 1 Prices - Used for Mobile Timesheets
  [40, 110.00 * 1.05],
  [80, 82.5 * 1.05],
  [120, 55 * 1.05],
  [9999, 27.50 * 1.05],
];

/* Another Table */
const PGTMDLM_2 = [ // Greentree Mobile Table 1 Prices - Used for eRequisitions
  [30, 110.00 * 1.05],
  [70, 82.5 * 1.05],
  [110, 55 * 1.05],
  [9999, 27.50 * 1.05],
];

/* Another Table */
const PGTMDLE_1 = [ // Greentree Mobile Table 1 Prices - EDI - Financials
  [12, (6050 / 12) * 1.05],
  [16, 343.75 * 1.05],
  [28, 275 * 1.05],
  [80, 220 * 1.05],
  [9999, 165 * 1.05],
];

/* System Manager */
const PGTMDLSM1 = [ // Greentree price & breaks
  [8, 577.50], // $577.50/user for first 8 users
  [12, 433.125], // $433.13/user for the next users until 12
  [16, 360.9375],
  [28, 288.75],
  [80, 231.00],
  [199, 173.25],
  [9999, 999.00], // Failsafe catchall as we do not know what the pricing is after 199 users
];

/* Fixed Price Schedule */
const SchFixedP = [
  // Linear Prices
  ["ACO", 577.50],
  ["CFC", 115.50],
  // Fixed Prices
  ["FA_", 4000 * 1.1 * 1.05],
  ["QD_", 10000 * 1.1 * 1.05],
  ["BDR", 2000 * 1.5 * 1.1 * 1.05],
  ["WFD", 2000 * 1.5 * 1.1 * 1.05],
  ["WFI", 2000 * 1.1 * 1.05],
  ["ERQ", 1000 * 1.1 * 1.05],
  ["ERP", 2000 * 1.1 * 1.05],
  ["EAP", 1000 * 1.1 * 1.05],
  ["OWB", 3465],
];

// AOD Prices
const AOD_GTDBSmallPrc = 400;// Hosting price for Greentree DB for <= 7 Users
const AOD_GTDBLargePrc = 500;// Hosting price for Greentree DB for > 7 Users
const AOD_GTDBTestPrc = 500; // Price for each additional Greentree database hosted.  Users not counted.
const AOD_AODBasePrc = 60;// Per user price for any user that requires to access a windows client on AOD.
const AOD_GTFullPrc = 20.50;// Per user price for a full windows client - These users also get access to the Greentree Browser included
const AOD_GWPWebViewPrc = 250;// Per WebView Portal price, Users not counted but subject to fair use policy.
const AOD_GWPeAppPrc = 250;// Per eApprovals Portal price, Users not counted but subject to fair use policy.
const AOD_GWPeTshPrc = 250;// Per eTimsheets Portal price, Users not counted but subject to fair use policy.
const AOD_GWPeHRPrc = 250;// Per eHR Portal price, Users not counted but subject to fair use policy.
const AOD_GWPeReqPrc = 250;// Per eRequisitions Portal price, Users not counted but subject to fair use policy.
const AOD_GTBBasePrc = 250;// Per Base Browser Portal price and one is required if one or more Browser Mobile suites are required, Users not counted but subject to fair use policy.
const AOD_GTBCRMPrc = 200;// Per CRM Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
const AOD_GTBSalesPrc = 200;// Per Sales Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
const AOD_GTBSrvcPrc = 200;// Per Service Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
const AOD_GTBHRPrc = 200;// Per HR Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
const AOD_GTBTshPrc = 200;// Per Timesheet Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
const AOD_GTEBasePrc = 250;// Required as a base if ANY eDoc ONLY users exist.  Full Greentree Clients get eDocs included the Full Greentree license.
const AOD_GTEUserPrc = 30;// Per Greentree ONLY user.  An eDocs ONLY user is not allowed access to any other Greentree Windows client functionality.
const AOD_QLKSvrLitePrc = 500;// Per QlikView/QlikSense Server.  Does not include any users.
const AOD_QLKSvrPlusPrc = 700;// Per QlikView/QlikSense Server.  Does not include any users.
const AOD_QLKSvrXtrmPrc = 900;// Per QlikView/QlikSense Server.  Does not include any users.
const AOD_QLKUserPrc = 15;// Per QlikView/QlikSense User.  Does not include AOD Base access for the Windows QlikView client.
const AOD_MSOffStdPrc = 25;// Per Microsoft Office Standard User.  Does not include AOD Base access for the Windows client.
const AOD_MSOffProPrc = 49.75;// Per Microsoft Office Professional User.  Does not include AOD Base access for the Windows client.
const AOD_MSVisStdPrc = 12;// Per Microsoft Visio Standard User.  Does not include AOD Base access for the Windows client.
const AOD_MSVisProPrc = 26.30;// Per Microsoft Visio Professional User.  Does not include AOD Base access for the Windows client.
const AOD_MSPrjStdPrc = 27.95;// Per Microsoft Project Standard User.  Does not include AOD Base access for the Windows client.
const AOD_MSPrjProPrc = 46.60;// Per Microsoft Project Professional User.  Does not include AOD Base access for the Windows client.
const AOD_MSExUsrSmlPrc = 10;// Per Microsoft hosted mail box - Small.
const AOD_MSExUsrMedPrc = 20;// Per Microsoft hosted mail box - Medium.
const AOD_MSExUsrLrgPrc = 50;// Per Microsoft hosted mail box - Large.
const AOD_MiscStrg1Prc = 1.25;// Extra Storage Charge (For storage above storage allowed under acceptable usage policy).
const AOD_MiscCust1Prc = 15;// A typical single tier application price per user.


// GLOBAL STUFF
let issuesLog;// Global array holding issues  (issueType#, flagged elementID, originating elementID)
const modalPopUp = document.getElementById("myModal"); // Get the modal pop-up box

/* Issue Codes */
const issueType = [// Issue Types
  // 100 Range: GTSuite Issues
  [100, "Inadequate System Manager Licenses"],
  [101, "Reducing a Perpetual License Count"],
  [102, "Suite or Module user count is zero"],
  // 200 Range: Specific GT Module Issues
  [201, "Require GL Module"],
  [202, "Require AR Module"],
  [203, "Require IN Module"],
  [204, "Require SO Module"],
  [205, "Require PO Module"],
  [206, "Require Manufacturing Module"],
  [207, "Require Job costing Module"],
  [208, "Require Contacts and Relationships Module"],
  [209, "Require Customer Support Module"],
  [210, "Require Requisitions Module"],
  [211, "Require Workflow Designer Module"],
  [212, "Require eRquisitions Module"],
  [213, "Require A&A Module"],
  [214, "Require eApprovals Module"],
  // 300 Range: Specific GT Suite Issues
  [300, "Require a Total Users Count"],
  [301, "Require the Financial Suite"],
  [302, "Require the Distribution Suite"],
  [303, "Require the Job Cost Suite"],
  [304, "Require the Manufacturing Suite"],
  [305, "Require the CRM Basic Suite"],
  [306, "Require the CRM Sales Suite"],
  [307, "Require the CRM Support Suite"],
  [308, "Require the CRM Assets Suite"],
  [309, "Require the Supply Chain Suite"],
  [310, "Require the POS Suite"],
  [311, "Require the Global Finance Suite"],
  // 500 Range: AODHosting Issues
  [500, "AOD Base Users < Greentree System Manager Count"],
  [501, "AOD Full Windows Users < Greentree System Manager Count"],
];

/* Initialise the Pricing Tables */
/* exported InitialiseForm */
function InitialiseForm() { // eslint-disable-line no-unused-vars
  issuesLog = [];// (issueType#, originating elementID, flagged elementID)
  openMenuSec("Greentree");// For now while testing, open to the Greentree menu
}

// CODE FOR PRICING MANAGEMNT
// Calculate Greentree Prices
// Standard Module Pricing

// Sets AOD the unit prices based on currency
function SetPrices() {
  let cur;
  switch (document.getElementById("currency").value) {
    case "AUD":
      cur = vAUD;
      break;
    case "NZD":
      cur = vNZD;
      break;
    case "BPS":
      cur = vBPS;
      break;
    default:
      cur = 999;
  }
  setCellValue(document.getElementById("GTDBSmallPrc"), (AOD_GTDBSmallPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTDBLargePrc"), (AOD_GTDBLargePrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTDBTestPrc"), (AOD_GTDBTestPrc * cur).toFixed(2));
  setCellValue(document.getElementById("AODBasePrc"), (AOD_AODBasePrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTFullPrc"), (AOD_GTFullPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GWPWebViewPrc"), (AOD_GWPWebViewPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GWPeAppPrc"), (AOD_GWPeAppPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GWPeTshPrc"), (AOD_GWPeTshPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GWPeHRPrc"), (AOD_GWPeHRPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GWPeReqPrc"), (AOD_GWPeReqPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTBBasePrc"), (AOD_GTBBasePrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTBCRMPrc"), (AOD_GTBCRMPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTBSalesPrc"), (AOD_GTBSalesPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTBSrvcPrc"), (AOD_GTBSrvcPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTBHRPrc"), (AOD_GTBHRPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTBTshPrc"), (AOD_GTBTshPrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTEBasePrc"), (AOD_GTEBasePrc * cur).toFixed(2));
  setCellValue(document.getElementById("GTEUserPrc"), (AOD_GTEUserPrc * cur).toFixed(2));
  setCellValue(document.getElementById("QLKSvrLitePrc"), (AOD_QLKSvrLitePrc * cur).toFixed(2));
  setCellValue(document.getElementById("QLKSvrPlusPrc"), (AOD_QLKSvrPlusPrc * cur).toFixed(2));
  setCellValue(document.getElementById("QLKSvrXtrmPrc"), (AOD_QLKSvrXtrmPrc * cur).toFixed(2));
  setCellValue(document.getElementById("QLKUserPrc"), (AOD_QLKUserPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSOffStdPrc"), (AOD_MSOffStdPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSOffProPrc"), (AOD_MSOffProPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSVisStdPrc"), (AOD_MSVisStdPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSVisProPrc"), (AOD_MSVisProPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSPrjStdPrc"), (AOD_MSPrjStdPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSPrjProPrc"), (AOD_MSPrjProPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSExUsrSmlPrc"), (AOD_MSExUsrSmlPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSExUsrMedPrc"), (AOD_MSExUsrMedPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MSExUsrLrgPrc"), (AOD_MSExUsrLrgPrc * cur).toFixed(2));
  setCellValue(document.getElementById("MiscStrg1Prc"), (AOD_MiscStrg1Prc * cur).toFixed(2));
  setCellValue(document.getElementById("MiscCust1Prc"), (AOD_MiscCust1Prc * cur).toFixed(2));
}

/* set/run code for changing the Partner Margin */
function SetPartnerMarginLabel(evt) { // eslint-disable-line no-unused-vars
  if (evt.value === 0) {
    setCellValue(document.getElementById("marginLbl"), "Investment Calculator");
  } else {
    document.getElementById("marginLbl").innerText = "Partner Margin";
  }
}

/* CHECK RULES: On a change, check for any rules and update table accordinly */
function checkRules(evt) { // eslint-disable-line no-unused-vars
  let eleTmp, qtyTmp;

  // const cellName = getElement(evt, "TD").id;
  const cellName = getElement(evt, "ID").id;
  const lineName = getElement(evt, "TR").id;
  const tableName = getElement(evt, "TABLE").id;
  const isPerpetualLicense = document.getElementById("licenseType").value === "Perpetual";

  switch (tableName) { // Select rules based on the table
    case "tblGTSuite": // For the Greentree Suite Table
      checkMinVal(evt, vMinSuiteCount); // Apply Minimum user rule

      // If Perpetual License, check the Required Count is >= the Current Count
      // if (document.getElementById("licenseType").value === "Perpetual" && getCellValue(document.getElementById(lineName + "Rus")) < getCellValue(document.getElementById(lineName + "Cus"))) {
      if (isPerpetualLicense && getCellValue(document.getElementById(lineName + "Rus")) < getCellValue(document.getElementById(lineName + "Cus"))) {
        setIssue(101, lineName + "Rus", lineName + "Rus", true);
      } else {
        setIssue(101, lineName + "Rus", lineName + "Rus", false);
      }

      // *** Rules based on individual SUITE Line start here ***
      switch (cellName) {
        case "GTSuiteFINCus":
          qtyTmp = getCellValue(evt);
          if (document.getElementById("GTModuleAP_CHK").checked) { setCellValue(document.getElementById("GTModuleAP_CUS"), qtyTmp); calcLine("GTModuleAP_"); }
          if (document.getElementById("GTModuleAR_CHK").checked) { setCellValue(document.getElementById("GTModuleAR_CUS"), qtyTmp); calcLine("GTModuleAR_"); }
          if (document.getElementById("GTModuleARDCHK").checked) { setCellValue(document.getElementById("GTModuleARDCUS"), qtyTmp); calcLine("GTModuleARD"); }
          if (document.getElementById("GTModuleARACHK").checked) { setCellValue(document.getElementById("GTModuleARACUS"), qtyTmp); calcLine("GTModuleARA"); }
          if (document.getElementById("GTModuleGL_CHK").checked) { setCellValue(document.getElementById("GTModuleGL_CUS"), qtyTmp); calcLine("GTModuleGL_"); }
          if (document.getElementById("GTModuleGLCCHK").checked) { setCellValue(document.getElementById("GTModuleGLCCUS"), qtyTmp); calcLine("GTModuleGLC"); }
          if (document.getElementById("GTModuleGLRCHK").checked) { setCellValue(document.getElementById("GTModuleGLRCUS"), qtyTmp); calcLine("GTModuleGLR"); }
          if (document.getElementById("GTModuleGLTCHK").checked) { setCellValue(document.getElementById("GTModuleGLTCUS"), qtyTmp); calcLine("GTModuleGLT"); }
          if (document.getElementById("GTModuleSECCHK").checked) { setCellValue(document.getElementById("GTModuleSECCUS"), qtyTmp); calcLine("GTModuleSEC"); }
          if (document.getElementById("GTModuleFC_CHK").checked) { setCellValue(document.getElementById("GTModuleFC_CUS"), qtyTmp); calcLine("GTModuleFC_"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteFINRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(301, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleAP_CHK").checked) { setIssue(301, cellName, "GTModuleAP_HDR", true); }
            if (document.getElementById("GTModuleAR_CHK").checked) { setIssue(301, cellName, "GTModuleAR_HDR", true); }
            if (document.getElementById("GTModuleARDCHK").checked) { setIssue(301, cellName, "GTModuleARDHDR", true); }
            if (document.getElementById("GTModuleARACHK").checked) { setIssue(301, cellName, "GTModuleARAHDR", true); }
            if (document.getElementById("GTModuleGL_CHK").checked) { setIssue(301, cellName, "GTModuleGL_HDR", true); }
            if (document.getElementById("GTModuleGLCCHK").checked) { setIssue(301, cellName, "GTModuleGLCHDR", true); }
            if (document.getElementById("GTModuleGLRCHK").checked) { setIssue(301, cellName, "GTModuleGLRHDR", true); }
            if (document.getElementById("GTModuleGLTCHK").checked) { setIssue(301, cellName, "GTModuleGLTHDR", true); }
            if (document.getElementById("GTModuleSECCHK").checked) { setIssue(301, cellName, "GTModuleSECHDR", true); }
            if (document.getElementById("GTModuleFC_CHK").checked) { setIssue(301, cellName, "GTModuleFC_HDR", true); }
          }
          if (document.getElementById("GTModuleAP_CHK").checked) { setCellValue(document.getElementById("GTModuleAP_RUS"), getCellValue(evt)); calcLine("GTModuleAP_"); }
          if (document.getElementById("GTModuleAR_CHK").checked) { setCellValue(document.getElementById("GTModuleAR_RUS"), getCellValue(evt)); calcLine("GTModuleAR_"); }
          if (document.getElementById("GTModuleARDCHK").checked) { setCellValue(document.getElementById("GTModuleARDRUS"), getCellValue(evt)); calcLine("GTModuleARD"); }
          if (document.getElementById("GTModuleARACHK").checked) { setCellValue(document.getElementById("GTModuleARARUS"), getCellValue(evt)); calcLine("GTModuleARA"); }
          if (document.getElementById("GTModuleGL_CHK").checked) { setCellValue(document.getElementById("GTModuleGL_RUS"), getCellValue(evt)); calcLine("GTModuleGL_"); }
          if (document.getElementById("GTModuleGLCCHK").checked) { setCellValue(document.getElementById("GTModuleGLCRUS"), getCellValue(evt)); calcLine("GTModuleGLC"); }
          if (document.getElementById("GTModuleGLRCHK").checked) { setCellValue(document.getElementById("GTModuleGLRRUS"), getCellValue(evt)); calcLine("GTModuleGLR"); }
          if (document.getElementById("GTModuleGLTCHK").checked) { setCellValue(document.getElementById("GTModuleGLTRUS"), getCellValue(evt)); calcLine("GTModuleGLT"); }
          if (document.getElementById("GTModuleSECCHK").checked) { setCellValue(document.getElementById("GTModuleSECRUS"), getCellValue(evt)); calcLine("GTModuleSEC"); }
          if (document.getElementById("GTModuleFC_CHK").checked) { setCellValue(document.getElementById("GTModuleFC_RUS"), getCellValue(evt)); calcLine("GTModuleFC_"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteDISCus":
          if (document.getElementById("GTModuleIN_CHK").checked) { setCellValue(document.getElementById("GTModuleIN_CUS"), getCellValue(evt)); calcLine("GTModuleIN_"); }
          if (document.getElementById("GTModuleINRCHK").checked) { setCellValue(document.getElementById("GTModuleINRCUS"), getCellValue(evt)); calcLine("GTModuleINR"); }
          if (document.getElementById("GTModuleINACHK").checked) { setCellValue(document.getElementById("GTModuleINACUS"), getCellValue(evt)); calcLine("GTModuleINA"); }
          if (document.getElementById("GTModuleINSCHK").checked) { setCellValue(document.getElementById("GTModuleINSCUS"), getCellValue(evt)); calcLine("GTModuleINS"); }
          if (document.getElementById("GTModuleINICHK").checked) { setCellValue(document.getElementById("GTModuleINICUS"), getCellValue(evt)); calcLine("GTModuleINI"); }
          if (document.getElementById("GTModuleINQCHK").checked) { setCellValue(document.getElementById("GTModuleINQCUS"), getCellValue(evt)); calcLine("GTModuleINQ"); }
          if (document.getElementById("GTModuleINWCHK").checked) { setCellValue(document.getElementById("GTModuleINWCUS"), getCellValue(evt)); calcLine("GTModuleINW"); }
          if (document.getElementById("GTModuleSO_CHK").checked) { setCellValue(document.getElementById("GTModuleSO_CUS"), getCellValue(evt)); calcLine("GTModuleSO_"); }
          if (document.getElementById("GTModuleSOPCHK").checked) { setCellValue(document.getElementById("GTModuleSOPCUS"), getCellValue(evt)); calcLine("GTModuleSOP"); }
          if (document.getElementById("GTModuleSOFCHK").checked) { setCellValue(document.getElementById("GTModuleSOFCUS"), getCellValue(evt)); calcLine("GTModuleSOF"); }
          if (document.getElementById("GTModulePO_CHK").checked) { setCellValue(document.getElementById("GTModulePO_CUS"), getCellValue(evt)); calcLine("GTModulePO_"); }
          if (document.getElementById("GTModulePOICHK").checked) { setCellValue(document.getElementById("GTModulePOICUS"), getCellValue(evt)); calcLine("GTModulePOI"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteDISRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(302, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleIN_CHK").checked) { setIssue(302, cellName, "GTModuleIN_HDR", true); }
            if (document.getElementById("GTModuleINRCHK").checked) { setIssue(302, cellName, "GTModuleINRHDR", true); }
            if (document.getElementById("GTModuleINACHK").checked) { setIssue(302, cellName, "GTModuleINAHDR", true); }
            if (document.getElementById("GTModuleINSCHK").checked) { setIssue(302, cellName, "GTModuleINSHDR", true); }
            if (document.getElementById("GTModuleINICHK").checked) { setIssue(302, cellName, "GTModuleINIHDR", true); }
            if (document.getElementById("GTModuleINQCHK").checked) { setIssue(302, cellName, "GTModuleINQHDR", true); }
            if (document.getElementById("GTModuleINWCHK").checked) { setIssue(302, cellName, "GTModuleINWHDR", true); }
            if (document.getElementById("GTModuleSO_CHK").checked) { setIssue(302, cellName, "GTModuleSO_HDR", true); }
            if (document.getElementById("GTModuleSOPCHK").checked) { setIssue(302, cellName, "GTModuleSOPHDR", true); }
            if (document.getElementById("GTModuleSOFCHK").checked) { setIssue(302, cellName, "GTModuleSOFHDR", true); }
            if (document.getElementById("GTModulePO_CHK").checked) { setIssue(302, cellName, "GTModulePO_HDR", true); }
            if (document.getElementById("GTModulePOICHK").checked) { setIssue(302, cellName, "GTModulePOIHDR", true); }
          }
          if (document.getElementById("GTModuleIN_CHK").checked) { setCellValue(document.getElementById("GTModuleIN_RUS"), getCellValue(evt)); calcLine("GTModuleIN_"); }
          if (document.getElementById("GTModuleINRCHK").checked) { setCellValue(document.getElementById("GTModuleINRRUS"), getCellValue(evt)); calcLine("GTModuleINR"); }
          if (document.getElementById("GTModuleINACHK").checked) { setCellValue(document.getElementById("GTModuleINARUS"), getCellValue(evt)); calcLine("GTModuleINA"); }
          if (document.getElementById("GTModuleINSCHK").checked) { setCellValue(document.getElementById("GTModuleINSRUS"), getCellValue(evt)); calcLine("GTModuleINS"); }
          if (document.getElementById("GTModuleINICHK").checked) { setCellValue(document.getElementById("GTModuleINIRUS"), getCellValue(evt)); calcLine("GTModuleINI"); }
          if (document.getElementById("GTModuleINQCHK").checked) { setCellValue(document.getElementById("GTModuleINQRUS"), getCellValue(evt)); calcLine("GTModuleINQ"); }
          if (document.getElementById("GTModuleINWCHK").checked) { setCellValue(document.getElementById("GTModuleINWRUS"), getCellValue(evt)); calcLine("GTModuleINW"); }
          if (document.getElementById("GTModuleSO_CHK").checked) { setCellValue(document.getElementById("GTModuleSO_RUS"), getCellValue(evt)); calcLine("GTModuleSO_"); }
          if (document.getElementById("GTModuleSOPCHK").checked) { setCellValue(document.getElementById("GTModuleSOPRUS"), getCellValue(evt)); calcLine("GTModuleSOP"); }
          if (document.getElementById("GTModuleSOFCHK").checked) { setCellValue(document.getElementById("GTModuleSOFRUS"), getCellValue(evt)); calcLine("GTModuleSOF"); }
          if (document.getElementById("GTModulePO_CHK").checked) { setCellValue(document.getElementById("GTModulePO_RUS"), getCellValue(evt)); calcLine("GTModulePO_"); }
          if (document.getElementById("GTModulePOICHK").checked) { setCellValue(document.getElementById("GTModulePOIRUS"), getCellValue(evt)); calcLine("GTModulePOI"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteGBLCus":
          if (document.getElementById("GTModuleCONCHK").checked) { setCellValue(document.getElementById("GTModuleCONCUS"), getCellValue(evt)); calcLine("GTModuleCON"); }
          if (document.getElementById("GTModuleGFRCHK").checked) { setCellValue(document.getElementById("GTModuleGFRCUS"), getCellValue(evt)); calcLine("GTModuleGFR"); }
          if (document.getElementById("GTModuleGFTCHK").checked) { setCellValue(document.getElementById("GTModuleGFTCUS"), getCellValue(evt)); calcLine("GTModuleGFT"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteGBLRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(311, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleCONCHK").checked) { setIssue(311, cellName, "GTModuleCONHDR", true); }
            if (document.getElementById("GTModuleGFRCHK").checked) { setIssue(311, cellName, "GTModuleGFRHDR", true); }
            if (document.getElementById("GTModuleGFTCHK").checked) { setIssue(311, cellName, "GTModuleGFTHDR", true); }
          }
          if (document.getElementById("GTModuleCONCHK").checked) { setCellValue(document.getElementById("GTModuleCONRUS"), getCellValue(evt)); calcLine("GTModuleCON"); }
          if (document.getElementById("GTModuleGFRCHK").checked) { setCellValue(document.getElementById("GTModuleGFRRUS"), getCellValue(evt)); calcLine("GTModuleGFR"); }
          if (document.getElementById("GTModuleGFTCHK").checked) { setCellValue(document.getElementById("GTModuleGFTRUS"), getCellValue(evt)); calcLine("GTModuleGFT"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteJBCCus":
          if (document.getElementById("GTModuleJC_CHK").checked) { setCellValue(document.getElementById("GTModuleJC_CUS"), getCellValue(evt)); calcLine("GTModuleJC_"); }
          if (document.getElementById("GTModuleJCACHK").checked) { setCellValue(document.getElementById("GTModuleJCACUS"), getCellValue(evt)); calcLine("GTModuleJCA"); }
          if (document.getElementById("GTModuleJCPCHK").checked) { setCellValue(document.getElementById("GTModuleJCPCUS"), getCellValue(evt)); calcLine("GTModuleJCP"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteJBCRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(303, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleJC_CHK").checked) { setIssue(303, cellName, "GTModuleJC_HDR", true); }
            if (document.getElementById("GTModuleJCACHK").checked) { setIssue(303, cellName, "GTModuleJCAHDR", true); }
            if (document.getElementById("GTModuleJCPCHK").checked) { setIssue(303, cellName, "GTModuleJCPHDR", true); }
          }
          if (document.getElementById("GTModuleJC_CHK").checked) { setCellValue(document.getElementById("GTModuleJC_RUS"), getCellValue(evt)); calcLine("GTModuleJC_"); }
          if (document.getElementById("GTModuleJCACHK").checked) { setCellValue(document.getElementById("GTModuleJCARUS"), getCellValue(evt)); calcLine("GTModuleJCA"); }
          if (document.getElementById("GTModuleJCPCHK").checked) { setCellValue(document.getElementById("GTModuleJCPRUS"), getCellValue(evt)); calcLine("GTModuleJCP"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteMANCus":
          if (document.getElementById("GTModuleMRBCHK").checked) { setCellValue(document.getElementById("GTModuleMRBCUS"), getCellValue(evt)); calcLine("GTModuleMRB"); }
          if (document.getElementById("GTModuleMRPCHK").checked) { setCellValue(document.getElementById("GTModuleMRPCUS"), getCellValue(evt)); calcLine("GTModuleMRP"); }
          if (document.getElementById("GTModuleMRFCHK").checked) { setCellValue(document.getElementById("GTModuleMRFCUS"), getCellValue(evt)); calcLine("GTModuleMRF"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteMANRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(304, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleMRBCHK").checked) { setIssue(304, cellName, "GTModuleMRBHDR", true); }
            if (document.getElementById("GTModuleMRPCHK").checked) { setIssue(304, cellName, "GTModuleMRPHDR", true); }
            if (document.getElementById("GTModuleMRFCHK").checked) { setIssue(304, cellName, "GTModuleMRFHDR", true); }
          }
          if (document.getElementById("GTModuleMRBCHK").checked) { setCellValue(document.getElementById("GTModuleMRBRUS"), getCellValue(evt)); calcLine("GTModuleMRB"); }
          if (document.getElementById("GTModuleMRPCHK").checked) { setCellValue(document.getElementById("GTModuleMRPRUS"), getCellValue(evt)); calcLine("GTModuleMRP"); }
          if (document.getElementById("GTModuleMRFCHK").checked) { setCellValue(document.getElementById("GTModuleMRFRUS"), getCellValue(evt)); calcLine("GTModuleMRF"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteCBSCus":
          if (document.getElementById("GTModuleCCRCHK").checked) { setCellValue(document.getElementById("GTModuleCCRCUS"), getCellValue(evt)); calcLine("GTModuleCCR"); }
          if (document.getElementById("GTModuleCDCCHK").checked) { setCellValue(document.getElementById("GTModuleCDCCUS"), getCellValue(evt)); calcLine("GTModuleCDC"); }
          if (document.getElementById("GTModuleCKBCHK").checked) { setCellValue(document.getElementById("GTModuleCKBCUS"), getCellValue(evt)); calcLine("GTModuleCKB"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteCBSRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(305, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleCCRCHK").checked) { setIssue(304, cellName, "GTModuleCCRHDR", true); }
            if (document.getElementById("GTModuleCDCCHK").checked) { setIssue(304, cellName, "GTModuleCDCHDR", true); }
            if (document.getElementById("GTModuleCKBCHK").checked) { setIssue(304, cellName, "GTModuleCKBHDR", true); }
          }
          if (document.getElementById("GTModuleCCRCHK").checked) { setCellValue(document.getElementById("GTModuleCCRRUS"), getCellValue(evt)); calcLine("GTModuleCCR"); }
          if (document.getElementById("GTModuleCDCCHK").checked) { setCellValue(document.getElementById("GTModuleCDCRUS"), getCellValue(evt)); calcLine("GTModuleCDC"); }
          if (document.getElementById("GTModuleCKBCHK").checked) { setCellValue(document.getElementById("GTModuleCKBRUS"), getCellValue(evt)); calcLine("GTModuleCKB"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteCSLCus":
          if (document.getElementById("GTModuleCSMCHK").checked) { setCellValue(document.getElementById("GTModuleCSMCUS"), getCellValue(evt)); calcLine("GTModuleCSM"); }
          if (document.getElementById("GTModuleCBMCHK").checked) { setCellValue(document.getElementById("GTModuleCBMCUS"), getCellValue(evt)); calcLine("GTModuleCBM"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteCSLRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(306, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleCSMCHK").checked) { setIssue(306, cellName, "GTModuleCSMHDR", true); }
            if (document.getElementById("GTModuleCBMCHK").checked) { setIssue(306, cellName, "GTModuleCBMHDR", true); }
          }
          if (document.getElementById("GTModuleCSMCHK").checked) { setCellValue(document.getElementById("GTModuleCSMRUS"), getCellValue(evt)); calcLine("GTModuleCSM"); }
          if (document.getElementById("GTModuleCBMCHK").checked) { setCellValue(document.getElementById("GTModuleCBMRUS"), getCellValue(evt)); calcLine("GTModuleCBM"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteCSUCus":
          if (document.getElementById("GTModuleCCSCHK").checked) { setCellValue(document.getElementById("GTModuleCCSCUS"), getCellValue(evt)); calcLine("GTModuleCCS"); }
          if (document.getElementById("GTModuleCCTCHK").checked) { setCellValue(document.getElementById("GTModuleCCTCUS"), getCellValue(evt)); calcLine("GTModuleCCT"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteCSURus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(307, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleCCSCHK").checked) { setIssue(307, cellName, "GTModuleCCSHDR", true); }
            if (document.getElementById("GTModuleCCTCHK").checked) { setIssue(307, cellName, "GTModuleCCTHDR", true); }
          }
          if (document.getElementById("GTModuleCCSCHK").checked) { setCellValue(document.getElementById("GTModuleCCSRUS"), getCellValue(evt)); calcLine("GTModuleCCS"); }
          if (document.getElementById("GTModuleCCTCHK").checked) { setCellValue(document.getElementById("GTModuleCCTRUS"), getCellValue(evt)); calcLine("GTModuleCCT"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteCASCus":
          if (document.getElementById("GTModuleAM_CHK").checked) { setCellValue(document.getElementById("GTModuleAM_CUS"), getCellValue(evt)); calcLine("GTModuleAM_"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteCASRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(308, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleAM_CHK").checked) { setIssue(308, cellName, "GTModuleAM_HDR", true); } // eslint-disable-line no-lonely-if
          }
          if (document.getElementById("GTModuleAM_CHK").checked) { setCellValue(document.getElementById("GTModuleAM_RUS"), getCellValue(evt)); calcLine("GTModuleAM_"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteSCMCus":
          if (document.getElementById("GTModuleSCRCHK").checked) { setCellValue(document.getElementById("GTModuleSCRCUS"), getCellValue(evt)); calcLine("GTModuleSCR"); }
          if (document.getElementById("GTModuleSCACHK").checked) { setCellValue(document.getElementById("GTModuleSCACUS"), getCellValue(evt)); calcLine("GTModuleSCA"); }
          if (document.getElementById("GTModuleCCICHK").checked) { setCellValue(document.getElementById("GTModuleCCICUS"), getCellValue(evt)); calcLine("GTModuleCCI"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuiteSCMRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(309, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleSCRCHK").checked) { setIssue(309, cellName, "GTModuleSCRHDR", true); }
            if (document.getElementById("GTModuleSCACHK").checked) { setIssue(309, cellName, "GTModuleSCAHDR", true); }
            if (document.getElementById("GTModuleCCICHK").checked) { setIssue(309, cellName, "GTModuleCCIHDR", true); }
          }
          if (document.getElementById("GTModuleSCRCHK").checked) { setCellValue(document.getElementById("GTModuleSCRRUS"), getCellValue(evt)); calcLine("GTModuleSCR"); }
          if (document.getElementById("GTModuleSCACHK").checked) { setCellValue(document.getElementById("GTModuleSCARUS"), getCellValue(evt)); calcLine("GTModuleSCA"); }
          if (document.getElementById("GTModuleCCICHK").checked) { setCellValue(document.getElementById("GTModuleCCIRUS"), getCellValue(evt)); calcLine("GTModuleCCI"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuitePOSCus":
          if (document.getElementById("GTModulePOSCHK").checked) { setCellValue(document.getElementById("GTModulePOSCUS"), getCellValue(evt)); calcLine("GTModulePOS"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTCus"))) { setIssue(100, cellName, "GTSuiteTOTCus", true); } else { setIssue(100, cellName, "GTSuiteTOTCus", false); }
          break;

        case "GTSuitePOSRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            setIssue(310, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModulePOSCHK").checked) { setIssue(310, cellName, "GTModulePOSHDR", true); } // eslint-disable-line no-lonely-if
          }
          if (document.getElementById("GTModulePOSCHK").checked) { setCellValue(document.getElementById("GTModulePOSRUS"), getCellValue(evt)); calcLine("GTModulePOS"); }
          if (getCellValue(evt) > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(100, cellName, "GTSuiteTOTRus", true); } else { setIssue(100, cellName, "GTSuiteTOTRus", false); }
          break;

        case "GTSuiteTOTCus":
          setCellValue(document.getElementById("GTModuleSM_CUS"), getCellValue(document.getElementById("GTSuiteTOTCus")));
          calcLine("GTModuleSM_");

          if (document.getElementById("GTModuleWFACHK").checked) { setCellValue(document.getElementById("GTModuleWFACUS"), getCellValue(evt)); calcLine("GTModuleWFA"); }
          if (document.getElementById("GTModuleWFBCHK").checked) { setCellValue(document.getElementById("GTModuleWFBCUS"), getCellValue(evt)); calcLine("GTModuleWFB"); }
          if (document.getElementById("GTModuleWFSCHK").checked) { setCellValue(document.getElementById("GTModuleWFSCUS"), getCellValue(evt)); calcLine("GTModuleWFS"); }
          if (document.getElementById("GTModuleSQLCHK").checked) { setCellValue(document.getElementById("GTModuleSQLCUS"), getCellValue(evt)); calcLine("GTModuleSQL"); }
          if (document.getElementById("GTModuleGSICHK").checked) { setCellValue(document.getElementById("GTModuleGSICUS"), getCellValue(evt)); calcLine("GTModuleGSI"); }
          if (document.getElementById("GTModuleGSTCHK").checked) { setCellValue(document.getElementById("GTModuleGSTCUS"), getCellValue(evt)); calcLine("GTModuleGST"); }
          if (document.getElementById("GTModuleOWBCHK").checked) { setCellValue(document.getElementById("GTModuleOWBCUS"), getCellValue(evt)); calcLine("GTModuleOWB"); }

          qtyTmp = getCellValue(evt); if (qtyTmp > 0 && qtyTmp < 12) { qtyTmp = 12; }
          if (document.getElementById("GTModuleEDDCHK").checked) {
            setCellValue(document.getElementById("GTModuleEDFCUS"), "");
            setCellValue(document.getElementById("GTModuleEDDCUS"), qtyTmp);
          } else {
            if (document.getElementById("GTModuleEDFCHK").checked) {
              setCellValue(document.getElementById("GTModuleEDFCUS"), qtyTmp);
            }
            calcLine("GTModuleEDD");
          }

          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteFINCus"))) { setIssue(100, "GTSuiteFINCus", cellName, true); } else { setIssue(100, "GTSuiteFINCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteDISCus"))) { setIssue(100, "GTSuiteDISCus", cellName, true); } else { setIssue(100, "GTSuiteDISCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteJBCCus"))) { setIssue(100, "GTSuiteJBCCus", cellName, true); } else { setIssue(100, "GTSuiteJBCCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteMANCus"))) { setIssue(100, "GTSuiteMANCus", cellName, true); } else { setIssue(100, "GTSuiteMANCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteCBSCus"))) { setIssue(100, "GTSuiteCBSCus", cellName, true); } else { setIssue(100, "GTSuiteCBSCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteCSLCus"))) { setIssue(100, "GTSuiteCSLCus", cellName, true); } else { setIssue(100, "GTSuiteCSLCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteCSUCus"))) { setIssue(100, "GTSuiteCSUCus", cellName, true); } else { setIssue(100, "GTSuiteCSUCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteCASCus"))) { setIssue(100, "GTSuiteCASCus", cellName, true); } else { setIssue(100, "GTSuiteCASCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteSCMCus"))) { setIssue(100, "GTSuiteSCMCus", cellName, true); } else { setIssue(100, "GTSuiteSCMCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuitePOSCus"))) { setIssue(100, "GTSuitePOSCus", cellName, true); } else { setIssue(100, "GTSuitePOSCus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteGBLCus"))) { setIssue(100, "GTSuiteGBLCus", cellName, true); } else { setIssue(100, "GTSuiteGBLCus", cellName, false); }
          break;

        case "GTSuiteTOTRus":
          qtyTmp = getCellValue(evt);
          if (qtyTmp > 0) {
            document.getElementById("GTModuleSM_CHK").checked = true;
          } else {
            document.getElementById("GTModuleSM_CHK").checked = false;
          }
          setCellValue(document.getElementById("GTModuleSM_RUS"), qtyTmp);
          calcLine("GTModuleSM_");
          if (qtyTmp > 0) {
            setIssue(300, "*", "*", false); // Clear errors against this suite not being checked
          } else {
            if (document.getElementById("GTModuleWFACHK").checked) { setIssue(300, cellName, "GTModuleWFAHDR", true); }
            if (document.getElementById("GTModuleWFBCHK").checked) { setIssue(300, cellName, "GTModuleWFBHDR", true); }
            if (document.getElementById("GTModuleWFSCHK").checked) { setIssue(300, cellName, "GTModuleWFSHDR", true); }
            if (document.getElementById("GTModuleSQLCHK").checked) { setIssue(300, cellName, "GTModuleSQLHDR", true); }
            if (document.getElementById("GTModuleGSICHK").checked) { setIssue(300, cellName, "GTModuleGSIHDR", true); }
            if (document.getElementById("GTModuleGSTCHK").checked) { setIssue(300, cellName, "GTModuleGSTHDR", true); }
            if (document.getElementById("GTModuleOWBCHK").checked) { setIssue(300, cellName, "GTModuleOWBHDR", true); }
            if (document.getElementById("GTModuleEDFCHK").checked) { setIssue(300, cellName, "GTModuleEDFHDR", true); }
            if (document.getElementById("GTModuleEDDCHK").checked) { setIssue(300, cellName, "GTModuleEDDHDR", true); }
          }
          if (document.getElementById("GTModuleWFACHK").checked) { setCellValue(document.getElementById("GTModuleWFARUS"), getCellValue(evt)); calcLine("GTModuleWFA"); }
          if (document.getElementById("GTModuleWFBCHK").checked) { setCellValue(document.getElementById("GTModuleWFBRUS"), getCellValue(evt)); calcLine("GTModuleWFB"); }
          if (document.getElementById("GTModuleWFSCHK").checked) { setCellValue(document.getElementById("GTModuleWFSRUS"), getCellValue(evt)); calcLine("GTModuleWFS"); }
          if (document.getElementById("GTModuleSQLCHK").checked) { setCellValue(document.getElementById("GTModuleSQLRUS"), getCellValue(evt)); calcLine("GTModuleSQL"); }
          if (document.getElementById("GTModuleGSICHK").checked) { setCellValue(document.getElementById("GTModuleGSIRUS"), getCellValue(evt)); calcLine("GTModuleGSI"); }
          if (document.getElementById("GTModuleGSTCHK").checked) { setCellValue(document.getElementById("GTModuleGSTRUS"), getCellValue(evt)); calcLine("GTModuleGST"); }
          if (document.getElementById("GTModuleOWBCHK").checked) { setCellValue(document.getElementById("GTModuleOWBRUS"), getCellValue(evt)); calcLine("GTModuleOWB"); }
          if (qtyTmp > getCellValue(document.getElementById("GTFullQty"))) { setIssue(501, cellName, "GTFullQty", true); } else { setIssue(501, cellName, "GTFullQty", false); }

          qtyTmp = getCellValue(evt); if (qtyTmp > 0 && qtyTmp < 12) { qtyTmp = 12; }
          if (document.getElementById("GTModuleEDDCHK").checked) {
            setCellValue(document.getElementById("GTModuleEDFRUS"), "");
            setCellValue(document.getElementById("GTModuleEDDRUS"), qtyTmp);
            calcLine("GTModuleEDD");
          }
          if (document.getElementById("GTModuleEDFCHK").checked) {
            setCellValue(document.getElementById("GTModuleEDFRUS"), qtyTmp);
            calcLine("GTModuleEDF");
          } // XXX

          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteFINRus"))) { setIssue(100, "GTSuiteFINRus", cellName, true); } else { setIssue(100, "GTSuiteFINRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteDISRus"))) { setIssue(100, "GTSuiteDISRus", cellName, true); } else { setIssue(100, "GTSuiteDISRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteJBCRus"))) { setIssue(100, "GTSuiteJBCRus", cellName, true); } else { setIssue(100, "GTSuiteJBCRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteMANRus"))) { setIssue(100, "GTSuiteMANRus", cellName, true); } else { setIssue(100, "GTSuiteMANRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteCBSRus"))) { setIssue(100, "GTSuiteCBSRus", cellName, true); } else { setIssue(100, "GTSuiteCBSRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteCSLRus"))) { setIssue(100, "GTSuiteCSLRus", cellName, true); } else { setIssue(100, "GTSuiteCSLRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteCSURus"))) { setIssue(100, "GTSuiteCSURus", cellName, true); } else { setIssue(100, "GTSuiteCSURus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteCASRus"))) { setIssue(100, "GTSuiteCASRus", cellName, true); } else { setIssue(100, "GTSuiteCASRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteSCMRus"))) { setIssue(100, "GTSuiteSCMRus", cellName, true); } else { setIssue(100, "GTSuiteSCMRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuitePOSRus"))) { setIssue(100, "GTSuitePOSRus", cellName, true); } else { setIssue(100, "GTSuitePOSRus", cellName, false); }
          if (getCellValue(evt) < getCellValue(document.getElementById("GTSuiteGBLRus"))) { setIssue(100, "GTSuiteGBLRus", cellName, true); } else { setIssue(100, "GTSuiteGBLRus", cellName, false); }
          break;
        default:
      }
      break;

    case "tblGTModules": // For the Greentree module table
    // If Perpetual License, check the Required Count is >= the Current Count
      if (isPerpetualLicense) {
        if (getCellValue(document.getElementById(lineName + "RUS")) < getCellValue(document.getElementById(lineName + "CUS"))) {
          setIssue(101, lineName + "RUS", lineName + "RUS", true);
        } else {
          setIssue(101, lineName + "RUS", lineName + "RUS", false);
        }
      }

      // *** Rules based on individual MODULE Line start here ***
      switch (cellName) { // yyy
        case "GTModuleGL_CHK": // GL
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleGL_CUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleGL_RUS"), qtyTmp.toFixed(0));
            setIssue(201, "*", "*", false); // Clear any 201 errors against this element
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleGL_CUS"), "");
            setCellValue(document.getElementById("GTModuleGL_RUS"), "");
            if (document.getElementById("GTModuleGLCCHK").checked) { setIssue(201, cellName, "GTModuleGLCHDR", true); }
            if (document.getElementById("GTModuleGLTCHK").checked) { setIssue(201, cellName, "GTModuleGLTHDR", true); }
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleGLCCHK": // Cash Management
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleGLCCUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleGLCRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleGL_CHK").checked) { setIssue(201, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleGLCCUS"), "");
            setCellValue(document.getElementById("GTModuleGLCRUS"), "");
            setIssue(201, "*", lineName + "HDR", false);
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleGLRCHK": // GL Reconciliations
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleGLRCUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleGLRRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleGL_CHK").checked) { setIssue(201, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleGLRCUS"), "");
            setCellValue(document.getElementById("GTModuleGLRRUS"), "");
            setIssue(201, "*", lineName + "HDR", false);
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleGLTCHK": // GL Transaction Analysis
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleGLTCUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleGLTRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleGL_CHK").checked) { setIssue(201, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleGLTCUS"), "");
            setCellValue(document.getElementById("GTModuleGLTRUS"), "");
            setIssue(201, "*", lineName + "HDR", false);
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleAP_CHK": // AP
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleAP_CUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleAP_RUS"), qtyTmp.toFixed(0));
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleAP_CUS"), "");
            setCellValue(document.getElementById("GTModuleAP_RUS"), "");
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleAR_CHK": // AR
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleAR_CUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleAR_RUS"), qtyTmp.toFixed(0));
            setIssue(202, "*", "*", false); // Clear any 202 errors against this element
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleAR_CUS"), "");
            setCellValue(document.getElementById("GTModuleAR_RUS"), "");
            if (document.getElementById("GTModuleARDCHK").checked) { setIssue(202, cellName, "GTModuleARDCHK", true); }
            if (document.getElementById("GTModuleARACHK").checked) { setIssue(202, cellName, "GTModuleARACHK", true); }
            if (document.getElementById("GTModuleSCACHK").checked) { setIssue(202, cellName, "GTModuleSCACHK", true); }
            if (document.getElementById("GTModulePOSCHK").checked) { setIssue(202, cellName, "GTModulePOSCHK", true); }
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleARDCHK": // AR Deirect Debits
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleARDCUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleARDRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleAR_CHK").checked) { setIssue(202, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleARDCUS"), "");
            setCellValue(document.getElementById("GTModuleARDRUS"), "");
            setIssue(202, "*", lineName + "HDR", false);
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleARACHK": // AR Refunds
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleARACUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleARARUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleAR_CHK").checked) { setIssue(202, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleARACUS"), "");
            setCellValue(document.getElementById("GTModuleARARUS"), "");
            setIssue(202, "*", lineName + "HDR", false);
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleSECCHK": // Advanced Security
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleSECCUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleSECRUS"), qtyTmp.toFixed(0));
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleSECCUS"), "");
            setCellValue(document.getElementById("GTModuleSECRUS"), "");
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleFC_CHK": // Foreign currency
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteFINRus"));
            setCellValue(document.getElementById("GTModuleFC_CUS"), getCellValue(document.getElementById("GTSuiteFINCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleFC_RUS"), qtyTmp.toFixed(0));
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(301, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleFC_CUS"), "");
            setCellValue(document.getElementById("GTModuleFC_RUS"), "");
            setIssue(301, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleFA_CHK": // Fixed Assets
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleFA_RUS"), 999);
          } else {
            setCellValue(document.getElementById("GTModuleFA_RUS"), "");
          }
          break;

        case "GTModuleQD_CHK": // Quad Accounting
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleQD_RUS"), 999);
          } else {
            setCellValue(document.getElementById("GTModuleQD_RUS"), "");
          }
          break;

        case "GTModuleACOCHK": // Additional Companies
          if (evt.checked) {
            eleTmp = document.getElementById("GTModuleACOCUS");
            qtyTmp = parseFloat(eleTmp.valueLast);
            if (Number.isNaN(qtyTmp)) { eleTmp.value = 0; } else { eleTmp.value = qtyTmp; }
            eleTmp.disabled = false;
            eleTmp = document.getElementById("GTModuleACORUS");
            qtyTmp = parseFloat(eleTmp.valueLast);
            if (Number.isNaN(qtyTmp)) { eleTmp.value = 0; } else { eleTmp.value = qtyTmp; }
            eleTmp.disabled = false;
          } else {
            eleTmp = document.getElementById("GTModuleACOCUS");
            qtyTmp = parseFloat(eleTmp.value);
            if (Number.isNaN(qtyTmp)) { eleTmp.valueLast = 0; } else { eleTmp.valueLast = qtyTmp; }
            eleTmp.value = "";
            eleTmp.disabled = true;
            eleTmp = document.getElementById("GTModuleACORUS");
            qtyTmp = parseFloat(eleTmp.value);
            if (Number.isNaN(qtyTmp)) { eleTmp.valueLast = 0; } else { eleTmp.valueLast = qtyTmp; }
            eleTmp.value = "";
            eleTmp.disabled = true;
          }
          break;

        case "GTModuleCONCHK": // Consolidations (Including 10 companies)
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteGBLRus"));
            setCellValue(document.getElementById("GTModuleCONCUS"), getCellValue(document.getElementById("GTSuiteGBLCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCONRUS"), qtyTmp.toFixed(0));
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(311, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCONCUS"), "");
            setCellValue(document.getElementById("GTModuleCONRUS"), "");
            setIssue(311, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleGFRCHK": // Global Finance Revaluations
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteGBLRus"));
            setCellValue(document.getElementById("GTModuleGFRCUS"), getCellValue(document.getElementById("GTSuiteGBLCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleGFRRUS"), qtyTmp.toFixed(0));
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(311, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleGFRCUS"), "");
            setCellValue(document.getElementById("GTModuleGFRRUS"), "");
            setIssue(311, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleGFTCHK": // Translations
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteGBLRus"));
            setCellValue(document.getElementById("GTModuleGFTCUS"), getCellValue(document.getElementById("GTSuiteGBLCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleGFTRUS"), qtyTmp.toFixed(0));
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(311, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleGFTCUS"), "");
            setCellValue(document.getElementById("GTModuleGFTRUS"), "");
            setIssue(311, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleCFCCHK": // Consolidation Companies
          setGTNoSuiteLine(evt);
          break;

        case "GTModuleCFCCUS": // Consolidation Companies
        case "GTModuleCFCRUS": // Consolidation Companies
          evt.value = checkUnitSize(evt.value, 10);
          break;

        case "GTModuleIN_CHK": // Inventory
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleIN_CUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleIN_RUS"), qtyTmp.toFixed(0));
            setIssue(203, "*", "*", false); // Clear any 203 errors against this element
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleIN_CUS"), "");
            setCellValue(document.getElementById("GTModuleIN_RUS"), "");
            if (document.getElementById("GTModuleINRCHK").checked) { setIssue(203, cellName, "GTModuleINRCHK", true); }
            if (document.getElementById("GTModuleINACHK").checked) { setIssue(203, cellName, "GTModuleINACHK", true); }
            if (document.getElementById("GTModuleINSCHK").checked) { setIssue(203, cellName, "GTModuleINSCHK", true); }
            if (document.getElementById("GTModuleINICHK").checked) { setIssue(203, cellName, "GTModuleINICHK", true); }
            if (document.getElementById("GTModuleINQCHK").checked) { setIssue(203, cellName, "GTModuleINQCHK", true); }
            if (document.getElementById("GTModuleINWCHK").checked) { setIssue(203, cellName, "GTModuleINWCHK", true); }
            if (document.getElementById("GTModuleMRBCHK").checked) { setIssue(203, cellName, "GTModuleMRBCHK", true); }
            if (document.getElementById("GTModuleMRPCHK").checked) { setIssue(203, cellName, "GTModuleMRPCHK", true); }
            if (document.getElementById("GTModuleMRFCHK").checked) { setIssue(203, cellName, "GTModuleMRFCHK", true); }
            if (document.getElementById("GTModulePOSCHK").checked) { setIssue(203, cellName, "GTModulePOSCHK", true); }
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleINRCHK": // IN Advanced Reordering
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleINRCUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleINRRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleINRCUS"), "");
            setCellValue(document.getElementById("GTModuleINRRUS"), "");
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleINACHK": // IN Advanced Pricing
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleINACUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleINARUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleINACUS"), "");
            setCellValue(document.getElementById("GTModuleINARUS"), "");
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleINSCHK": // IN Supersessions
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleINSCUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleINSRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleINSCUS"), "");
            setCellValue(document.getElementById("GTModuleINSRUS"), "");
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleINICHK": // IN Transaction Analysis
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleINICUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleINIRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleINICUS"), "");
            setCellValue(document.getElementById("GTModuleINIRUS"), "");
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleINQCHK": // IN Quality Control
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleINQCUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleINQRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleINQCUS"), "");
            setCellValue(document.getElementById("GTModuleINQRUS"), "");
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleINWCHK": // IN Warehouse Bin Management
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleINWCUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleINWRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleINWCUS"), "");
            setCellValue(document.getElementById("GTModuleINWRUS"), "");
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleSO_CHK": // Sales Orders
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleSO_CUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleSO_RUS"), qtyTmp.toFixed(0));
            setIssue(204, "*", "*", false); // Clear any 204 errors against this element
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleSO_CUS"), "");
            setCellValue(document.getElementById("GTModuleSO_RUS"), "");
            if (document.getElementById("GTModuleSOPCHK").checked) { setIssue(204, cellName, "GTModuleSOPCHK", true); }
            if (document.getElementById("GTModuleSOFCHK").checked) { setIssue(204, cellName, "GTModuleSOFCHK", true); }
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleSOPCHK": // SO-PO Linking
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleSOPCUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleSOPRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleSO_CHK").checked) { setIssue(204, cellName, lineName + "HDR", true); }
            if (!document.getElementById("GTModulePO_CHK").checked) { setIssue(205, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleSOPCUS"), "");
            setCellValue(document.getElementById("GTModuleSOPRUS"), "");
            setIssue(204, "*", lineName + "HDR", false);
            setIssue(205, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleSOFCHK": // SO-FO Linking
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModuleSOFCUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleSOFRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleSO_CHK").checked) { setIssue(204, cellName, lineName + "HDR", true); }
            if (!document.getElementById("GTModuleMRBCHK").checked) { setIssue(206, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleSOFCUS"), "");
            setCellValue(document.getElementById("GTModuleSOFRUS"), "");
            setIssue(204, "*", lineName + "HDR", false);
            setIssue(206, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModulePO_CHK": // Purchase Orders
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModulePO_CUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModulePO_RUS"), qtyTmp.toFixed(0));
            setIssue(205, "*", "*", false); // Clear any 205 errors against this element
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModulePO_CUS"), "");
            setCellValue(document.getElementById("GTModulePO_RUS"), "");
            if (document.getElementById("GTModulePOICHK").checked) { setIssue(205, cellName, "GTModulePOICHK", true); }
            if (document.getElementById("GTModuleSOPCHK").checked) { setIssue(205, cellName, "GTModuleSOPCHK", true); }
            if (document.getElementById("GTModuleSCRCHK").checked) { setIssue(205, cellName, "GTModuleSCRCHK", true); }
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModulePOICHK": // Import Costing
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteDISRus"));
            setCellValue(document.getElementById("GTModulePOICUS"), getCellValue(document.getElementById("GTSuiteDISCus")).toFixed(0));
            setCellValue(document.getElementById("GTModulePOIRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModulePO_CHK").checked) { setIssue(205, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(302, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModulePOICUS"), "");
            setCellValue(document.getElementById("GTModulePOIRUS"), "");
            setIssue(205, "*", lineName + "HDR", false);
            setIssue(302, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleJC_CHK": // Job Costing
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteJBCRus"));
            setCellValue(document.getElementById("GTModuleJC_CUS"), getCellValue(document.getElementById("GTSuiteJBCCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleJC_RUS"), qtyTmp.toFixed(0));
            setIssue(207, "*", "*", false); // Clear any 207 errors against this element
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(303, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleJC_CUS"), "");
            setCellValue(document.getElementById("GTModuleJC_RUS"), "");
            if (document.getElementById("GTModuleJCACHK").checked) { setIssue(207, cellName, "GTModuleJCACHK", true); }
            if (document.getElementById("GTModuleJCPCHK").checked) { setIssue(207, cellName, "GTModuleJCPCHK", true); }
            setIssue(303, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleJCACHK": // Advanced Job Costing
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteJBCRus"));
            setCellValue(document.getElementById("GTModuleJCACUS"), getCellValue(document.getElementById("GTSuiteJBCCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleJCARUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleJC_CHK").checked) { setIssue(207, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(303, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleJCACUS"), "");
            setCellValue(document.getElementById("GTModuleJCARUS"), "");
            setIssue(207, "*", lineName + "HDR", false);
            setIssue(303, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleJCPCHK": // MS Project Interface
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteJBCRus"));
            setCellValue(document.getElementById("GTModuleJCPCUS"), getCellValue(document.getElementById("GTSuiteJBCCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleJCPRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleJC_CHK").checked) { setIssue(207, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(303, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleJCPCUS"), "");
            setCellValue(document.getElementById("GTModuleJCPRUS"), "");
            setIssue(207, "*", lineName + "HDR", false);
            setIssue(303, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleMRBCHK": // Manufacturing Bill of Materials
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteMANRus"));
            setCellValue(document.getElementById("GTModuleMRBCUS"), getCellValue(document.getElementById("GTSuiteMANCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleMRBRUS"), qtyTmp.toFixed(0));
            setIssue(206, "*", "*", false); // Clear any 206 errors against this element
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(304, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleMRBCUS"), "");
            setCellValue(document.getElementById("GTModuleMRBRUS"), "");
            if (document.getElementById("GTModuleSOFCHK").checked) { setIssue(206, cellName, lineName + "HDR", true); }
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(304, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleMRPCHK": // MRP
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteMANRus"));
            setCellValue(document.getElementById("GTModuleMRPCUS"), getCellValue(document.getElementById("GTSuiteMANCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleMRPRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(304, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleMRPCUS"), "");
            setCellValue(document.getElementById("GTModuleMRPRUS"), "");
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(304, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleMRFCHK": // Forcasting
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteMANRus"));
            setCellValue(document.getElementById("GTModuleMRFCUS"), getCellValue(document.getElementById("GTSuiteMANCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleMRFRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(304, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleMRFCUS"), "");
            setCellValue(document.getElementById("GTModuleMRFRUS"), "");
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(304, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleCCRCHK": // CRM Contacts and Relationships
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteCBSRus"));
            setCellValue(document.getElementById("GTModuleCCRCUS"), getCellValue(document.getElementById("GTSuiteCBSCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCCRRUS"), qtyTmp.toFixed(0));
            setIssue(208, "*", "*", false); // Clear any 208 errors against this element
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(305, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCCRCUS"), "");
            setCellValue(document.getElementById("GTModuleCCRRUS"), "");
            if (document.getElementById("GTModuleCDCCHK").checked) { setIssue(208, cellName, "GTModuleCDCCHK", true); }
            if (document.getElementById("GTModuleCKBCHK").checked) { setIssue(208, cellName, "GTModuleCKBCHK", true); }
            if (document.getElementById("GTModuleCSMCHK").checked) { setIssue(208, cellName, "GTModuleCSMCHK", true); }
            if (document.getElementById("GTModuleCBMCHK").checked) { setIssue(208, cellName, "GTModuleCBMCHK", true); }
            if (document.getElementById("GTModuleCCSCHK").checked) { setIssue(208, cellName, "GTModuleCCSCHK", true); }
            setIssue(305, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleCDCCHK": // CRM Debt Collection
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteCBSRus"));
            setCellValue(document.getElementById("GTModuleCDCCUS"), getCellValue(document.getElementById("GTSuiteCBSCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCDCRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleCCRCHK").checked) { setIssue(208, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(305, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCDCCUS"), "");
            setCellValue(document.getElementById("GTModuleCDCRUS"), "");
            setIssue(208, "*", lineName + "HDR", false);
            setIssue(305, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleCKBCHK": // CRM Knowledgebase
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteCBSRus"));
            setCellValue(document.getElementById("GTModuleCKBCUS"), getCellValue(document.getElementById("GTSuiteCBSCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCKBRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleCCRCHK").checked) { setIssue(208, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(305, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCKBCUS"), "");
            setCellValue(document.getElementById("GTModuleCKBRUS"), "");
            setIssue(208, "*", lineName + "HDR", false);
            setIssue(305, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleCSMCHK": // CRM Sales and Marketing
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteCSLRus"));
            setCellValue(document.getElementById("GTModuleCSMCUS"), getCellValue(document.getElementById("GTSuiteCSLCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCSMRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleCCRCHK").checked) { setIssue(208, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(306, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCSMCUS"), "");
            setCellValue(document.getElementById("GTModuleCSMRUS"), "");
            setIssue(208, "*", lineName + "HDR", false);
            setIssue(306, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleMSOCHK": // Mobile Timesheets
          setGTNoSuiteLine(evt);
          break;

        case "GTModuleMSOCUS": // Mobile Sales
        case "GTModuleMSORUS": // Mobile Sales
          checkMinVal(evt, vMinSuiteCount);
          break;

        case "GTModuleCBMCHK": // CRM Bookings Management
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteCSLRus"));
            setCellValue(document.getElementById("GTModuleCBMCUS"), getCellValue(document.getElementById("GTSuiteCSLCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCBMRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleCCRCHK").checked) { setIssue(208, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(306, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCBMCUS"), "");
            setCellValue(document.getElementById("GTModuleCBMRUS"), "");
            setIssue(208, "*", lineName + "HDR", false);
            setIssue(306, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleCCSCHK": // CRM Customer Support
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteCSURus"));
            setCellValue(document.getElementById("GTModuleCCSCUS"), getCellValue(document.getElementById("GTSuiteCSUCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCCSRUS"), qtyTmp.toFixed(0));
            setIssue(209, "*", "*", false); // Clear any 209 errors against this element
            if (!document.getElementById("GTModuleCCRCHK").checked) { setIssue(208, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(307, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCCSCUS"), "");
            setCellValue(document.getElementById("GTModuleCCSRUS"), "");
            if (document.getElementById("GTModuleCCTCHK").checked) { setIssue(209, cellName, "GTModuleCCTCHK", true); }
            setIssue(208, "*", lineName + "HDR", false);
            setIssue(307, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleMSRCHK": // Mobile Service
          setGTNoSuiteLine(evt);
          break;

        case "GTModuleMSRCUS": // Mobile Service
        case "GTModuleMSRRUS": // Mobile Service
          checkMinVal(evt, vMinSuiteCount);
          break;

        case "GTModuleCCTCHK": // Contracts
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteCSURus"));
            setCellValue(document.getElementById("GTModuleCCTCUS"), getCellValue(document.getElementById("GTSuiteCSUCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCCTRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleCCSCHK").checked) { setIssue(209, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(307, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCCTCUS"), "");
            setCellValue(document.getElementById("GTModuleCCTRUS"), "");
            setIssue(209, "*", lineName + "HDR", false);
            setIssue(307, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleAM_CHK": // Asset Management
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteCASRus"));
            setCellValue(document.getElementById("GTModuleAM_CUS"), getCellValue(document.getElementById("GTSuiteCASCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleAM_RUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleCCRCHK").checked) { setIssue(208, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(308, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleAM_CUS"), "");
            setCellValue(document.getElementById("GTModuleAM_RUS"), "");
            setIssue(208, "*", lineName + "HDR", false);
            setIssue(308, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleSCRCHK": // SCM Requisitions
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteSCMRus"));
            setCellValue(document.getElementById("GTModuleSCRCUS"), getCellValue(document.getElementById("GTSuiteSCMCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleSCRRUS"), qtyTmp.toFixed(0));
            setIssue(210, "*", "*", false); // Clear any 210 errors against this element
            if (!document.getElementById("GTModulePO_CHK").checked) { setIssue(205, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(309, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleSCRCUS"), "");
            setCellValue(document.getElementById("GTModuleSCRRUS"), "");
            if (document.getElementById("GTModuleCCICHK").checked) { setIssue(210, cellName, "GTModuleCCICHK", true); }
            if (document.getElementById("GTModuleERQCHK").checked) { setIssue(210, cellName, "GTModuleERQCHK", true); }
            setIssue(205, "*", lineName + "HDR", false);
            setIssue(309, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleSCACHK": // SCM Analytics
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteSCMRus"));
            setCellValue(document.getElementById("GTModuleSCACUS"), getCellValue(document.getElementById("GTSuiteSCMCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleSCARUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleAR_CHK").checked) { setIssue(202, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(309, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleSCACUS"), "");
            setCellValue(document.getElementById("GTModuleSCARUS"), "");
            setIssue(202, "*", lineName + "HDR", false);
            setIssue(309, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleCCICHK": // SCM Catalogues and IN Sourcing
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteSCMRus"));
            setCellValue(document.getElementById("GTModuleCCICUS"), getCellValue(document.getElementById("GTSuiteSCMCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleCCIRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleSCRCHK").checked) { setIssue(210, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(309, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleCCICUS"), "");
            setCellValue(document.getElementById("GTModuleCCIRUS"), "");
            setIssue(210, "*", lineName + "HDR", false);
            setIssue(309, "*", lineName + "HDR", false);
          }
          break;

        case "GTModulePOSCHK": // Point of Sale
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuitePOSRus"));
            setCellValue(document.getElementById("GTModulePOSCUS"), getCellValue(document.getElementById("GTSuitePOSCus")).toFixed(0));
            setCellValue(document.getElementById("GTModulePOSRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleAR_CHK").checked) { setIssue(202, cellName, lineName + "HDR", true); }
            if (!document.getElementById("GTModuleIN_CHK").checked) { setIssue(203, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(310, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModulePOSCUS"), "");
            setCellValue(document.getElementById("GTModulePOSRUS"), "");
            setIssue(202, "*", lineName + "HDR", false);
            setIssue(203, "*", lineName + "HDR", false);
            setIssue(310, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleBDRCHK": // Browser Designer
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleBDRRUS"), 999);
          } else {
            setCellValue(document.getElementById("GTModuleBDRRUS"), "");
          }
          break;

        case "GTModuleWFDCHK": // Workflow Designer
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleWFDRUS"), 999);
            setIssue(211, "*", "*", false); // Clear any 211 errors against this element
          } else {
            setCellValue(document.getElementById("GTModuleWFDRUS"), "");
            if (document.getElementById("GTModuleWFACHK").checked) { setIssue(211, cellName, "GTModuleWFAHDR", true); }
            if (document.getElementById("GTModuleWFBCHK").checked) { setIssue(211, cellName, "GTModuleWFBHDR", true); }
            if (document.getElementById("GTModuleWFICHK").checked) { setIssue(211, cellName, "GTModuleWFIHDR", true); }
            if (document.getElementById("GTModuleWFSCHK").checked) { setIssue(211, cellName, "GTModuleWFSHDR", true); }
          }
          break;

        case "GTModuleWFACHK": // Workflow Approvals & Alerts
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteTOTRus"));
            setCellValue(document.getElementById("GTModuleWFACUS"), getCellValue(document.getElementById("GTSuiteTOTCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleWFARUS"), qtyTmp.toFixed(0));
            setIssue(213, "*", "*", false); // Clear any 213 errors against this element
            if (!document.getElementById("GTModuleWFDCHK").checked) { setIssue(211, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleWFACUS"), "");
            setCellValue(document.getElementById("GTModuleWFARUS"), "");
            if (document.getElementById("GTModuleEAPCHK").checked) { setIssue(213, cellName, "GTModuleEAPCHK", true); }
            setIssue(211, "*", lineName + "HDR", false);
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleWFBCHK": // Business Process Manager
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteTOTRus"));
            setCellValue(document.getElementById("GTModuleWFBCUS"), getCellValue(document.getElementById("GTSuiteTOTCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleWFBRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleWFDCHK").checked) { setIssue(211, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleWFBCUS"), "");
            setCellValue(document.getElementById("GTModuleWFBRUS"), "");
            setIssue(211, "*", lineName + "HDR", false);
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleWFICHK": // Data Import Manager
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleWFIRUS"), 999);
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            setCellValue(document.getElementById("GTModuleWFIRUS"), "");
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleWFSCHK": // Autoscan
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteTOTRus"));
            setCellValue(document.getElementById("GTModuleWFSCUS"), getCellValue(document.getElementById("GTSuiteTOTCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleWFSRUS"), qtyTmp.toFixed(0));
            if (!document.getElementById("GTModuleWFDCHK").checked) { setIssue(211, cellName, lineName + "HDR", true); }
            if (getCellValue(document.getElementById("GTSuiteFINRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleWFSCUS"), "");
            setCellValue(document.getElementById("GTModuleWFSRUS"), "");
            setIssue(211, "*", lineName + "HDR", false);
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleMTSCHK": // Mobile Timesheets
          setGTNoSuiteLine(evt);
          break;

        case "GTModuleMTSCUS": // Mobile Timesheets
        case "GTModuleMTSRUS": // Mobile Timesheets
          evt.value = checkUnitSize(evt.value, 10);
          break;

        case "GTModuleERQCHK": // eRequisitions
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleERQRUS"), 10);
            setIssue(212, "*", "*", false); // Clear any 212 errors against this element
            if (!document.getElementById("GTModuleSCRCHK").checked) { setIssue(210, cellName, lineName + "HDR", true); }
          } else {
            setCellValue(document.getElementById("GTModuleERQRUS"), "");
            if (document.getElementById("GTModuleERUCHK").checked) { setIssue(212, cellName, "GTModuleERUCHK", true); }
            setIssue(210, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleERUCHK": // eRequisitions Named Users
          if (evt.checked) {
            if (!document.getElementById("GTModuleERQCHK").checked) { setIssue(212, cellName, lineName + "HDR", true); }
          } else {
            setIssue(212, "*", lineName + "HDR", false);
          }
          setGTNoSuiteLine(evt);
          break;

        case "GTModuleERUCUS": // eRequisitions Named Users
        case "GTModuleERURUS": // eRequisitions Named Users
          evt.value = checkUnitSize(evt.value, 10);
          break;

        case "GTModuleERPCHK": // eReporting
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleERPRUS"), 999);
          } else {
            setCellValue(document.getElementById("GTModuleERPRUS"), "");
          }
          break;

        case "GTModuleEAPCHK": // eApprovals
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleEAPRUS"), 10);
            setIssue(214, "*", "*", false); // Clear an 214 errors against this element xxx
            if (!document.getElementById("GTModuleWFACHK").checked) { setIssue(213, cellName, lineName + "HDR", true); }
          } else {
            setCellValue(document.getElementById("GTModuleEAPRUS"), "");
            if (document.getElementById("GTModuleEAUCHK").checked) { setIssue(214, cellName, "GTModuleEAUCHK", true); }
            setIssue(213, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleEAUCHK": // eApprovals additional Users
          if (evt.checked) {
            if (!document.getElementById("GTModuleEAPCHK").checked) { setIssue(214, cellName, lineName + "HDR", true); }
          } else {
            setIssue(214, "*", cellName, false);
          }
          setGTNoSuiteLine(evt);
          break;

        case "GTModuleEAUCUS": // eApprovals additional Users
        case "GTModuleEAURUS": // eApprovals additional Users
          evt.value = checkUnitSize(evt.value, 10);
          break;

        case "GTModuleEDFCHK": // EDI - Financials
          if (evt.checked) {
            if (document.getElementById("GTModuleEDDCHK").checked) {
              setCellValue(document.getElementById("GTModuleEDFCUS"), 0);
              setCellValue(document.getElementById("GTModuleEDFRUS"), 0);
              sendAlert("This module is included in the EDI Dictribution Module", 2);
              evt.checked = false;
            } else {
              qtyTmp = getCellValue(document.getElementById("GTSuiteTOTCus"));
              if (qtyTmp < 12 && qtyTmp > 0) { qtyTmp = 12; }
              setCellValue(document.getElementById("GTModuleEDFCUS"), qtyTmp.toFixed(0));
              qtyTmp = getCellValue(document.getElementById("GTSuiteTOTRus"));
              if (qtyTmp < 12 && qtyTmp > 0) { qtyTmp = 12; }
              setCellValue(document.getElementById("GTModuleEDFRUS"), qtyTmp.toFixed(0));
            }
            if (getCellValue(document.getElementById("GTSuiteTOTRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleEDFCUS"), "");
            setCellValue(document.getElementById("GTModuleEDFRUS"), "");
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleEDDCHK": // EDI - Distribution
          if (evt.checked) {
            eleTmp = document.getElementById("GTModuleEDFCHK");
            document.getElementById("GTModuleEDFCHK").checked = false;
            setCellValue(document.getElementById("GTModuleEDFCUS"), 0);
            setCellValue(document.getElementById("GTModuleEDFRUS"), 0);
            calcLine("GTModuleEDF");
            qtyTmp = getCellValue(document.getElementById("GTSuiteTOTCus"));
            if (qtyTmp < 12 && qtyTmp > 0) { qtyTmp = 12; }
            setCellValue(document.getElementById("GTModuleEDDCUS"), qtyTmp.toFixed(0));
            qtyTmp = getCellValue(document.getElementById("GTSuiteTOTRus"));
            if (qtyTmp < 12 && qtyTmp > 0) { qtyTmp = 12; }
            setCellValue(document.getElementById("GTModuleEDDRUS"), qtyTmp.toFixed(0));
            if (getCellValue(document.getElementById("GTSuiteTOTRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleEDDCUS"), "");
            setCellValue(document.getElementById("GTModuleEDDRUS"), "");
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleSQLCHK": // SQL Options
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteTOTRus"));
            setCellValue(document.getElementById("GTModuleSQLCUS"), getCellValue(document.getElementById("GTSuiteTOTCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleSQLRUS"), qtyTmp.toFixed(0));
            if (getCellValue(document.getElementById("GTSuiteTOTRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleSQLCUS"), "");
            setCellValue(document.getElementById("GTModuleSQLRUS"), "");
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleGSICHK": // Greentree - Intsant Secure
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteTOTRus"));
            setCellValue(document.getElementById("GTModuleGSICUS"), getCellValue(document.getElementById("GTSuiteTOTCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleGSIRUS"), qtyTmp.toFixed(0));
            if (document.getElementById("GTModuleGSTCHK").checked) {
              document.getElementById("GTModuleGSTCHK").checked = false;
              setCellValue(document.getElementById("GTModuleGSTCUS"), "");
              setCellValue(document.getElementById("GTModuleGSTRUS"), "");
              calcLine("GTModuleGST");
            }
            if (getCellValue(document.getElementById("GTSuiteTOTRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleWFSCUS"), "");
            setCellValue(document.getElementById("GTModuleWFSRUS"), "");
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleGSTCHK": // Greentree - Total Secure
          if (evt.checked) {
            qtyTmp = getCellValue(document.getElementById("GTSuiteTOTRus"));
            setCellValue(document.getElementById("GTModuleGSTCUS"), getCellValue(document.getElementById("GTSuiteTOTCus")).toFixed(0));
            setCellValue(document.getElementById("GTModuleGSTRUS"), qtyTmp.toFixed(0));
            if (document.getElementById("GTModuleGSICHK").checked) {
              document.getElementById("GTModuleGSICHK").checked = false;
              setCellValue(document.getElementById("GTModuleGSICUS"), "");
              setCellValue(document.getElementById("GTModuleGSIRUS"), "");
              calcLine("GTModuleGSI");
            }
            if (getCellValue(document.getElementById("GTSuiteTOTRus")) === 0) { setIssue(300, cellName, lineName + "HDR", true); }
          } else {
            overRidevalue(document.getElementById(lineName + "CUS").getElementsByClassName("OverRide")[0], false); // If not checked then any overRideValue must be disabled.
            setCellValue(document.getElementById("GTModuleWFSCUS"), "");
            setCellValue(document.getElementById("GTModuleWFSRUS"), "");
            setIssue(300, "*", lineName + "HDR", false);
          }
          break;

        case "GTModuleOWBCHK": // OpenWeb for Greentree
          if (evt.checked) {
            setCellValue(document.getElementById("GTModuleOWBRUS"), 999);
          } else {
            setCellValue(document.getElementById("GTModuleOWBRUS"), "");
          }
          break;

        default:
      }

      calcLine(lineName);
      break;

    case "tblAODHosting": // For the Hosting table....
      // *** Rules based on individual HOSTING Line start here ***
      switch (cellName) { // Switch based on the Element ID
        case "GTFullQty":
          qtyTmp = getCellValue(document.getElementById(cellName));
          if (qtyTmp <= 7) {
            setCellValue(document.getElementById("GTDBSmallQty"), "1");
            setCellValue(document.getElementById("GTDBLargeQty"), "0");
          } else {
            setCellValue(document.getElementById("GTDBSmallQty"), "0");
            setCellValue(document.getElementById("GTDBLargeQty"), "1");
          }
          calcLine("GTDBSmall");
          calcLine("GTDBLarge");

          if (qtyTmp > getCellValue(document.getElementById("GTSuiteTOTRus"))) { setIssue(501, "GTSuiteTOTRus", cellName, true); } else { setIssue(501, "GTSuiteTOTRus", cellName, false); }
          if (qtyTmp > getCellValue(document.getElementById("AODBaseQty"))) { setIssue(500, "AODBaseQty", cellName, true); } else { setIssue(500, "AODBaseQty", cellName, false); }
          break;

        case "AODBaseQty":
          qtyTmp = getCellValue(document.getElementById(cellName));
          if (qtyTmp < getCellValue(document.getElementById("GTFullQty"))) { setIssue(500, cellName, "GTFullQty", true); } else { setIssue(500, cellName, "GTFullQty", false); }
          break;

        case "undefined":
          break;

        default:
          break;
      }
      calcLine(lineName);
      break;

    default:
    // If we hit this we have table that has no rules
      break;
  }
}

/* Calculate Line Item values */
function calcLine(lineName) {
  let vCus, vRus, vPrc, vDisP, vDisV, vPrcCus, vPrcRus, vMgnV, vVal, vTot, vExt, marginPct;
  const eleTbl = getElement(document.getElementById(lineName), "TABLE");

  switch (eleTbl.id) { // Need to know what table we're calculating the lines on
    case "tblGTModules":
      vCus = getCellValue(document.getElementById(lineName + "CUS"));
      vRus = getCellValue(document.getElementById(lineName + "RUS"));

      switch (lineName) {
        case "GTModuleSM_":
          vPrcCus = getGTPrice(vCus, "PGTMDLSM1");
          vPrcRus = getGTPrice(vRus, "PGTMDLSM1");
          break;

        case "GTModuleMTS":
          vPrcCus = getGTPrice(vCus, "PGTMDLM_1");
          vPrcRus = getGTPrice(vRus, "PGTMDLM_1");
          break;

        case "GTModuleERU":
        case "GTModuleEAU":
          vPrcCus = getGTPrice(vCus, "PGTMDLM_2");
          vPrcRus = getGTPrice(vRus, "PGTMDLM_2");
          break;

        case "GTModuleEDF":
          vPrcCus = getGTPrice(vCus, "PGTMDLE_1");
          vPrcRus = getGTPrice(vRus, "PGTMDLE_1");
          break;

        case "GTModuleEDD":
          vPrcCus = getGTPrice(vCus, "PGTMDLE_1") * 1.5;
          vPrcRus = getGTPrice(vRus, "PGTMDLE_1") * 1.5;
          break;

        case "GTModuleARD":
        case "GTModuleARA":
        case "GTModuleGLC":
        case "GTModuleGLR":
        case "GTModuleGFR":
        case "GTModuleINR":
        case "GTModuleINA":
        case "GTModuleSOP":
        case "GTModuleSOF":
        case "GTModulePOI":
        case "GTModuleJCP":
        case "GTModuleCDC":
        case "GTModuleCKB":
        case "GTModuleSCA":
        case "GTModuleWFS":
          vPrcCus = getGTPrice(vCus, "PGTMDLSTD") / 2;
          vPrcRus = getGTPrice(vRus, "PGTMDLSTD") / 2;
          break;

        case "GTModuleAP_":
        case "GTModuleAR_":
        case "GTModuleGL_":
        case "GTModuleGLT":
        case "GTModuleSEC":
        case "GTModuleFC_":
        case "GTModuleINS":
        case "GTModuleINI":
        case "GTModuleINQ":
        case "GTModuleSO_":
        case "GTModulePO_":
        case "GTModuleJCA":
        case "GTModuleMRB":
        case "GTModuleMRF":
        case "GTModuleCCR":
        case "GTModuleCSM":
        case "GTModuleMSO":
        case "GTModuleCBM":
        case "GTModuleMSR":
        case "GTModuleSCR":
        case "GTModuleCCI":
        case "GTModulePOS":
        case "GTModuleWFA":
        case "GTModuleWFB":
        case "GTModuleGST":
          vPrcCus = getGTPrice(vCus, "PGTMDLSTD");
          vPrcRus = getGTPrice(vRus, "PGTMDLSTD");
          break;

        case "GTModuleCON":
        case "GTModuleGFT":
        case "GTModuleIN_":
        case "GTModuleINW":
        case "GTModuleJC_":
        case "GTModuleCCS":
        case "GTModuleCCT":
        case "GTModuleAM_":
        case "GTModuleSQL":
          vPrcCus = getGTPrice(vCus, "PGTMDLSTD") * 1.5;
          vPrcRus = getGTPrice(vRus, "PGTMDLSTD") * 1.5;
          break;

        case "GTModuleGSI":
        case "GTModuleMRP":
          vPrcCus = getGTPrice(vCus, "PGTMDLSTD") * 2;
          vPrcRus = getGTPrice(vRus, "PGTMDLSTD") * 2;
          break;

          /* Fixed Price */
        case "GTModuleFA_":
        case "GTModuleQD_":
        case "GTModuleBDR":
        case "GTModuleWFD":
        case "GTModuleWFI":
        case "GTModuleERQ":
        case "GTModuleERP":
        case "GTModuleEAP":
        case "GTModuleOWB":
          vExt = lineName.substr(lineName.length - 3, 3);
          vPrcCus = 0;
          vPrcRus = getGTPrice(vRus, vExt);
          break;

          /* Linear Priced */
        case "GTModuleACO":
        case "GTModuleCFC":
          vExt = lineName.substr(lineName.length - 3, 3);
          vPrcCus = getGTPrice(vCus, vExt);
          vPrcRus = getGTPrice(vRus, vExt);
          break;

        default:
          vPrcCus = 999999; // a big number incase something goes wrong!!
          vPrcRus = 999999; // a big number incase something goes wrong!!
          break;
      }

      // This applies to all tblGTModules lines
      marginPct = document.getElementById("marginPct").value;
      if (vCus === 0) {
        setCellValue(document.getElementById(lineName + "CUS"), "");
      }
      if (vRus === 0) {
        setCellValue(document.getElementById(lineName + "RUS"), "");
      }
      vPrc = vPrcRus - vPrcCus;
      vDisP = getCellValue(document.getElementById(lineName + "DSP")) / 100;
      if (vPrc === 0) {
        setCellValue(document.getElementById(lineName + "RRP"), "");
      } else {
        setCellValue(document.getElementById(lineName + "RRP"), vPrc.toFixed(2));
      }
      vDisV = parseFloat((vPrc * vDisP).toFixed(2));
      if (vDisP === 0) {
        setCellValue(document.getElementById(lineName + "DSP"), "");
        // document.getElementById(lineName + "DSP").parentElement.innerText = "";
        setCellValue(document.getElementById(lineName + "DSV"), "");
      } else {
        // setCellValue(document.getElementById(lineName + "DSP"), "%");
        // document.getElementById(lineName + "DSP").parentElement.innerText = "%";
        setCellValue(document.getElementById(lineName + "DSV"), vDisV.toFixed(2));
      }
      vPrc -= vDisV;
      if (vPrc === 0) {
        setCellValue(document.getElementById(lineName + "CHG"), "");
      } else {
        setCellValue(document.getElementById(lineName + "CHG"), vPrc.toFixed(2));
      }
      if (marginPct === 0 || vPrc === 0) {
        vMgnV = 0;
        setCellValue(document.getElementById(lineName + "MGN"), "");
        setCellValue(document.getElementById(lineName + "CST"), "");
      } else {
        vMgnV = parseFloat(((vPrc * marginPct) / 100).toFixed(2));
        setCellValue(document.getElementById(lineName + "MGN"), vMgnV.toFixed(2));
        setCellValue(document.getElementById(lineName + "CST"), (vPrc - vMgnV).toFixed(2));
      }
      TotalTable(eleTbl);

      // Check for Issue 102 - Checked Module with User Count of Zero
      if (document.getElementById(lineName + "CHK").checked && vRus === 0) {
        setIssue(102, lineName + "RUS", lineName + "RUS", true);
      } else {
        setIssue(102, lineName + "RUS", lineName + "RUS", false);
      }
      break;

    case "tblAODHosting": // For the AOD Hosting Table, do this
      vTot = parseFloat(getCellValue(document.getElementById(eleTbl.id + "TOTVal")) - getCellValue(document.getElementById(lineName + "Val")));
      vRus = getCellValue(document.getElementById(lineName + "Qty"));
      vPrc = getCellValue(document.getElementById(lineName + "Prc"));
      vVal = vRus * vPrc;
      setCellValue(document.getElementById(lineName + "Val"), vVal.toFixed(2));
      setCellValue(document.getElementById(eleTbl.id + "TOTVal"), (vTot + vVal).toFixed(2)); // add the current line value to the Table Total
      break;

    default:
      break;
  }
}

/* Recalculate a Tables Lines */
function reCalcTable(eleTbl) {
  let i;
  const eleRows = eleTbl.getElementsByClassName("trTypeLi1");
  for (i = 0; i < eleRows.length; i++) {
    calcLine(eleRows[i].id);
  }
  TotalTable(eleTbl);
}

/* Setup the AOD Hosting */
function setHostingBasedOnGT() {
  document.getElementById("AODBaseQty").value = getCellValue(document.getElementById("GTSuiteTOTRus"));
  document.getElementById("GTSuiteTOTRus").onchange();
  document.getElementById("GTFullQty").value = getCellValue(document.getElementById("GTSuiteTOTRus"));
  document.getElementById("GTFullQty").onchange();
  SetPrices(); // Sets the AODHosting Prices based on the currency
}

/* Get Table Cell Value */
function getCellValue(ele) {
  let i, eleCellValue;
  switch (ele.tagName) {
    case "INPUT": // If the element is type INPUT
      if (Number.isNaN(parseFloat(ele.value))) { return 0; } // If the Input Value is not a number return 0
      return parseFloat(ele.value); // Return the Input Value

    case "TD": // If the element is a table cell
      /* Find the first Input element of type number */
      for (i = 0; i < ele.children.length - 1; i++) {
        if (ele.children[i].tagName.toUpperCase() === "INPUT" && ele.children[i].type.toLowerCase() === "number" && !ele.children[i].disabled) {
          if (Number.isNaN(parseFloat(ele.children[i].value))) { return 0; }
          return parseFloat(ele.children[i].value);
        }
      }

      /* If there are no Input elements of type number, find a element of class "CellValue" */
      if (ele.getElementsByClassName("CellValue").length > 0) { // Check it has a "CellValue" element
        eleCellValue = ele.getElementsByClassName("CellValue")[0]; // Get the 1st "CellValue" element
        if (Number.isNaN(parseFloat(eleCellValue.innerText))) { return 0; } // If the content is not a number return 0
        return parseFloat(eleCellValue.innerText); // else return the content as a number
      }

      /* If there are no Input elements of type number, or classes "CellValue", see if it is a number */
      if (Number.isNaN(ele.innerText)) { // eslint-disable-line no-restricted-globals
        return 0;
      }

      return parseFloat(ele.innerText); // well it must have a number and nothing else!!

    default:
      return 0; // If we do not know what type of element it is, return a 0
  }
}

/* Set a Table Cell Value */
function setCellValue(ele, val) {
  let i;
  switch (ele.tagName) {
    case "INPUT": // If the element is an Input field
      ele.value = val; // Assign the value to the input field
      break;

    case "TD": // If the element is a table cell
      /* Find the first Input element of type number */
      for (i = 0; i < ele.children.length - 1; i++) {
        if (ele.children[i].tagName.toUpperCase() === "INPUT" && ele.children[i].type.toLowerCase() === "number" && !ele.children[i].disabled) {
          ele.children[i].value = val;
          return;
        }
      }

      if (ele.getElementsByClassName("CellValue").length > 0) { // Check it has a "CellValue" element
        ele.getElementsByClassName("CellValue")[0].innerText = val; // Set the 1st "CellValue" element
      }
      // Get here and we have a problem... it is a cell without a "Cell Value" element Check the HTML code.
      break;

    default:
  }
}

/* Calculate Table Totals */
function TotalTable(eleTbl) {
  switch (eleTbl.id) {
    case "tblAODHosting":
      setCellValue(document.getElementById("tblAODHostingTOTVal"), TotalTableClass(eleTbl, "tdVal"));
      break;
    case "tblGTModules":
      setCellValue(document.getElementById("tblGTModulesTOTRRP"), TotalTableClass(eleTbl, "tdRRP"));
      setCellValue(document.getElementById("tblGTModulesTOTDSV"), TotalTableClass(eleTbl, "tdDSV"));
      setCellValue(document.getElementById("tblGTModulesTOTCHG"), TotalTableClass(eleTbl, "tdCHG"));
      setCellValue(document.getElementById("tblGTModulesTOTMGN"), TotalTableClass(eleTbl, "tdMGN"));
      setCellValue(document.getElementById("tblGTModulesTOTCST"), TotalTableClass(eleTbl, "tdCST"));
      break;

    default:
  }
}

/* Total the values of a class in a table */
function TotalTableClass(eleTbl, eleCls) {
  let i, totVal;

  const eleVal = eleTbl.getElementsByClassName(eleCls);
  totVal = 0;
  for (i = 0; i < eleVal.length; i++) {
    if (!Number.isNaN(parseFloat(eleVal[i].innerText))) {
      totVal += parseFloat(eleVal[i].innerText);
    }
  }

  if (eleTbl.id === "tblGTModules" && totVal === 0) { return ""; } // To match the MYOB Price Workbooks, if the total is 0 show nothing
  return totVal.toFixed(2);
}

/* Set up a row that is not related to a Greentree Suite */
function setGTNoSuiteLine(evt) {
  let qtyTmp, eleTmp;
  const lineName = getElement(evt, "TR").id;

  if (evt.checked) {
    eleTmp = document.getElementById(lineName + "CUS");
    qtyTmp = parseFloat(eleTmp.valueLast);
    if (Number.isNaN(qtyTmp)) {
      eleTmp.value = 0;
    } else {
      eleTmp.value = qtyTmp;
    }
    eleTmp.disabled = false;

    eleTmp = document.getElementById(lineName + "RUS");
    qtyTmp = parseFloat(eleTmp.valueLast);
    if (Number.isNaN(qtyTmp)) {
      eleTmp.value = 0;
    } else {
      eleTmp.value = qtyTmp;
    }
    eleTmp.disabled = false;
  } else {
    eleTmp = document.getElementById(lineName + "CUS");
    qtyTmp = parseFloat(eleTmp.value);
    if (Number.isNaN(qtyTmp)) {
      eleTmp.valueLast = 0;
    } else {
      eleTmp.valueLast = qtyTmp;
    }
    eleTmp.value = "";
    eleTmp.disabled = true;

    eleTmp = document.getElementById(lineName + "RUS");
    qtyTmp = parseFloat(eleTmp.value);
    if (Number.isNaN(qtyTmp)) {
      eleTmp.valueLast = 0;
    } else {
      eleTmp.valueLast = qtyTmp;
    }
    eleTmp.value = "";
    eleTmp.disabled = true;
  }
}

/* OverRide Input Management */
function overRidevalue(ele, enable) { // eslint-disable-line no-unused-vars
  const eleTD = getElement(ele, "TD");
  const lineName = getElement(ele, "TR").id;

  if (typeof enable === "undefined" || enable === null) {
    if ((eleTD.getElementsByClassName("OverRide")[0].style.display === "none" || eleTD.getElementsByClassName("OverRide")[0].style.display === "") && document.getElementById(lineName + "CHK").checked) {
      enable = true; // eslint-disable-line no-param-reassign
    }
  }

  if (enable) {
    eleTD.getElementsByClassName("CellValue")[0].style.display = "none";
    eleTD.getElementsByClassName("OverRide")[0].style.display = "inline";
    eleTD.getElementsByClassName("OverRide")[0].disabled = false;
  } else {
    eleTD.getElementsByClassName("CellValue")[0].style.display = "inline";
    eleTD.getElementsByClassName("OverRide")[0].style.display = "none";
    eleTD.getElementsByClassName("OverRide")[0].disabled = true;
  }
  // calcLine(lineName);
  checkRules(eleTD);
}

/* Only value of 0 or >=4 allowed */
function checkMinVal(evt, minVal) {
  if (evt.value !== 0 && evt.value < minVal) {
    if (evt.oldvalue < evt.value || evt.value > 6) {
      evt.value = minVal;
      evt.oldvalue = minVal;
    } else {
      evt.value = 0;
      evt.oldvalue = 0;
    }
  }
}

/* Check Unit size and round up if required */
function checkUnitSize(testValue, unitSize) {
  let qtyTmp;
  qtyTmp = testValue % unitSize;
  if (qtyTmp !== 0) {
    qtyTmp = (testValue - qtyTmp) + 10;
    sendAlert("Unit size is factors of " + unitSize + "</br>  Your entry will be changed to " + qtyTmp, 2);
    return qtyTmp;
  }
  return testValue;
}

/* Get/Calculate the Greentree Price based on Qty and Price Model */
function getGTPrice(Qty, PrcMdl) {
  let i, val, calcQty, remQty, prcTbl;
  remQty = Qty;
  i = 0;
  val = 0;

  /* Start with Price Schedules */
  switch (PrcMdl) {
    /* System Manager */
    case "PGTMDLSM1":
      prcTbl = PGTMDLSM1;
      break;

      /* Mobile Table 1 */
    case "PGTMDLM_1":
      prcTbl = PGTMDLM_1;
      break;

      /* Mobile Table 2 */
    case "PGTMDLM_2":
      prcTbl = PGTMDLM_2;
      break;

      /* Mobile Table 3 */
    case "PGTMDLE_1":
      prcTbl = PGTMDLE_1;
      break;

      /* Standard Greentree */
    case "PGTMDLSTD":
      prcTbl = PGTMDLSTD;
      break;

      /* If it's not a schedule of rates, it must be linear */
    default:
      if (Qty === 0) { return 0; }
      val = ""; // Incase it's not found.
      for (i = 0; SchFixedP.length - 1; i++) {
        if (SchFixedP[i][0] === PrcMdl) {
          val = SchFixedP[i][1];
          break;
        }
      }

      switch (PrcMdl) {
        case "FA_":
        case "QD_":
        case "BDR":
        case "WFD":
        case "WFI":
        case "ERQ":
        case "ERP":
        case "EAP":
        case "OWB":
          return val;

        case "ACO":
        case "CFC":
          return val * Qty;

        default:
      }
  }
  do {
    calcQty = Math.min(remQty, prcTbl[i][0] - Qty + remQty);
    val += (calcQty * prcTbl[i][1]);
    remQty -= calcQty;
    i += 1;
  }
  while (remQty > 0);
  return val;
}

/* Find the parent element of a type */
function getElement(Element, Type) {
  const uType = Type.toUpperCase();

  // If we're just trying to get the element, or first parent with an ID
  if (uType === "ID") {
    while (Element) {
      if (Element.id !== null && Element.id !== "") { return Element; }
      Element = Element.parentNode; // eslint-disable-line no-param-reassign
    }
    return "undefined";
  }

  // Otherwise we must be looking for a type of element.
  while (Element) {
    if (Element.tagName.toUpperCase() === uType) {
      if (Element.id === null) { return "unspecified"; }
      return Element;
    }
    Element = Element.parentNode; // eslint-disable-line no-param-reassign
  }
  return "undefined";
}

function getModalPopUp(ele) { // eslint-disable-line no-unused-vars
  // sendAlert("You clicked on " + ele.id);
  modalPopUp.style.display = "block";
}
/* clicking the SM_ checkbox */
function clickedSMM(cb) { // eslint-disable-line no-unused-vars
  sendAlert("This is set based on Total System Users Required", 2);
  cb.checked = cb.oldchecked;
}

// CODE FOR ISSUES MANAGEMENT
/* Set or clear and issue from the issuesLog */
function setIssue(issueNo, eleIDFrom, eleIDAgainst, isSet) {
  let i, tmpEle;

  if (eleIDFrom === "*" && eleIDAgainst === "*" && !isSet) { // If this is a clear all issues of a type
    i = issuesLog.length;
    for (i = issuesLog.length; i > 0; i--) {
      if (issuesLog[i - 1][0] === issueNo) { // If it is a matching issue#
        tmpEle = issuesLog[i - 1][2]; // Get the element name for the issue we're about to blow away
        issuesLog.splice(i - 1, 1); // delete the issue from the log
        hasIssue(tmpEle); // reset warnings for the element that had the issue
      }
    }
    return true; // Outta here - Job done
  }

  if (eleIDFrom === "*" && !isSet) { // If this is a clear all issues from an element
    i = issuesLog.length;
    for (i = issuesLog.length; i > 0; i--) {
      if (issuesLog[i - 1][0] === issueNo && // If it is a matching issue#
        issuesLog[i - 1][2] === eleIDAgainst) { // and matching element ID
        issuesLog.splice(i - 1, 1); // delete it
      }
    }
    hasIssue(eleIDAgainst); // reset warnings
    return true; // Outta here - Job done
  }

  for (i = 0; i < issuesLog.length; i++) { // Loop through the issuesLog
    if (issuesLog[i][0] === issueNo && // If issuenumber found, and
      issuesLog[i][1] === eleIDFrom && // it's from the same element
      issuesLog[i][2] === eleIDAgainst) { // it's against the same element
      if (isSet) { return true; } // Nothing to be done - Outta here successfully
      issuesLog.splice(i, 1); // remove the issue
      hasIssue(eleIDAgainst); // flag the eleIDAgainst accordingly
      return true; // Outta here successfully
    }
  }

  /* got here so this set specific issue is not currently logged */
  if (isSet) {
    issuesLog.push([issueNo, eleIDFrom, eleIDAgainst]); // Got here so this is the first issue with these parameters... add it.
    hasIssue(eleIDAgainst); // flag the eleIDAgainst accordingly
    return true; // Outta here successfully
  }
  hasIssue(eleIDAgainst); // flag the eleIDAgainst accordingly (just to be sure!)
  return true;
}

/* Check if an element has an issue in the issues log */
function hasIssue(eleID) {
  let i, idxIssue, eleComment;

  /* Get Parent Cell */
  const eleTD = getElement(document.getElementById(eleID), "TD");

  /*   eleTD = document.getElementById(eleID);
  if (eleTD.tagName.toUpperCase() !== "TD") {
    while (eleTD) {
      eleTD = eleTD.parentNode;
      if (eleTD.tagName.toUpperCase() === "TD") {
        break;
      }
    }
  } */

  if (eleTD.getElementsByClassName("CellComment").length > 0) {
    eleComment = eleTD.getElementsByClassName("CellComment")[0];
  }

  /* Start by clearing any existing Issues Logs */
  eleTD.style.background = "";
  if (eleComment) { eleComment.innerHTML = ""; }

  for (i = 0; i < issuesLog.length; i++) {
    if (issuesLog[i][2] === eleID) {
      /* Add the Cell Comments */
      for (idxIssue = 0; idxIssue < issueType.length - 1; idxIssue++) {
        if (issueType[idxIssue][0] === issuesLog[i][0]) {
          break;
        }
      }
      if (eleComment) { eleComment.innerHTML += "&bull;" + issueType[idxIssue][1] + "</br>"; }
      // if (eleComment) {eleComment.innerHTML += "-"+issuesLog[i][0]+" : "+issuesLog[i][1]+" : "+issuesLog[i][2]+"</br>";} //Useful for debugging
      eleTD.style.background = "Red";
    }
  }
}

// CODE FOR NAVIGATION / USER INTERACTION
// Script to open and close sidebar
function w3_open() { // eslint-disable-line no-unused-vars
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
function w3_close(MenuSec) { // eslint-disable-line no-unused-vars
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
  switch (MenuSec) {
    case "AODHosting":
      setHostingBasedOnGT();
      reCalcTable(document.getElementById("tblAODHosting"));
      break;
    case "Greentree":
      reCalcTable(document.getElementById("tblGTModules"));
      break;

    default:
  }
  openMenuSec(MenuSec);
}
function sendAlert(msg, severity) { // eslint-disable-line no-unused-vars
  // Severity available for future (Critical, Warning, etc.)
  document.getElementById("modalPopUpContent").innerHTML = msg;
  modalPopUp.style.display = "block";
  // alert(msg); // eslint-disable-line no-alert
}

/* Open a menu section */
function openMenuSec(MenuItem) {
  let i;
  const x = document.getElementsByClassName("MenuSec");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.getElementById(MenuItem).style.display = "block";
  // event.currentTarget.className += " w3-light-grey";  // This makes the button grey after having been used.  Do we want it?
}

// EXTERNAL INTERFACING
/* Export to Excel Function */
function ExportToExcel(tableName) { // eslint-disable-line no-unused-vars
  let i, tab, sa, txtArea1, tab_text;
  const ua = window.navigator.userAgent;
  const msie = ua.indexOf("MSIE ");

  tab_text = "<table border='2px'><tr><center><b>" + tableName + "</b></center></td></tr> <tr bgcolor='#87AFC6'>";
  tab = document.getElementById("tblGTModules"); // id of table

  for (i = 0; i < tab.rows.length; i++) {
    tab_text = tab_text + tab.rows[i].innerHTML + "</tr>";
  // tab_text=tab_text+"</tr>";
  }
  tab_text += "</table>";
  tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, "");// remove if u want links in your table
  tab_text = tab_text.replace(/<img[^>]*>/gi, ""); // remove if u want images in your table
  tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

  // if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))    // If Internet Explorer
  // {
  if (msie > 0 || !!navigator.userAgent.match(/Trident/)) {
  // if (navigator.appName === "Microsoft Internet Explorer" ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !=== "undefined" && $.browser.msie === 1)) {
    txtArea1.document.open("txt/html", "replace");
    txtArea1.document.write(tab_text);
    txtArea1.document.close();
    txtArea1.focus();
    sa = txtArea1.document.execCommand("SaveAs", true, ".xls");
  } else {
    sa = window.open("data:application/vnd.ms-excel," + encodeURIComponent(tab_text));
    return (sa);
  }
}

// MODAL POP-UP BOX STYLE

// When the user clicks on <span> (x), close the modal
function pu_close() { // eslint-disable-line no-unused-vars
  modalPopUp.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
function windowClick() { // eslint-disable-line no-unused-vars
  if (event.target === modalPopUp) { // eslint-disable-line no-restricted-globals
    modalPopUp.style.display = "none";
  }
}

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

/* FUNCTIONS USED IN OTHER PLACES - Stops eslint errors */
/* exported w3_open */
/* exported w3_close */
/* exported InitialiseForm */
/* exported checkRules */
/* exported clickedSMM */
/* exported CheckSuiteUsers */
/* exported GTMargins */
/* exported SetPartnerMargin */
/* exported ExportToExcel */
