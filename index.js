const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

if (process.argv[2] === 'hexrgb'){
const rgb = hexToRgb(process.argv[3])
console.log(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
} else if (process.argv[2] === 'rgbhex'){
const rgbArray = process.argv[3].match(/[0-9]+/g).map((x)=>parseInt(x,10))
console.log(rgbToHex(rgbArray[0], rgbArray[1], rgbArray[2]));
}