function doGet_debug() {
  key = "test";
  Logger.log(PropertiesService.getScriptProperties().getProperty(key));
}

function doGet(e) {
  result = property(e.parameter.key, e.parameter.value);
  output_sheet(e);
  return output_api(result);
}