function sendSortedAvailability() {
  let target = ss.getSheetByName('Availability');
  ss.deleteSheet(target);
  ss.insertSheet(availabilitySheetName, 0);
  target = ss.getSheetByName(availabilitySheetName);
  let source = ssData.getSheetByName(sortedAvailabilitySheetName);
  let lastRow = source.getLastRow();
  let lastColumn = source.getLastColumn();
  let values = source.getDataRange().getValues();
  let notes = source.getRange(3, 2, lastRow - 2, 1).getNotes().flat();
  for( let i = 0; i < notes.length; i++ ){
    let note = notes[i];
    if( note === "" || !note ) continue;
//    Logger.log(`@i: ${i}, note: ${note}`);
    target.getRange(3 + i, 2).setNote(note).setBackground(red);
  }
  target.getRange(1, 1, lastRow, lastColumn).setValues(values);
  fixAvailabilitySheetFormat();
  setAvailConditionalFormating();
  fixCustomAvailabiltiy();
}