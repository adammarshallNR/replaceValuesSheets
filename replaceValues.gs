function replaceValues() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange('F2:P300');
  var values = range.getValues();
  
  for (var i = 0; i < values.length; i++) {
    for (var j = 0; j < values[i].length; j++) {
      if (values[i][j] > 0) {
        values[i][j] = "✅";
      } else if (values[i][j] === 0) {
        values[i][j] = "❌";
      }
    }
  }
  
  range.setValues(values);
}
