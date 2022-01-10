
////////////////////////////////////////
//         Global Variables            //
//////////////////////////////////////

import{
  hexToRgb,
  getRgbFromInput,
  rgbToHex,
  rgbToHsl,
  hslToHex,
  hslToRgb
} from './functions.js'

let conversionMethod = process.argv[2];

////////////////////////////////////////////////////////////////////////////////

//node index.js hexToRgb '#ffffff'
if (conversionMethod == 'hexToRgb') {
  
  let hexInput = process.argv[3];
  let convertHexToRgb = hexToRgb(hexInput)
  console.log(convertHexToRgb);
}

//node index.js rgbToHex 'rgb(255,255,255)'
if (conversionMethod == 'rgbToHex') {

  let rgbInput = process.argv[3];
  let convertRGBtoHex = rgbToHex(rgbInput);
  console.log(convertRGBtoHex);
}

//node index.js rgbToHsl 'rgb(255,255,255)'
if (conversionMethod == 'rgbToHsl') {
  let rgbInput = process.argv[3];

  let convertRgbToHsl = rgbToHsl(rgbInput);
  console.log(convertRgbToHsl)
}

// node index.js hexToHsl '#ffffff'
if (conversionMethod == 'hexToHsl'){

  let hexInput = process.argv[3];

  let convertHexToRgb = hexToRgb(hexInput)
  let convertRgbToHsl = rgbToHsl(convertHexToRgb);
  
  console.log(convertRgbToHsl)

}

//node index.js hslToHex 'hsl(0,0,100)'
if (conversionMethod == 'hslToHex'){
let hslInput = process.argv[3];

const convertHslToHex = hslToHex(hslInput)
console.log(convertHslToHex)
}
//node index.js hslToRgb 'hsl(0,0,100)'
if (conversionMethod == 'hslToRgb'){
  let hslInput = process.argv[3];
 
  const converHslToRgb = hslToRgb(hslInput);
  console.log(converHslToRgb)
}