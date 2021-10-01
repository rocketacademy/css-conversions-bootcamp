// HEX to RGB

// const hex = process.argv[2];

// const hexToRgb = (a) => {
//   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
//   const r = parseInt(result[1], 16);
//   const g = parseInt(result[2], 16);
//   const b = parseInt(result[3], 16);
//   const output = `rgd(${r},${g},${b})`;
//   return output;
// };

// const newRGB = hexToRgb(hex);
// console.log(newRGB);

// RGB to HEX

const rgb = process.argv[2];

const rgbArray = rgb.split("");

const r = parseInt(`${rgbArray[4]}${rgbArray[5]}${rgbArray[6]}`);
const g = parseInt(`${rgbArray[8]}${rgbArray[9]}${rgbArray[10]}`);
const b = parseInt(`${rgbArray[12]}${rgbArray[13]}${rgbArray[14]}`);

const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
const newHex =
  "#" +
  `${componentToHex(r)}` +
  `${componentToHex(g)}` +
  `${componentToHex(b)}`;

console.log(newHex);
