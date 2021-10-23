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


// ----- RGB to hex ----- //
// input: node index.js rgbhex 'rgb(255,255,255)'
// output: #ffffff
const colorTypeInput = process.argv[2];
const stringRgbInput = process.argv[3];

const INPUT_RGB_HEX = 'rgbhex';

if (colorTypeInput == INPUT_RGB_HEX) {
  let red;
  let green;
  let blue;

  // Function to separate rgb values from the string format 'rgb(255,255,255)'.
  const getRgbFromInput = (rgbString) => {
    // Removing "rgb(" and ")" from the string "rgb(v1, v2, v3)"
    let tempValue = rgbString.replace('rgb(', '');
    tempValue = tempValue.replace(')','');
    console.log(tempValue);
    const rgbVal = tempValue.split(',');
    red = rgbVal[0];
    green = rgbVal[1];
    blue = rgbVal[2];
    return({r:rgbVal[0], g:rgbVal[1], b:rgbVal[2]});
  };

  function componentToHex(c) {
    // Converting the input string value to number and change the base value to hex
    var hex = Number(c).toString(16);
    const val = (( hex.length == 1 ) ? "0" + hex : hex);
    return val;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  console.log(`RGB Input: ${stringRgbInput}`);
  getRgbFromInput(stringRgbInput);
  const stringHexOutput = rgbToHex(red, green, blue);
  console.log(`Hex Output: ${stringHexOutput}`);
}