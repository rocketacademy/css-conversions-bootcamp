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

// // RGB to HEX

// const rgb = process.argv[2];

// const rgbArray = rgb.split("");

// const r = Number(`${rgbArray[4]}${rgbArray[5]}${rgbArray[6]}`);
// const g = Number(`${rgbArray[8]}${rgbArray[9]}${rgbArray[10]}`);
// const b = Number(`${rgbArray[12]}${rgbArray[13]}${rgbArray[14]}`);

// const componentToHex = (c) => {
//   var hex = c.toString(16);
//   return hex.length == 1 ? "0" + hex : hex;
// };
// const newHex =
//   "#" +
//   `${componentToHex(r)}` +
//   `${componentToHex(g)}` +
//   `${componentToHex(b)}`;

// console.log(newHex);

//RGB to HSL

const rgb = process.argv[2];

const rgbArray = rgb.split("");

const r = Number(`${rgbArray[4]}${rgbArray[5]}${rgbArray[6]}`);
const g = Number(`${rgbArray[8]}${rgbArray[9]}${rgbArray[10]}`);
const b = Number(`${rgbArray[12]}${rgbArray[13]}${rgbArray[14]}`);

function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  const H = Math.floor(h * 100);
  const S = Math.floor(s * 100);
  const L = Math.floor(l * 100);

  const output = `hsl(${H}%,${S}%,${L}%)`;
  return output;
}

const newHSL = rgbToHsl(r, g, b);

console.log(newHSL);
