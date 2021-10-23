console.log('hello world');

// ===== ===== ===== ===== ===== //
// ===== Conversion Functions ===== //
// ===== ===== ===== ===== ===== //

// ----- hex to RGB ----- //
function convertHexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// ----- RGB to hex ----- //
  function componentToHex(c) {
    // Converting the input string value to number and change the base value to hex
    var hex = Number(c).toString(16);
    const val = (( hex.length == 1 ) ? "0" + hex : hex);
    return val;
  }
  function convertRgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

// ----- RGB to HSL ----- //
function convertRgbToHsl(r, g, b)
{
  const primeR = r / 255;
  const primeG = g / 255;
  const primeB = b / 255;
  const chromeMax = Math.max(primeR, primeG, primeB);
  const chromeMin = Math.min(primeR, primeG, primeB);
  const chromeDiff = chromeMax - chromeMin;

  let hue = 0, saturation = 0, lightness = 0;
  // Calculate HSL
  lightness = (chromeMax + chromeMin) / 2;
  if(chromeDiff !== 0)
  {
    // Taken from: https://stackoverflow.com/questions/39118528/rgb-to-hsl-conversion
    saturation = chromeDiff / ((1- Math.abs((2 * lightness) - 1 )));
    switch(chromeMax)
    {
      case primeR: {
        var segment = (primeG - primeB) / chromeDiff;
        var shift   = 0 / 60;       // R° / (360° / hex sides)
        if (segment < 0) {          // hue > 180, full rotation
          shift = 360 / 60;         // R° / (360° / hex sides)
        }
        hue = segment + shift;
        break;
      }
      case primeG:{
        var segment = (primeB - primeR) / chromeDiff;
        var shift   = 120 / 60;     // G° / (360° / hex sides)
        hue = segment + shift;
        break;
      }
      case primeB:{
        var segment = (primeR - primeG) / chromeDiff;
        var shift   = 240 / 60;     // B° / (360° / hex sides)
        hue = segment + shift;
        break;
      }
      default:
        break;
    }
    hue = hue * 60;
  }
  saturation *= 100;
  lightness *= 100;
  return ({H: hue, S: saturation, L: lightness });
}

// ----- HSL to RGB ----- //
const hslToRGB = (h, s, l) => {

  // https://en.wikipedia.org/wiki/HSL_and_HSV#Hue_and_chroma
  const chroma = ( 1- Math.abs((2 * l) - 1)) * s;
  const hue = h / 60;
  const intermediateValX = chroma * ( 1- Math.abs((hue % 2) - 1));
  let r = 0, g = 0, b = 0;
  if(0 <= hue && hue <= 1)
  {
    r = chroma;
    g = intermediateValX;
    b = 0;
  }
  else if(1 <= hue && hue <= 2) {
    r =intermediateValX;
    g = chroma;
    b = 0;
  }
  else if(2 <= hue && hue <= 3){
    r = 0;
    g = chroma;
    b = intermediateValX;
  }
  else if(3 <= hue && hue <= 4){
    r = 0;
    g = intermediateValX;
    b = chroma;
  }
  else if(4 <= hue && hue <= 5){
    r =intermediateValX;
    g = 0;
    b = chroma;
  }
  else if(5 <= hue && hue <= 6){
    r =chroma;
    g = 0;
    b = intermediateValX;
  }
  else{}

  const match = l - (chroma / 2);
  r = ( r + match) * 255;
  g = ( g + match) * 255;
  b = ( b + match) * 255;
  return ({R:r, G:g, B:b});
}

// ===== ===== ===== ===== ===== //
// ===== Helper Functions ===== //
// ===== ===== ===== ===== ===== //

// Function to separate rgb values from the string format 'rgb(255,255,255)'.
const getRgbFromInput = (rgbString) => {
  // Removing "rgb(" and ")" from the string "rgb(v1, v2, v3)"
  let tempValue = rgbString.replace('rgb(', '');
  tempValue = tempValue.replace(')','');
  console.log(tempValue);
  const rgbVal = tempValue.split(',');
  return({r:rgbVal[0], g:rgbVal[1], b:rgbVal[2]});
};

// Function to separate hsl values from string 'hsl(123,100,50)
const getHSLValuesFromInput = (hslString) => {
  let tempVal = hslString.replace('hsl(', '');
  tempVal = tempVal.replace(')','');
  console.log(tempVal);
  const hslVal = tempVal.split(',');
  return({h:hslVal[0], s:hslVal[1], l:hslVal[2]});
}

// Function to streamline input-output conditions
const doSpecifiedConversion = ( conversionType, inputColor ) => {
  console.log(`doSpecifiedConversion() running...`);
  console.log(`input color is ${inputColor}`);

  if  ( inputColor === undefined ) {
    console.log('error');
    return false;
  }

  if ( conversionType === 'rgbhex')
  {
    const rgbInput = getRgbFromInput(inputColor);
    console.log(`RGB Input:`);
    console.log(rgbInput);
    console.log(`Hex Output: ${convertRgbToHex(rgbInput.r, rgbInput.g, rgbInput.b)}`);
  }

  else if ( conversionType === 'hexrgb' )
  {
    console.log(`Hex Input: ${inputColor}
    RGB Output:`);
    console.log(convertHexToRgb(inputColor));
  }

  else if ( conversionType === 'rgbhsl')
  {
    const rgbInput = getRgbFromInput(inputColor);
    const hslOutput = convertRgbToHsl(rgbInput.r, rgbInput.g, rgbInput.b);
    console.log(`RGB Input: rgb(${rgbInput.r}, ${rgbInput.g}, ${rgbInput.b}
    HSL Output: ${hslOutput.H}, ${hslOutput.S}%, ${hslOutput.L}%`);
  }
  else if( conversionType === 'hslrgb')
  {
    hslToRGB(inputColor);
  }
};
// Check for conversion type
const conversionType = process.argv[2].toLowerCase();
console.log(`argv[2]: ${conversionType}`);

// Get color input
let inputColor = process.argv[3];

doSpecifiedConversion(conversionType, inputColor);