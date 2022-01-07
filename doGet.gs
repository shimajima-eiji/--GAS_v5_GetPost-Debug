function doGet(e) {
  result = property(e.parameter.key, e.parameter.value);
  output_sheet(e);
  return output_api(result);
}

function doPost(e) {
  output_sheet(JSON.stringify(e));
}