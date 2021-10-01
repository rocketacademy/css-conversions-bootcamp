// ##### HEX to RGB ##### //
// ######################//

const hex = process.argv[2];

const hexToRgb = (a) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  const output = `rgd(${r},${g},${b})`;
  return output;
};

const newRGB = hexToRgb(hex);
console.log(newRGB);

// ##### RGB to HEX ##### //
// ######################//

const rgb = process.argv[2];

// split up input of rgb(255,255,255) into R G B
const removeRGB = rgb.slice(4);
const rgbArray = removeRGB.split(",");

const r = Number(`${rgbArray[0]}`);
const g = Number(`${rgbArray[1]}`);
const b = parseInt(`${rgbArray[2]}`);

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

// ##### RGB to HSL #####//
// ######################//

const rgb = process.argv[2];

// split up input of rgb(255,255,255) into R G B
const removeRGB = rgb.slice(4);

const rgbArray = removeRGB.split(",");

const r = Number(`${rgbArray[0]}`);
const g = Number(`${rgbArray[1]}`);
const b = parseInt(`${rgbArray[2]}`);

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
  const H = Math.floor(h * 360);
  const S = Math.floor(s * 100);
  const L = Math.floor(l * 100);

  const output = `hsl(${H},${S}%,${L}%)`;
  return output;
}

const newHSL = rgbToHsl(r, g, b);

console.log(newHSL);

// ##### HSL to RGB #####//
// ######################//

const hsl = process.argv[2];

// split input into H S L
const removeHSL = hsl.slice(4);
const hslArray = removeHSL.split(",");

const h = parseFloat(`${hslArray[0]}`) / 360;
const s = parseFloat(`${hslArray[1]}`) / 100;
const l = parseFloat(`${hslArray[2]}`) / 100;

function hslToRgb(h, s, l) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = Math.round(hue2rgb(p, q, h + 1 / 3) * 255);
    g = Math.round(hue2rgb(p, q, h) * 255);
    b = Math.round(hue2rgb(p, q, h - 1 / 3) * 255);
  }

  const myoutput = `rgb(${r},${g},${b})`;
  return myoutput;
}

const newRGB = hslToRgb(h, s, l);

console.log(newRGB);

// ############# REST More Comfortable ################ //
// will combine 2 functions together to allow double conversions.

// for auto detect will use a charAt() function to recognize the first letter of input example:

const input = "rgb(255,255,255)";

const recognize = () => {
  if (input.charAt(0) === "r") {
    //run code to change from RGB to HSL and RGB to HEX
  }
  if (input.charAt(0) === "h") {
    // run code to change from HSL to RBG and HSL to HEX
  }
  if (input.charAt(0) === "#") {
    // run code to change from HEX to RBG and HEX to HSL
  }
};
