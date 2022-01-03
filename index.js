function hexToRgb(hex) {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  return result ? `rgb(${r},${g},${b})` : null;
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

function rgbToHsl(rgb) {
  let result = /rgb(\((\d+),(\d+),(\d+)\))/.exec(rgb);
  let r = (result[2] /= 255);
  let g = (result[3] /= 255);
  let b = (result[4] /= 255);

  // Find greatest and smallest channel values
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;
  // Calculate hue
  // No difference
  if (delta == 0) h = 0;
  // Red is max
  else if (cmax == r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax == g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;
  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);
  return `hsl(${h},${s},${l})`;
}

function hexToHsl(hex) {
  let rgbValue = hexToRgb(hex);
  return rgbToHsl(rgbValue);
}

let conversionMethod = process.argv[2];

if (conversionMethod == "rgbtohsl") {
  //sample command: node index.js rgbtohsl 'rgb(255,255,255)'
  let rgbInput = process.argv[3];
  let convertRgbtoHsl = rgbToHsl(rgbInput);
  console.log(convertRgbtoHsl);
}

if (conversionMethod == "rgbtohex") {
  //sample command: node index.js rgbtohex 'rgb(255,255,255)'
  let rgbInput = process.argv[3];
  let convertRGBtoHex = rgbToHex(rgbInput);
  console.log(convertRGBtoHex);
}

if (conversionMethod == "hextorgb") {
  //sample command: node index.js hextorgb '#ffffff'
  let hexInput = process.argv[3];
  let convertHexToRGB = hexToRgb(hexInput);
  console.log(convertHexToRGB);
}

if (conversionMethod == "hextohsl") {
  //sample command: node index.js hextohsl '#ffffff'
  let hexInput = process.argv[3];
  let convertHextoHsl = hexToHsl(hexInput);
  console.log(convertHextoHsl);
}

if (conversionMethod == "hsltohex") {
  //sample command: node index.js hsltohex 'hsl(0,0,100)'
  let hslInput = process.argv[3];
  let convertHSLtoHex = hslToHex(hslInput);
  console.log(convertHSLtoHex);
}

if (conversionMethod == "hsltorgb") {
  //sample command: node index.js hsltorgb 'hsl(0,0,100)'
  let hslInput = process.argv[3];
  let convertHSLtoRgb = hslToRgb(hslInput);
  console.log(convertHSLtoRgb);
}
