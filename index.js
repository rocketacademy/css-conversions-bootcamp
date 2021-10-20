const convName = process.argv[2]
const hexValues = process.argv[3];
const rgbValues = process.argv[3];
let printResult;
// console.log(convName[0])
// console.log(hexValues)
if (convName === 'hexToRGB') {
  
  if (hexValues[0] === '#') {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexValues);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);    
    printResult = `rgb(${r},${g},${b})`
  } else { 
   console.log('Usage: node index.js hexToRGB (\'\#values\')')
  }
};

if (convName === 'rgbToHex') {
let result = /rgb(\((\d+),(\d+),(\d+)\))/.exec(rgbValues);
let hexVal = (parseInt(result[2]) << 16) + (parseInt(result[3]) << 8) + parseInt(result[4]);
printResult = `#${hexVal.toString(16)}` 
}

console.log(printResult);