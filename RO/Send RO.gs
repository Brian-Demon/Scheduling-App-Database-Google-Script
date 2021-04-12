function sendRO() {
  const startRow = 2;
  let source = ssData.getSheetByName('R/O Data');
  let target = ss.getSheetByName('R/Os');
  let lastRow = source.getLastRow();
  let lastColumn = source.getLastColumn();
  let values = [];
  let temp = [];
  for( c = 1; c <= lastColumn; c++ ){
    let value = source.getRange(lastRow, c).getValue();
    temp.push(value);
  }
  Logger.log(temp.toString());
  values.push(temp);
  let targetNextRow = target.getLastRow() + 1;
  target.getRange(targetNextRow, 1, 1, lastColumn).setValues(values);
  lastRow = target.getLastRow();
  Logger.log(lastRow);
  target.getRange(startRow, 1, lastRow - 1, 8).setBorder(true,true,true,true,true,true,black,solid);
  target.getRange(startRow, 3, lastRow - 1, 3).setFontWeight('bold').setBorder(true,true,true,true,null,null,black,solidMedium);
  target.getRange(startRow, 1, lastRow - 1, 8).setHorizontalAlignment("center").setVerticalAlignment("middle").setBorder(true,true,true,true,null,null,black,solidMedium);
  target.getRange(startRow, 10, lastRow - 1, 1).setHorizontalAlignment("center").setVerticalAlignment("middle").setBorder(true,true,true,true,true,true,black,solid);
  target.getRange(startRow, 10, lastRow - 1, 1).setHorizontalAlignment("center").setVerticalAlignment("middle").setBorder(true,true,true,true,null,null,black,solidMedium);
  myAutoResizeColumns(target, 1, 8);
  target.getRange(2, 1, target.getLastRow(), target.getLastColumn()).sort({column: 4, ascending: false});
}