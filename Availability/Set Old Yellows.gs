function setOldYellows(beforeColorNames, name){ // arg is an object with {name(s)} & {color(s)}
//  Logger.log(`Name (arg): ${name}`);
//  loggerBeforeColorNames(beforeColorNames);
  let sheet = ss.getSheetByName(availabilitySheetName);
  let lastRow = sheet.getLastRow();
  let rosterNames = getRosterNames();
  let objNames = [];
  for( let i in beforeColorNames ){
    objNames.push(beforeColorNames[i].name);
  }
  // Set old yellows
  for( let r = 3; r < lastRow; r++ ){
    let value = sheet.getRange(r, 2).getValue();
    let objColor = beforeColorNames[r-3].color;
    if( objNames.indexOf(value) !== -1 ){
      sheet.getRange(r, 2).setBackground(objColor);
    }
  }
  
  // LOGGER OUT OBJECET ELEMENTS
//  for( let i in beforeColorNames ){
//    Logger.log(`i: ${i} -- Name: ${beforeColorNames[i].name}, Color: ${beforeColorNames[i].color}`)
//  }
  // END LOGGER
  
  // Set newest yellow
  let row = rosterNames.indexOf(name) + 3;
//  Logger.log(row);
  sheet.getRange(row, 2).setBackground(yellow);
}
