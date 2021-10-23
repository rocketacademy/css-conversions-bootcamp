// ===== BASE ===== //
// ----- hex to RGB ----- //

// input: node index.js '#ffffff'
// output: rgb(255,255,255)

const hexInput = process.argv [2];

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const rgbOutput = hexToRgb(hexInput);
console.log(`Input in hex: ${hexInput}
Output in rgb:`)
console.log(rgbOutput);


