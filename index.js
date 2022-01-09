
////////////////////////////////////////
//         Helper Function            //
//////////////////////////////////////

let conversionMethod = process.argv[2];
let red;
let green;
let blue;

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  result = `rgb(${parseInt(result[1],16)},${parseInt(result[2],16)},${parseInt(result[1],16)})`
  return result;
}

const getRgbFromInput = (rgbString) => {
 
    // Removing "rgb(" and ")" from the string "rgb(v1, v2, v3)"
    let tempValue = rgbString.replace('rgb(', '');
    tempValue = tempValue.replace(')','');
    // console.log(tempValue);
    const rgbVal = tempValue.split(',');
    red = rgbVal[0];
    green = rgbVal[1];
    blue = rgbVal[2];
    return({r:rgbVal[0], g:rgbVal[1], b:rgbVal[2]});
  };

const componentToHex=(c) => {
    // Converting the input string value to number and change the base value to hex
    var hex = Number(c).toString(16);
    const val = (( hex.length == 1 ) ? "0" + hex : hex);
    return val;
  }

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

const rgbToHsl = (r,g,b) => {
  let v=Math.max(r,g,b), c=v-Math.min(r,g,b), f=(1-Math.abs(v+v-c-1)); 
  let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); 
  const result = [60*(h<0?h+6:h), f ? c/f : 0, (v+v-c)/2];
  return (`hsl(${result[0]},${result[1]}%,${result[2]}%)`)
}

const hslToHex = (hsl) => {
 let result = /hsl(\((\d+),(\d+),(\d+)\))/.exec(hsl);
  result[4] /= 100;
  const a = (result[3] * Math.min(result[4], 1 - result[4])) / 100;
  const f = (n) => {
  const k = (n + result[2] / 30) % 12;
  const color = result[4] - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const hslToRgb = (hsl) =>{
   let hexValue = hslToHex(hsl);
   return hexToRgb(hexValue)
};
////////////////////////////////////////////////////////////////////////////////

//node index.js hexToRgb '#ffffff'
if (conversionMethod == 'hexToRgb') {
  
  let hexInput = process.argv[3];
  let convertHexToRgb = hexToRgb(hexInput)
  console.log(convertHexToRgb);
}

//node index.js rgbToHex 'rgb(255,255,255)'
if (conversionMethod == 'rgbToHex') {
  let stringRgbInput = process.argv[3];

  getRgbFromInput(stringRgbInput);
  const convertRgbToHex = rgbToHex(red, green, blue);
  console.log(convertRgbToHex);
}

//node index.js rgbToHsl 'rgb(255,255,255)'
if (conversionMethod == 'rgbToHsl') {
  let stringRgbInput = process.argv[3];

  getRgbFromInput(stringRgbInput);
  let convertRgbToHsl = rgbToHsl(red, green, blue);
  console.log(convertRgbToHsl)
}
// node index.js hexToHsl '#ffffff'
if (conversionMethod == 'hexToHsl'){

  let hexInput = process.argv[3];

  let rgbValue = hexToRgb(hexInput);
  getRgbFromInput(rgbValue);
  let convertRgbToHsl = rgbToHsl(red, green, blue);
  
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