var vAUD, vNZD, vBPS, cur; 			// Currencies
vAUD = 1; 							// AUD Exchange Rate
vNZD = 1.5; 						// NZD Exchange Rate
vBPS = 2; 							// BPS Exchange Rate

_GTDBSmallPrc = 400; 				// Hosting price for Greentree DB for <= 7 Users
_GTDBLargePrc = 500; 				// Hosting price for Greentree DB for > 7 Users
_GTDBTestPrc = 500; 				// Price for each additional Greentree database hosted.  Users not counted.
_AODBasePrc = 60; 					// Per user price for any user that requires to access a windows client on AOD.
_GTFullPrc = 20.50; 				// Per user price for a full windows client - These users also get access to the Greentree Browser included
_GWPWebViewPrc = 250; 				// Per WebView Portal price, Users not counted but subject to fair use policy.
_GWPeAppPrc = 250; 					// Per eApprovals Portal price, Users not counted but subject to fair use policy.
_GWPeTshPrc = 250;	 				// Per eTimsheets Portal price, Users not counted but subject to fair use policy.
_GWPeHRPrc = 250; 					// Per eHR Portal price, Users not counted but subject to fair use policy.
_GWPeReqPrc = 250; 					// Per eRequisitions Portal price, Users not counted but subject to fair use policy.
_GTBBasePrc = 250; 					// Per Base Browser Portal price and one is required if one or more Browser Mobile suites are required, Users not counted but subject to fair use policy.
_GTBCRMPrc = 200; 					// Per CRM Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
_GTBSalesPrc = 200; 				// Per Sales Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
_GTBSrvcPrc = 200;	 				// Per Service Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
_GTBHRPrc = 200; 					// Per HR Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
_GTBTshPrc = 200; 					// Per Timesheet Mobile Portal price in addition to the Base Mobile Portal. Users not counted but subject to fair use policy.
_GTEBasePrc = 250; 					// Required as a base if ANY eDoc ONLY users exist.  Full Greentree Clients get eDocs included the Full Greentree license.
_GTEUserPrc = 30; 					// Per Greentree ONLY user.  An eDocs ONLY user is not allowed access to any other Greentree Windows client functionality.
_QLKSvrLitePrc = 500; 				// Per QlikView/QlikSense Server.  Does not include any users.
_QLKSvrPlusPrc = 700;	 			// Per QlikView/QlikSense Server.  Does not include any users.
_QLKSvrXtrmPrc = 900; 				// Per QlikView/QlikSense Server.  Does not include any users.
_QLKUserPrc = 15; 					// Per QlikView/QlikSense User.  Does not include AOD Base access for the Windows QlikView client.
_MSOffStdPrc = 25; 					// Per Microsoft Office Standard User.  Does not include AOD Base access for the Windows client.
_MSOffProPrc = 49.75;				// Per Microsoft Office Professional User.  Does not include AOD Base access for the Windows client.
_MSVisStdPrc = 12;	 				// Per Microsoft Visio Standard User.  Does not include AOD Base access for the Windows client.
_MSVisProPrc = 26.30;				// Per Microsoft Visio Professional User.  Does not include AOD Base access for the Windows client.
_MSPrjStdPrc = 27.95;				// Per Microsoft Project Standard User.  Does not include AOD Base access for the Windows client.
_MSPrjProPrc = 46.60;				// Per Microsoft Project Professional User.  Does not include AOD Base access for the Windows client.
_MSExUsrSmlPrc = 10; 				// Per Microsoft hosted mail box - Small.
_MSExUsrMedPrc = 20; 				// Per Microsoft hosted mail box - Medium.
_MSExUsrLrgPrc = 50; 				// Per Microsoft hosted mail box - Large.
_MiscStrg1Prc = 1.25;	 			// Extra Storage Charge (For storage above storage allowed under acceptable usage policy).
_MiscCust1Prc = 15; 				// A typical single tier application price per user.


function InitialiseForm() {
    SetPrices(); 																//Sets the Prices based on the currency
    CalcPrices(this); 															//Calculates the extended prices
}

//Sets the unit prices based on currency
function SetPrices() {
	var i, eleObj, eleName, beforeVal, afterVal, isOddlyZero;
	
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
            cur = 999
    }
    document.getElementById("GTDBSmallPrc").innerHTML = (_GTDBSmallPrc * cur).toFixed(2);
    document.getElementById("GTDBLargePrc").innerHTML = (_GTDBLargePrc * cur).toFixed(2);
	document.getElementById("GTDBTestPrc").innerHTML = (_GTDBTestPrc * cur).toFixed(2);
    document.getElementById("AODBasePrc").innerHTML = (_AODBasePrc * cur).toFixed(2);
    document.getElementById("GTFullPrc").innerHTML = (_GTFullPrc * cur).toFixed(2);
	document.getElementById("GWPWebViewPrc").innerHTML = (_GWPWebViewPrc * cur).toFixed(2);
	document.getElementById("GWPeAppPrc").innerHTML = (_GWPeAppPrc * cur).toFixed(2);
	document.getElementById("GWPeTshPrc").innerHTML = (_GWPeTshPrc * cur).toFixed(2);
	document.getElementById("GWPeHRPrc").innerHTML = (_GWPeHRPrc * cur).toFixed(2);
	document.getElementById("GWPeReqPrc").innerHTML = (_GWPeReqPrc * cur).toFixed(2);
	document.getElementById("GTBBasePrc").innerHTML = (_GTBBasePrc * cur).toFixed(2);
	document.getElementById("GTBCRMPrc").innerHTML = (_GTBCRMPrc * cur).toFixed(2);
	document.getElementById("GTBSalesPrc").innerHTML = (_GTBSalesPrc * cur).toFixed(2);
	document.getElementById("GTBSrvcPrc").innerHTML = (_GTBSrvcPrc * cur).toFixed(2);
	document.getElementById("GTBHRPrc").innerHTML = (_GTBHRPrc * cur).toFixed(2);
	document.getElementById("GTBTshPrc").innerHTML = (_GTBTshPrc * cur).toFixed(2);
	document.getElementById("GTEBasePrc").innerHTML = (_GTEBasePrc * cur).toFixed(2);
	document.getElementById("GTEUserPrc").innerHTML = (_GTEUserPrc * cur).toFixed(2);
	document.getElementById("QLKSvrLitePrc").innerHTML = (_QLKSvrLitePrc * cur).toFixed(2);
	document.getElementById("QLKSvrPlusPrc").innerHTML = (_QLKSvrPlusPrc * cur).toFixed(2);
	document.getElementById("QLKSvrXtrmPrc").innerHTML = (_QLKSvrXtrmPrc * cur).toFixed(2);
	document.getElementById("QLKUserPrc").innerHTML = (_QLKUserPrc * cur).toFixed(2);
	document.getElementById("MSOffStdPrc").innerHTML = (_MSOffStdPrc * cur).toFixed(2);
	document.getElementById("MSOffProPrc").innerHTML = (_MSOffProPrc * cur).toFixed(2);
	document.getElementById("MSVisStdPrc").innerHTML = (_MSVisStdPrc * cur).toFixed(2);
	document.getElementById("MSVisProPrc").innerHTML = (_MSVisProPrc * cur).toFixed(2);
	document.getElementById("MSPrjStdPrc").innerHTML = (_MSPrjStdPrc * cur).toFixed(2);
	document.getElementById("MSPrjProPrc").innerHTML = (_MSPrjProPrc * cur).toFixed(2);
	document.getElementById("MSExUsrSmlPrc").innerHTML = (_MSExUsrSmlPrc * cur).toFixed(2);
	document.getElementById("MSExUsrMedPrc").innerHTML = (_MSExUsrMedPrc * cur).toFixed(2);
	document.getElementById("MSExUsrLrgPrc").innerHTML = (_MSExUsrLrgPrc * cur).toFixed(2);
	document.getElementById("MiscStrg1Prc").innerHTML = (_MiscStrg1Prc * cur).toFixed(2);
	document.getElementById("MiscCust1Prc").innerHTML = (_MiscCust1Prc * cur).toFixed(2);
	
	//Set all the extended values
	isOddlyZero=false
	eleObj=document.getElementById("PriceTbl1")
	for (i = 0; i < eleObj.rows.length; i++) {														//Loop through the PriceTbl1 rows
		if (eleObj.rows[i].id.substr(eleObj.rows[i].id.length - 8) == "LineItem") {				//If the row is a 'LineItem' row
		
			eleName=eleObj.rows[i].id.substr(0, eleObj.rows[i].id.length - 8);					//Get the element name
			
			
			if (isNaN(parseFloat(document.getElementById(eleName + "Val").innerHTML))) {
				beforeVal=0;
			} else {
				beforeVal=parseFloat(document.getElementById(eleName + "Val").innerHTML);
			}
			
			if (isNaN(document.getElementById(eleName + "Qty").value)) {						//If not Input value then
				document.getElementById(eleName + "Val").innerHTML = (parseInt(document.getElementById(eleName + "Qty").innerHTML) * document.getElementById(eleName + "Prc").innerHTML).toFixed(2);						//calculate the extended value and format it to 0
			} else {																			//else 
				document.getElementById(eleName + "Val").innerHTML = (document.getElementById(eleName + "Qty").value * document.getElementById(eleName + "Prc").innerHTML).toFixed(2);							//calculate the extended value and format it to 0
			}
			
			afterVal=parseFloat(document.getElementById(eleName + "Val").innerHTML);
			
			if (beforeVal != afterVal && beforeVal != 0 && afterVal == 0) {
				window.alert("Check the prices, some have now been reduced to zero");
				document.getElementById(eleName + "Val").style.backgroundColor="red";
			}
		}
	}	
}

//Calculates the extended prices
function CalcPrices(evt) {
    var id, eleName, fldType, evt2;
	
	
    id = evt.id;
    if (typeof cur === 'undefined' || cur === null) { //Check currency has been initialised... belts and braces as should be set on initialisation!
        SetPrices(); //Set the prices to initialise the currency
    }
    if (id == null) { //This function might not be called from an element, so allow for undefined!
        var id = "undefined";
    }
    switch (id) {  //Switch based on id
        case "GTFullQty":
			qtyChanged(evt);
			if (document.getElementById(id).value <= 7) {
				document.getElementById("GTDBSmallQty").innerHTML = "1";
				document.getElementById("GTDBLargeQty").innerHTML = "0";
			} else {
				document.getElementById("GTDBSmallQty").innerHTML = "0";
				document.getElementById("GTDBLargeQty").innerHTML = "1";				
			};

			//window.alert(evt.id);
			//var evt2=new Event('GTDBSmallQty');
			//evt2.id="GTDBSmallQty";
			
            break;
			
        case "undefined":
            break;
			
        default:
			fldType=id.substr(id.length - 3);
			switch (fldType) {
				case "Qty":
					qtyChanged(evt);
					break;
				case "Prc":
					prcChanged(evt);
					break;
			}
    }
}

function qtyChanged(evt) {
	var id;
	id=evt.id;
	eleName = id.substr(0, id.length - 3);
	
	document.getElementById(id).value = parseFloat(evt.value).toFixed(0); //Format it to 0
	
	if (isNaN(document.getElementById(eleName + "Prc").value)) {						//If the price is not an Input value then calc this way
		document.getElementById(eleName + "Val").innerHTML = (document.getElementById(eleName + "Qty").value * parseFloat(document.getElementById(eleName + "Prc").innerHTML)).toFixed(2);
	} else {
		document.getElementById(eleName + "Val").innerHTML = (document.getElementById(eleName + "Qty").value * document.getElementById(eleName + "Prc").value).toFixed(2);
	};
}

function prcChanged(evt) {
	var id;
	id=evt.id;
	eleName = id.substr(0, id.length - 3);
	document.getElementById(id).value = parseFloat(evt.value).toFixed(2); //Format it to 2
	
	if (isNaN(document.getElementById(eleName + "Qty").value)) {						//If the price is not an Input value then calc this way
		document.getElementById(eleName + "Val").innerHTML = (document.getElementById(eleName + "Prc").value * parseFloat(document.getElementById(eleName + "Qty").innerHTML)).toFixed(2);
	} else {
		document.getElementById(eleName + "Val").innerHTML = (document.getElementById(eleName + "Prc").value * document.getElementById(eleName + "Qty").value).toFixed(2);
	};
}

function myFunction() {
    window.alert(document.getElementById("PriceTbl1").rows[2].innerHTML);
}

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}