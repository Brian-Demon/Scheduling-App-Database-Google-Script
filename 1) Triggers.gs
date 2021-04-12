function onFormSubmit(e){
  let formSheetSource = e.source;
  let formSheetSourceName = formSheetSource.getSheetName();
  let availBool = false;
  let formType = "";
  // Check if submitted form is of a valid sheet
  if(formSheetSourceName !== availabilityDataFromFormSheetName && formSheetSourceName !== RODataFromFormSheetName){ return; }
  
  // if submitted Availability, then...                                        <------ AVAILABILITY 
  if(formSheetSourceName === availabilityDataFromFormSheetName){
    var source = availabilityDataFromFormSheet;
    var target = availabilityDataSheet;
    availBool = true;
    formType = "Availability";
  }
  // if submitted Request Off, then...                                         <------ REQUEST OFF
  else if(formSheetSourceName === RODataFromFormSheetName){
    source = ssData.getSheetByName(RODataFromFormSheetName);
    target = ssData.getSheetByName(RODataSheetName);
    formType = "Request Off";
  }
  // @TODO: FIND WHERE THE DATA FIRST COMES IN...PRETTY SURE RIGHT AWAY BEFORE ALL THIS
  let lastRow = source.getLastRow();
  let lastColumn = source.getLastColumn();
  if( lastRow > 2 ){ // IF THERE IS LINGERING EXTRA DATA IN THE SOURCE SHEET, SAVE THE NEWLY SUBMITTED DATA, DELETE ALL DATA (EXCEPT HEADER), AND RESTORE NEWLY SUBMITTED DATA TO ROW 2
    let values = source.getRange(lastRow, 1, 1, lastColumn).getValues();
    source.deleteRows(2, lastRow);
    source.insertRows(2, lastRow);
    source.getRange(2, 1, 1, lastColumn).setValues(values);
  }
  let targetNextRow = target.getLastRow() + 1;
  let name = source.getRange(2, 3).getValue();
  source.getRange(2, 1, 1, lastColumn).copyTo(target.getRange(targetNextRow, 1, 1, lastColumn));
  let maxRow = source.getMaxRows();
  source.deleteRow(2);
  lastRow = source.getLastRow();
  source.insertRowAfter(lastRow);
  lastRow = target.getLastRow();
  lastColumn = target.getLastColumn();
  target.autoResizeColumns(1, lastColumn);
  if ( availBool === true ){
    // Get current yellows
    let beforeColorNames = getYellowAvailabilities();
    // Call four (three in {initializeNewAvailability()} methods to finish capture and sending of new availability
    initializeNewAvailability();
    fixAvailabilityData();
    // Set old yellows along with newst person who just submitted a new availability
    setOldYellows(beforeColorNames, name);
  }
  else{
    target.getRange(lastRow, 8).setValue('=$E' + lastRow + '-$D' + lastRow + '+1');
//    let newWidth = target.getColumnWidth(lastColumn) + 5;
//    target.setColumnWidth(lastColumn, newWidth);
    sendRO();
  }
//  MailApp.sendEmail("DemonDrummer1018@gmail.com", `BHB: New ${formType} Form Submitted`, `A New ${formType} Form has been submitted for your review.\r\n\r\n\r\nCheers,\r\n\r\nBeerhead Schedulling-bot`);
}

/*
function onOpen(){
  /*
  let sheet = availabilityDataSheet;
  let lastRow = sheet.getDataRange().getLastRow();
  if( lastRow < 1000 ){ sheet.insertRowsAfter(lastRow, 1000 - lastRow); }
  sheet = RODataSheet;
  lastRow = sheet.getDataRange().getLastRow();
  if( lastRow < 1000 ){ sheet.insertRowsAfter(lastRow, 1000 - lastRow); }
  */
//}
