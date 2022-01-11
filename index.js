function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const parseRGBInput = function (RGBString) {
  if (RGBString.startsWith("rgb(") == true) {
    let valuesString = RGBString.substring(
      RGBString.indexOf("(") + 1,
      RGBString.indexOf(")")
    );
    let convertedValues = [];
    for (let i = 0; i < 3; i += 1) {
      let RGBComponent = valuesString.substring(0, valuesString.indexOf(","));
      convertedValues.push(parseInt(RGBComponent));
      valuesString = valuesString.substring(valuesString.indexOf(",") + 1);

      if (i == 2) {
        convertedValues[2] = parseInt(valuesString);
      }
    }
    return valuesString;
  } else {
    console.log("not a valid RGB input. please try again.");
  }
};

function rgbToHex(RGBValuesArr) {
  return (
    "#" +
    componentToHex(RGBValuesArr[0]) +
    componentToHex(RGBValuesArr[1]) +
    componentToHex(RGBValuesArr[2])
  );
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

let result;
if (process.argv[2] == "rgbhex") {
  const RGBValues = parseRGBInput(process.argv[3]);
  result = rgbToHex(RGBValues);
} else if (process.argv[2] == "hexrgb") {
  result = hexToRgb(process.argv[3]);
}
console.log(result);
