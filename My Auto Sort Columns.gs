function myAutoResizeColumns(sheet, startColumn, numberOfColumns) {
  sheet.autoResizeColumns(startColumn, numberOfColumns);
  let fixColumn = numberOfColumns;
  let maxColumn = sheet.getMaxColumns();
  if( fixColumn > maxColumn ){ sheet.insertColumns(maxColumn, fixColumn - maxColumn + 1); }
  let currentLastColumnWidth = sheet.getColumnWidth(fixColumn);
  sheet.setColumnWidth( fixColumn, currentLastColumnWidth + 3);
}