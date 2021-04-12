function findRemoveDupAvail(){
  let sheet = ssData.getSheetByName(availabilityDataSheetName);
  let lastRow = sheet.getLastRow();
  let lastColumn = sheet.getLastColumn();
  
  let existingNames = [];
  let newName = sheet.getRange(lastRow, 3).getValue();
//  Logger.log(newName);
  for( r = 2; r <= lastRow - 1; r++ ){
    let name = sheet.getRange(r, 3).getValue();
    existingNames.push(name);
  }
//  Logger.log('existingNames: ' + existingNames.toString());
  
  // Check if the name of the person who submitted a new availability already has one on file //
  let rowToMoveThenDelete = 0;
  if( existingNames.indexOf(newName > -1 )){
    for( i = 0; i < existingNames.length; i++ ){
      let name = existingNames[i];
//      Logger.log('@i: ' + i);
//      Logger.log('name: ' + name);
//      Logger.log('newName: ' + newName);
      if( name === newName ){
        rowToMoveThenDelete = i + 2;
        let target = ssData.getSheetByName(oldAvailabilitiesSheetName);
        let nextRow = target.getLastRow() + 1;
        sheet.getRange(rowToMoveThenDelete, 1, 1, lastColumn).copyTo(target.getRange(nextRow, 1));
        sheet.deleteRow(rowToMoveThenDelete);
        sheet.getRange(2, 1, lastRow, lastColumn).sort({column: 3, ascending: true});
      }
    }
  }
}