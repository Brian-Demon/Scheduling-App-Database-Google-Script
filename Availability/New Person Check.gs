function newPersonCheck() {
  let sheet = ssData.getSheetByName('Availability Data');
  let roster = getRosterNames();
  let names = getArray(sheet, 2, 3);
  for( i = 0; i < names.length; i++ ){
    if( roster.indexOf(names[i]) == -1 ){
      let target = ssData.getSheetByName(rosterSourceSheetName);
      let lastRow = target.getLastRow();
      target.getRange(lastRow + 1, 1).setValue(names[i]);
      target.getRange(lastRow + 1, 2).setValue('Unknown');
    }
  }
}