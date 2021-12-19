//console.log("hello world");

function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(rgb) {
  let result = /rgb(\((\d+),(\d+),(\d+)\))/.exec(rgb);
  return result
    ? "#" +
        (
          (parseInt(result[2]) << 16) +
          (parseInt(result[3]) << 8) +
          parseInt(result[4])
        ).toString(16)
    : null;
}

function hslToHex(hsl) {
  let result = /hsl(\((\d+),(\d+),(\d+)\))/.exec(hsl);
  result[4] /= 100;
  const a = (result[3] * Math.min(result[4], 1 - result[4])) / 100;
  const f = (n) => {
    const k = (n + result[2] / 30) % 12;
    const color = result[4] - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function hslToRgb(hsl) {
  let hexValue = hslToHex(hsl);
  return hexToRgb(hexValue);
}

let conversionMethod = process.argv[2];

if (conversionMethod == "hextorgb") {
  let hexInput = process.argv[3];
  let convertHexToRGB = hexToRgb(hexInput);
  console.log(convertHexToRGB);
}

if (conversionMethod == "rgbtohex") {
  let rgbInput = process.argv[3];

  let convertRGBtoHex = rgbToHex(rgbInput);
  console.log(convertRGBtoHex);
}

if (conversionMethod == "hsltohex") {
  let hslInput = process.argv[3];

  let convertHSLtoHex = hslToHex(hslInput);
  console.log(convertHSLtoHex);
}

if (conversionMethod == "hsltorgb") {
  let hslInput = process.argv[3];

  let convertHSLtoRgb = hslToRgb(hslInput);
  console.log(convertHSLtoRgb);
}
