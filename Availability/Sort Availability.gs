function sortAvailability() {
  // @TODO: SORTING FUCKING UP -- ADDING HEADER TO THE MIDDLE OF THE SHEET
  let source = ssData.getSheetByName(availabilityDataSheetName);
  let sheets = getSheetNames();
  let sheetIndex = sheets.indexOf(availabilityDataSheetName);
  let target = ssData.getSheetByName(sortedAvailabilitySheetName);
  // ----------------------------------------------------> GET SORTED STAFF
  let staff = getSortedStaff();
  //getObjectArrayLogs(staff);
  
  let currentNames = getArray(source, 2, 3);
  //Logger.log(currentNames.toString());
  
  ssData.deleteSheet(target);
  ssData.insertSheet(sortedAvailabilitySheetName, sheetIndex).setTabColor(purple);
  target = ssData.getSheetByName(sortedAvailabilitySheetName);
  //target.clear(); 
  
  let startRow = 3;
  let startColumn = 2;
  target.setColumnWidth(1, 5);
  target.setRowHeight(1, 5);
  for( let i = 0; i < staff.length; i ++ ){
    let name = staff[i].name;
    let title = staff[i].title;
    let index = currentNames.indexOf(name);
    //Logger.log('@i: ' + i + ', ' + name + ' (' + title + ')');
    // SET NAMES IN STARTING COLUMN
    target.getRange(i + startRow, startColumn).setValue(name).setBorder(true,true,true,true,true,true,black,solid);
    let availToSendRange = source.getRange(index + 2, 4, 1, 14);
    let targetRange = target.getRange(i + startRow, startColumn + 1);
    // COPY OVER AVAILABILITY FOR EACH EMPLOYEE
    availToSendRange.copyTo(targetRange);
    // Set body border
    target.getRange(i + startRow, startColumn + 1, 1, 14).setHorizontalAlignment("center").setVerticalAlignment("middle").setBorder(true,true,true,true,true,true,black,solid);
    let value = target.getRange(i + startRow, startColumn + 1).getValue();
    if( value === '' ){
      target.getRange(i + startRow, startColumn + 1).setValue('NA');
    }
  }
  // SEE IF ANY NAME WAS MISSED (I.E.: AN AVAILABILITY SUBMITTED WHO IS NOT ON THE ROSTER YET)
  let sourceLastRow = source.getLastRow();
  let sourceNames = source.getRange(2, 3, sourceLastRow - 1, 1).getValues().flat();
  let targetLastRow = target.getLastRow();
  let targetNames = target.getRange(3, 2, targetLastRow - 2, 1).getValues().flat();
  for( let i = 0; i < sourceNames.length; i++ ){
    let value = sourceNames[i];
    if( targetNames.indexOf(value) === -1 ){
      let sourceRow = sourceNames.indexOf(value) + 2;
      let sourceValues = source.getRange(sourceRow, 3, 1, 15).getValues();
      target.getRange(targetLastRow + 1, startColumn, 1, 15).setValues(sourceValues);
      target.getRange(targetLastRow + 1, startColumn, 1, 15).setBorder(true,true,true,true,true,true,black,solid);
      target.getRange(targetLastRow + 1, startColumn + 1, 1, 14).setHorizontalAlignment("center").setVerticalAlignment("middle");
      target.getRange(targetLastRow + 1, startColumn).setComment("NEEDS TO BE ADDED TO ROSTER!");
    }
  }
  
  for( i = 0; i < staff.length; i ++ ){
    if( staff[i].title === 'Unknown' ){
      target.getRange(i + startRow, startColumn + 1).setValue('UT');
    }
  }
  
  getAvailabilityHeader(target);
}
