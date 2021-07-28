const CONVERSION_STRING = process.argv[2];
const PARAM = process.argv[3];
let rgbStr = '';
let hexStr = '';

const hexToRgb = (string) => {
  // removes "#", and splits string into string array up to 2 characters each
  const HEX_ARR = PARAM
    .substring(1)
    .match(/.{1,2}/g);
  // convert each string from hexadecimal to decimal
  const RGB_ARR = HEX_ARR.map(hexNumStr => parseInt(hexNumStr, 16)); 
  return `rgb(${RGB_ARR.join(',')})`;
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
  case "hexhsl":
  case "hexrgb":
  default:
    rgbStr = hexToRgb(PARAM);
    console.log(rgbStr);
    break;
}