const CONVERSION_STRING = process.argv[2];
const PARAM = process.argv[3];
let hexArr = [];
let rgbArr = [];
let rgbStr = '';
let hexStr = '';

if (CONVERSION_STRING === "rgbhex") {
  // forms an array of stringified numbers, up to 3 digits each
  rgbArr = PARAM.match(/\d{1,3}/g);
  // converts each stringified number into hex, and combines them with "#"
  hexStr = "#" + rgbArr
    .map(rgb => {
      const HEX_NUMBER = Number(rgb).toString(16);
      if (HEX_NUMBER.length < 2) {
        return `0${HEX_NUMBER}`
      }
      return HEX_NUMBER;
    })
    .join("");
  console.log(hexStr);
} else {
  // removes "#", and splits string into string array up to 2 characters each
  hexArr = PARAM
    .substring(1)
    .match(/.{1,2}/g);
  // convert each string from hexadecimal to decimal
  rgbArr = hexArr.map(hexNumStr => parseInt(hexNumStr, 16)); 
  rgbStr = `rgb(${rgbArr.join(',')})`;
  console.log(rgbStr);
}