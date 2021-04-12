function fixAvailabilitySheetFormat() {
  let sheet = ss.getSheetByName(availabilitySheetName);
  sheet.setTabColor(purple);
  let sorted = ssData.getSheetByName(sortedAvailabilitySheetName);
  let lastRow = sorted.getLastRow();
  let lastColumn = sorted.getLastColumn();
  let startRow = 3;
  let startColumn = 2;
  let namesRange = sheet.getRange(startRow, startColumn, lastRow - 2, 1);
  let bodyRange = sheet.getRange(startRow, startColumn + 1, lastRow - 2, lastColumn - 2);
  
  namesRange.setFontWeight('bold').setHorizontalAlignment("center").setVerticalAlignment("middle").setBorder(true,true,true,true,true,true,black,solid);
  bodyRange.setHorizontalAlignment("center").setVerticalAlignment("middle").setBorder(true,true,true,true,true,true,black,solid);
  
  getAvailabilityHeader(sheet);
  myAutoResizeColumns(sheet, startColumn + 1, 14);
  
  for( r = startRow; r <= lastRow; r++ ){
    let value = sheet.getRange(r, startColumn + 1).getValue();
    // CHECK SECOND COLUMN IN AFTER START COLUMN AND CHANGE TO NEEDED MESSAGE TO USER
    let targetRange = sheet.getRange(r, startColumn + 1, 1, 14);
    switch( value ){
      case 'NA':
        targetRange.setValue(noAvailString).mergeAcross().setBorder(true,true,true,true,true,true,black,solid);
        break;
      case 'UT':
        targetRange.setValue(unknownTitleString).mergeAcross().setBorder(true,true,true,true,true,true,black,solid);
        break;
      default:
        break;
    }
  }
  sheet.setColumnWidth(1, 5);
  sheet.setRowHeight(1, 5);
  getAvailabilityHeader(sheet);
}