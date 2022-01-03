import {
  hexToHsl,
  hexToRgb,
  hslToHex,
  hslToRgb,
  rgbToHex,
  rgbToHsl,
} from './colorConversion.js'

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
