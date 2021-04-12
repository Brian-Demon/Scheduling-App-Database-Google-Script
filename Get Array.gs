function getArray(sheet, startRow, column){
  let lastRow = sheet.getLastRow();
  let array = [];
  for( r = startRow; r <= lastRow; r++ ){
    let value = sheet.getRange(r, column).getValue();
    array.push(value);
  }
  return array;
}
