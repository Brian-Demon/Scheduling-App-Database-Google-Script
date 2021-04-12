function getAvailabilityHeader(sheet){
  let row = 2;
  let column = 2;
  sheet.getRange(row, column).setValue('Name').setBackground(lightPurple2).setFontWeight('bold');
  sheet.getRange(row, column + 1).setValue('MON (A)').setBackground(lightGreen2).setFontWeight('bold');
  sheet.getRange(row, column + 2).setValue('TUE (A)').setBackground(lightGreen2).setFontWeight('bold');
  sheet.getRange(row, column + 3).setValue('WED (A)').setBackground(lightGreen2).setFontWeight('bold');
  sheet.getRange(row, column + 4).setValue('THU (A)').setBackground(lightGreen2).setFontWeight('bold');
  sheet.getRange(row, column + 5).setValue('FRI (A)').setBackground(lightGreen2).setFontWeight('bold');
  sheet.getRange(row, column + 6).setValue('SAT (A)').setBackground(lightGreen2).setFontWeight('bold');
  sheet.getRange(row, column + 7).setValue('SUN (A)').setBackground(lightGreen2).setFontWeight('bold');
  sheet.getRange(row, column + 8).setValue('MON (P)').setBackground(lightBlue2).setFontWeight('bold');
  sheet.getRange(row, column + 9).setValue('TUE (P)').setBackground(lightBlue2).setFontWeight('bold');
  sheet.getRange(row, column + 10).setValue('WED (P)').setBackground(lightBlue2).setFontWeight('bold');
  sheet.getRange(row, column + 11).setValue('THU (P)').setBackground(lightBlue2).setFontWeight('bold');
  sheet.getRange(row, column + 12).setValue('FRI (P)').setBackground(lightBlue2).setFontWeight('bold');
  sheet.getRange(row, column + 13).setValue('SAT (P)').setBackground(lightBlue2).setFontWeight('bold');
  sheet.getRange(row, column + 14).setValue('SUN (P)').setBackground(lightBlue2).setFontWeight('bold');
  sheet.getRange(row, column, 1, 15).setHorizontalAlignment("center").setVerticalAlignment("middle").setBorder(true,true,true,true,true,true,black,solidMedium);
}
