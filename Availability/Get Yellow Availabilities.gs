function getYellowAvailabilities() {
  let sheet = ss.getSheetByName(availabilitySheetName);
  let lastRow = sheet.getLastRow();
  let beforeColorNames = [];
  for( let r = 3; r <= lastRow; r++ ){
    let namesColors = {
      name: sheet.getRange(r, 2).getValue(),
      color: sheet.getRange(r, 2).getBackground()
    }
//    Logger.log(`Name: ${namesColors.name}, Color: ${namesColors.color}`)
    beforeColorNames.push(namesColors);
  }
  return beforeColorNames;
}
