// to use, input: node index.js [colorSource] [colorTarget]
// eg. node index.js '#ffffff' hsl
import * as conversions from './conversions.js';

const CONVERSION_STRING = process.argv[3];
const PARAM = process.argv[2];
let rgbStr = '';
let hexStr = '';
let hslStr = '';
let sourceType = '';

if (
  PARAM.indexOf('rgb(') === 0 
  && PARAM.indexOf(')') === PARAM.length - 1
  && PARAM.match(/\d{1,3}/g).length === 3
) {
  sourceType = 'rgb';
} else if (
  PARAM.indexOf('hsl(') === 0 
  && PARAM.match(/\d{1,3}/g).length === 3
  && PARAM.indexOf(')') === PARAM.length - 1
) {
  sourceType = 'hsl';
} else if (
  PARAM.indexOf('#') === 0 
  && PARAM.length === 7
) {
  sourceType = 'hex';
}

if (sourceType === CONVERSION_STRING) {
  console.log(PARAM);
}
else if (sourceType === '') {
  console.log("Please enter a valid color type as the source.")
} 
else {
  switch(CONVERSION_STRING) {
    // convert to hex
    case "hex":
      if (sourceType === "rgb") {
        hexStr = conversions.rgbToHex(PARAM);
        console.log(hexStr);
      }
      // hsl 
      else {
        rgbStr = conversions.hslToRgb(PARAM);
        hexStr = conversions.rgbToHex(rgbStr);
        console.log(hexStr);
      }
      break;
    // convert to rgb
    case "rgb":
      if (sourceType === "hex") {
        rgbStr = conversions.hexToRgb(PARAM);
        console.log(rgbStr);
      }
      // hsl
      else {
        rgbStr = conversions.hslToRgb(PARAM);
        console.log(rgbStr);
      }
      break;
    // convert to hsl
    case "hsl":
      if (sourceType === "rgb") {
        hslStr = conversions.rgbToHsl(PARAM);
        console.log(hslStr);
      }
      // hex 
      else {
        rgbStr = conversions.hexToRgb(PARAM);
        hslStr = conversions.rgbToHsl(rgbStr);
        console.log(hslStr);
      }
      break;
    default:
      console.log("Please enter a valid color type as the target.");
      break;
  }
}