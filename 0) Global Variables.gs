const ssData = SpreadsheetApp.openById('13r68j68qE8r5Knwu03I_b2i8essVrncscJ5niXvm0BQ');
const ss = SpreadsheetApp.openById('1-9gyabLz_8QLfj2bcv05tKuqKQ8T3F_doTQ_7K5Vd1s');

// ********************* // 
// -- Sheet Variables -- //
// ********************* //
// -- Sheet Name Variables -- //
// -------------------------- //
const templateSourceSheetName = 'Template Source';
const availabilitySheetName = 'Availability';
const availabilityDataSheetName = 'Availability Data';
const sortedAvailabilitySheetName = 'Sorted Availability';
const oldAvailabilitiesSheetName = 'Old Availabilities';
const availabilityDataFromFormSheetName = 'Availability Data From Form';
const ROsSheetName = "R/Os";
//const ROStatsSheetName = 'R/O Stats';
const RODataSheetName = 'R/O Data';
const RODataFromFormSheetName = 'R/O Data From Form';
const rosterSourceSheetName = 'Roster Source';
const togglesSheetName = 'Toggles';
// -- Sheet Variables -- //
// --------------------- //
const templateSourceSheet = ssData.getSheetByName(templateSourceSheetName);
const availabilitySheet = ss.getSheetByName(availabilitySheetName);
const availabilityDataSheet = ssData.getSheetByName(availabilityDataSheetName);
const sortedAvailabilitySheet = ssData.getSheetByName(sortedAvailabilitySheetName);
const oldAvailabilitiesSheet = ssData.getSheetByName(oldAvailabilitiesSheetName);
const availabilityDataFromFormSheet = ssData.getSheetByName(availabilityDataFromFormSheetName);
const ROsSheet = ss.getSheetByName(ROsSheetName);
//const ROStatsSheet = ss.getSheetByName(ROStatsSheetName);
const RODataFromFormSheet = ssData.getSheetByName(RODataFromFormSheetName);
const rosterSourceSheet = ssData.getSheetByName(rosterSourceSheetName);
const togglesSheet = ssData.getSheetByName(togglesSheetName);


// ********************** // 
// --  Color Variables -- //
// ********************** //
// Scheduling Colors
const trainingColor = "#00ff00"
const requestOffColor = "#ff0000"
const inventoryColor = "#00ffff"
const openingColor = "#ffe599"
const midColor = "#e6b8af"
const closingColor = "#b4a7d6"
const changesMadeColor = "#ffff00"
// Availability Colors
const anyColor = "#00ff00";
const offColor = '#666666';
const openColor = "#ffe599";
const midAvailColor = "#e6b8af";
const closeColor = "#b4a7d6";
const openMidColor = "#f6b26b";
const midCloseColor = "#a4c2f4";
const openCloseColor = "#d5a6bd";
// Request Off  Colors
const acceptROColor = "#b6d7a8"
const denyROColor = "#ea9999";
const resetColor = "White";
// Other Colors
const red = "#ff0000";
const blue = '#0000ff';
const black = "#000000";
const grey = '#cccccc';
const white = '#ffffff';
const purple = '#9900ff';
const yellow = '#ffff00';
const lightGreen2 = '#b6d7a8';
const lightPurple2 = '#b4a7d6';
const lightBlue2 = '#9fc5e8';
const lightRed2 = '#ea9999';
const lightOrange2 = '#f9cb9c';
const magenta = '#ff00ff';
const cyan = '#00ffff';
const customAvail = "#ffffffff"

// ******************** // 
// --  Border Styles -- //
// ******************** //
const solid = SpreadsheetApp.BorderStyle.SOLID;
const solidMedium = SpreadsheetApp.BorderStyle.SOLID_MEDIUM;


// ****************** // 
// --  Boolean Row -- //
// ****************** //
const rosterRow = 1;
const statsRow = 2;


// ********************** // 
// --  No Avail String -- //
// ********************** //
const noAvailString = 'NO AVAILABILITY ON FILE YET';
const unknownTitleString = "UPDATE EMPLOYEE'S TITLE TO SEE AVAILABILITY";


// ************************* // 
// --  Date & Time Format -- //
// ************************* // 
const timezone = 'GMT-6';
const dtFormat = 'MMMM dd, yy HH:mm:ss.SSS';