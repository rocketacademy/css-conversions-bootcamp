
function rgbToHex(r, g, b) {
  try {
    var rHex = parseInt(r).toString(16).padStart(2, '0');
    var gHex = parseInt(g).toString(16).padStart(2, '0');
    var bHex = parseInt(b).toString(16).padStart(2, '0');
  } catch (e) {
    return false;
  }
  if (rHex.length > 2 || gHex.length > 2 || bHex.length > 2) return false;
  return '#' + rHex + gHex + bHex;
}

function hexToRgb(hex) {
  const validResult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!validResult) {
    return false;
  }
  const result = {
    r: parseInt(validResult[1], 16),
    g: parseInt(validResult[2], 16),
    b: parseInt(validResult[3], 16),
  };
  return result;  
}

const conversionIndicator = process.argv[2];
const inputCode = process.argv[3];
if (conversionIndicator == 'rgbhex') {
  const rgbValues = /([\d]{2,3})\,([\d]{2,3})\,([\d]{2,3})/i.exec(inputCode);
  const hexResult = rgbToHex(rgbValues[1],rgbValues[2],rgbValues[3]);
  console.log('converting rgb to hex ...');
  console.log(hexResult);

} else if (conversionIndicator == 'hexrgb') {
  const rgbCode = hexToRgb(inputCode);
  const rgbResult = `rgb(${rgbCode.r},${rgbCode.g},${rgbCode.b})`
  // hexCode is process.argv[2], which is the user's input
  console.log('converting hex to rgb ...');
  console.log(rgbResult);
}




