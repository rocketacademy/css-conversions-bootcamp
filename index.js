const CONVERSION_STRING = process.argv[2];
const PARAM = process.argv[3];
let hexArr = [];
let rgbArr = [];
let rgbStr = '';
let hexStr = '';

if (CONVERSION_STRING === "rgbhex") {
  rgbArr = PARAM.match(/\d{1,3}/g);
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
  hexArr = PARAM
    .substring(1)
    .match(/.{1,2}/g);
  rgbArr = hexArr.map(hexNumStr => parseInt(hexNumStr, 16)); 
  rgbStr = `rgb(${rgbArr.join(',')})`;
  console.log(rgbStr);
}