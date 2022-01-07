function output_api(json) {
  ContentService.createTextOutput()
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.setContent(JSON.stringify(json));

  return output;
}

function output_sheet(add_value){
  const SSID = PropertiesService.getScriptProperties().getProperty("SSID");
  const SSNAME = PropertiesService.getScriptProperties().getProperty("SSNAME");
  const SHEET = SpreadsheetApp.openById(SSID).getSheetByName(SSNAME);

  message = "[Skip] Not found [Spread-Sheet ID] or [Spread-Sheet Name] or [value(String)].";
  if (SHEET != null || add_value != undefined) {
    SHEET.appendRow([new Date(), add_value]);
    message = "[COMPLETE]add data";
  }

  return message;
}
