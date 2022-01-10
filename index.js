const decToHex = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

function hexToRgb(hex) {
  console.log("converting hex to rgb...");
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(rgb) {
  console.log("converting rgb to hex...");
  rgb = rgb.slice(4, 15);
  const rgbPortions = rgb.split(",");
  let result = "#";

  for (let i = 0; i < rgbPortions.length; i += 1) {
    result += decToHex[Math.floor(rgbPortions[i] / 16)];
    result +=
      decToHex[(rgbPortions[i] / 16 - Math.floor(rgbPortions[i] / 16)) * 16];
  }

  return result;
}

if (process.argv[2] === "hexrgb") {
  const result = hexToRgb(process.argv[3]);
  console.log(result);
} else if (process.argv[2] === "rgbhex") {
  const result = rgbToHex(process.argv[3]);
  console.log(result);
}
