// let conversionType = process.argv[2];
let sourceValue = process.argv[2];

import { rgbToHex } from "./conversion.js";
import { hexToRgb } from "./conversion.js";
import { hexToHSL } from "./conversion.js";
import { rgbToHSL } from "./conversion.js";


if (sourceValue.startsWith('#')){
  console.log(hexToHSL(sourceValue));
  console.log(hexToRgb(sourceValue));
} else {
  console.log(rgbToHSL(sourceValue));
  console.log(rgbToHex(sourceValue));
}

