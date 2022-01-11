console.log("this is node process argv for css conversions!");
console.log(process.argv);

// import { add } from "./addition.js";
// import {
//   kilometersToMiles,
//   celciusToFahrenheit,
//   kilogramsToPounds,
// } from './addition.js';

//testing import all with star symbol via class
import * as testMath from './testMath.js';
import { hexToRgb } from './cssConverter.js';

// console.log(hexToRgb("#0033ff")) // [0, 51, 255]
// console.log(hexToRgb("#03f")) // [0, 51, 255]

// hex to rgb conditional statement
if (process.argv[2] === "hex2rgb"){
  console.log("hex to RGB conversion detected");
  console.log(typeof(process.argv[3]))
  console.log(hexToRgb(process.argv[3]))
}

// // rgb to hex conditional statement
// else if (process.argv[2] === "rgb2hex"){
//   console.log("RGB to hex conversion detected");
//   rgbToHex(process.argv[3], process.argv[4], process.argv[5])
// }

else if (process.argv[2] === "math"){
  console.log("add function activated")
  console.log(testMath.add(process.argv[3], process.argv[4]))
}
