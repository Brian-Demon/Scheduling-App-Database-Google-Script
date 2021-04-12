function setAvailConditionalFormating(){
  var source = ss.getSheetByName(availabilitySheetName);
  let lastRow = source.getLastRow();
  let lastColumn = source.getLastColumn();
  let range = source.getRange("C3:P30");
  var ranges = [range];
  
  var ANY = "#00ff00";
  var OFF = "#666666";
  var OPEN = "#ffe599";
  var MID = "#e6b8af";
  var CLOSE = "#b4a7d6";
  var OPENMID = "#f6b26b";
  var MIDCLOSE = "#a4c2f4";
  var OPENCLOSE = "#d5a6bd";
  
  
  var anyFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("ANY")
    .setBackground(ANY)
    .setRanges(ranges)
    .build();
  var offFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("OFF")
    .setBackground(OFF)
    .setRanges(ranges)
    .build();
  var openFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("OPEN")
    .setBackground(OPEN)
    .setRanges(ranges)
    .build();
  var midFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("MID")
    .setBackground(MID)
    .setRanges(ranges)
    .build();
  var closeFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("CLOSE")
    .setBackground(CLOSE)
    .setRanges(ranges)
    .build();
  var openmidFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("OPEN/MID")
    .setBackground(OPENMID)
    .setRanges(ranges)
    .build();
  var midcloseFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("MID/CLOSE")
    .setBackground(MIDCLOSE)
    .setRanges(ranges)
    .build();
  var opencloseFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo("OPEN/CLOSE")
    .setBackground(OPENCLOSE)
    .setRanges(ranges)
    .build();
  var noAvailFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo(noAvailString)
    .setBackground(yellow)
    .setRanges(ranges)
    .build();
  var unknownTitleFormat = SpreadsheetApp.newConditionalFormatRule()
    .whenTextEqualTo(unknownTitleString)
    .setBackground(cyan)
    .setRanges(ranges)
    .build();
  
  source.clearConditionalFormatRules();
  var rules = source.getConditionalFormatRules();
  rules.push(anyFormat);
  rules.push(offFormat);
  rules.push(openFormat);
  rules.push(midFormat);
  rules.push(closeFormat);
  rules.push(openmidFormat);
  rules.push(midcloseFormat);
  rules.push(opencloseFormat);
  rules.push(noAvailFormat);
  rules.push(unknownTitleFormat);
  source.setConditionalFormatRules(rules);
  
}
