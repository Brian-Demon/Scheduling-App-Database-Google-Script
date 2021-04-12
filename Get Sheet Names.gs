function getSheetNames(){
  return SpreadsheetApp.getActiveSpreadsheet().getSheets().map(function(sheet){
    return sheet.getName();
  });
}