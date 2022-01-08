/**
 * Convert hex to RGB.
 * @param {string} hex Hex value
 * @returns RGB value of hex input
 */
function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Convert RGB to hex.
 * @param {number} r R value from RGB
 * @param {number} g G value from RGB
 * @param {number} b B value from RGB
 * @returns Hex value of RGB input
 */
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

if (process.argv[2] === 'rgbhex') {
  // rgb(255,255,255) -> 255,255,255 -> ['255','255','255'] -> [255,255,255]
  const rgb = process.argv[3].substring(4, process.argv[3].length - 1).split(',').map((item) => {
      return parseInt(item, 10);
  });
  console.log(rgbToHex(...rgb));
} else {
  const rgb = hexToRgb(process.argv[2])
  console.log(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
}
