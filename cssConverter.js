console.log("this is node process argv for css conversions!");
console.log(process.argv);

// import { add } from "./addition.js";
// import {
//   kilometersToMiles,
//   celciusToFahrenheit,
//   kilogramsToPounds,
// } from './addition.js';

//testing import all with star symbol via class


// convert hextToRgb
function hexToRgb (hex) {
  hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
             ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
  return hex}

// console.log(hexToRgb("#0033ff")) // [0, 51, 255]
// console.log(hexToRgb("#03f")) // [0, 51, 255]

// Add 2 numbers and return the result
function add (a, b) {
  return a + b;
};