
function getData() {
  const origin = 'https://vermin-network-bot.vercel.app/';
  const targetItemId = 'list'; //このlistのID
  const url = `${origin}/api/report/${targetItemId}`;
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  var reports = data.reports;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('シート1');
  sheet.clearContents(); // シート1のデータを全てクリア
  var lastRow = sheet.getLastRow();
  var headers = ["userId", "animal", "address", "latitude", "longitude", "damage", "createdAt"];
  if (lastRow == 0) {
    sheet.appendRow(headers);
    lastRow++;
  }

  for (var i = 0; i < reports.length; i++) {
    var row = reports[i];
    var rowData = [row.userId, row.animal, row.address , row.latitude, row.longitude, row.damage, row.createdAt];
    sheet.getRange( lastRow + 1, 1, 1, rowData.length).setValues([rowData]);
    lastRow++;
  }
}
