const CONVERSION_STRING = process.argv[2];
const PARAM = process.argv[3];
let rgbStr = '';
let hexStr = '';
let hslStr = '';

const hexToRgb = (string) => {
  // removes "#", and splits string into string array up to 2 characters each
  const HEX_ARR = PARAM
    .substring(1)
    .match(/.{1,2}/g);
  // convert each string from hexadecimal to decimal
  const RGB_ARR = HEX_ARR.map(hexNumStr => parseInt(hexNumStr, 16)); 
  return `rgb(${RGB_ARR.join(',')})`;
}

const rgbToHsl = (string) => {
  // forms an array of stringified numbers, up to 3 digits each
  const RGB_ARR = string.match(/\d{1,3}/g);
  // make r, g, and b fractions of 1
  const RGB_FRACTION_ARR = RGB_ARR.map(rgbStr => Number(rgbStr) / 255);
  // find greatest and smallest channel values
  const CMIN = Math.min(...RGB_FRACTION_ARR),
        CMAX = Math.max(...RGB_FRACTION_ARR),
        DELTA = CMIN - CMAX;
  let h = 0,
      s = 0,
      l = 0;
  
  // Calculate hue
  // No difference
  if (DELTA == 0) {
    h = 0;
  }
  // Red is max
  else if (CMAX == RGB_FRACTION_ARR[0]) {
    h = ((RGB_FRACTION_ARR[1] - RGB_FRACTION_ARR[2]) / DELTA) % 6;
  }
  // Green is max
  else if (CMAX == RGB_FRACTION_ARR[1]) {
    h = (RGB_FRACTION_ARR[2] - RGB_FRACTION_ARR[0]) / DELTA + 2;
  }
  // Blue is max
  else {
     h = (RGB_FRACTION_ARR[0] - RGB_FRACTION_ARR[1]) / DELTA + 4;
  }
  
  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) {
    h += 360;
  }

  // Calculate lightness
  l = (CMAX + CMIN) / 2;

  // Calculate saturation
  if (DELTA !== 0) {
    s = DELTA / (1 - Math.abs(2 * l - 1));
  }

  // Multiply l and s by 100
  s = Math.floor(Math.abs(s * 100));
  l = Math.floor(Math.abs(l * 100));
      
  return `hsl(${h},${s}%,${l}%)`;
}

const rgbToHex = (string) => {
  // forms an array of stringified numbers, up to 3 digits each
  const RGB_ARR = string.match(/\d{1,3}/g);
  // converts each stringified number into hex, and combines them with "#"
  const HEX_STR = "#" + RGB_ARR
    .map(rgb => {
      const HEX_NUMBER = Number(rgb).toString(16);
      if (HEX_NUMBER.length < 2) {
        return `0${HEX_NUMBER}`
      }
      return HEX_NUMBER;
    })
    .join("");
  return HEX_STR;
}

switch(CONVERSION_STRING) {
  case "rgbhex":
    hexStr = rgbToHex(PARAM);
    console.log(hexStr);
    break;
  case "rgbhsl":
    hslStr = rgbToHsl(PARAM);
    console.log(hslStr);
    break;
  case "hexhsl":
  case "hexrgb":
  default:
    rgbStr = hexToRgb(PARAM);
    console.log(rgbStr);
    break;
}