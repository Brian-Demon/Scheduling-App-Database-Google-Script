function fixAvailabilityData() {
  let names = getRosterNames();
  let sheet = ssData.getSheetByName('Availability Data');
  let delArray = [];
  let lastRow = sheet.getLastRow();
  for( let r = 2; r <= lastRow; r++ ){
    let name = sheet.getRange(r, 3).getValue();
    //      Logger.log('@row: ' + r + ', name: ' + name);
    if( names.indexOf(name) === -1 ){ 
      /*
      sheet.deleteRow(r);
      sheet.insertRowAfter(lastRow + 1);
      */
    }
  }
}