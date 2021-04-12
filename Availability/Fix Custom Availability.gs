function fixCustomAvailabiltiy(){
  let sheet = ss.getSheetByName(availabilitySheetName);
  let lastRow = sheet.getLastRow();
  let colors = [];
  for( let r = 3; r <= lastRow; r++ ){
    let value = sheet.getRange(r, 3).getValue();
    if( value != noAvailString ){
      var array = sheet.getRange(r, 3, 1, 7).getBackgroundObjects();
      colors.push(array[0]);
    }
  }
//  Logger.log(colors.toString());
  let ranges = [];
  for( let i = 0; i < colors.length; i++ ){
    for( let j = 0; j < colors[i].length; j++ ){
      let color = convertToHex(colors[i][j]);
      if( color == customAvail ){
        var row = i + 4;
        var col = j + 3;
//        Logger.log('Row: ' + row + ', Col: ' + col);
        ranges.push(sheet.getRange(row, col));
      }
    }
  }
//  Logger.log(ranges.length);
  for( let i in ranges ){
    ranges[i].setBackground(magenta);
  }
}