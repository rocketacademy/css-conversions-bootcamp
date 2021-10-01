// HEX to RGB

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
