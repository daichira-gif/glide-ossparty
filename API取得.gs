
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

//ボツコード
function getDataAndWriteToSheet() {
  var url = 'https://vermin-network-bot.vercel.app/api/report/list';
  var response = UrlFetchApp.fetch(url);
  var data = JSON.parse(response.getContentText());
  var reports = data.reports;
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("シート1");
  var range = sheet.getRange(2, 1, sheet.getLastRow()-1, 5);
  var existingData = range.getValues().map(function(row) {
    return {
      animal: row[0],
      address: row[1],
      latitude: row[2],
      longitude: row[3],
      createdAt: row[4]
    };
  });
  var newData = [];
  if (existingData.length === 0) {
    newData = reports;
  } else {
    var latestDate = new Date(existingData[0].createdAt);
    for (var i = 0; i < reports.length; i++) {
      var reportDate = new Date(reports[i].createdAt);
      if (reportDate > latestDate) {
        newData.push(reports[i]);
      }
    }
  }
  if (newData.length === 0) {
    Logger.log("No new reports.");
    return;
  }
  var newValues = newData.map(function(row) {
    return [row.animal, row.latitude, row.longitude, row.createdAt];
  });
  sheet.getRange(sheet.getLastRow() + 1, 1, newValues.length, 5).setValues(newValues);
  Logger.log("Added " + newValues.length + " new report(s).");
}

