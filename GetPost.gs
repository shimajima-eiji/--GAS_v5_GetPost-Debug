function __parse(value) {
  try {
    value = JSON.parse(JSON.stringify(value));

  // catch時は受け取ったそのままを発信するため、ここでは何もしない
  } catch(error) {
  }
  return value
}

function doGet(e) {
  result = property(e.parameter.key, e.parameter.value);
  output_sheet(__parse(e));
  return output_api(result);
}

function doPost(e) {
  output_sheet(__parse(e));
}