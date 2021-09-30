export const hexToRgb = (string) => {
  // removes "#", and splits string into string array up to 2 characters each
  const HEX_ARR = string
    .substring(1)
    .match(/.{1,2}/g);
  // convert each string from hexadecimal to decimal
  const RGB_ARR = HEX_ARR.map(hexNumStr => parseInt(hexNumStr, 16)); 
  return `rgb(${RGB_ARR.join(',')})`;
}

// formula taken from: https://css-tricks.com/converting-color-spaces-in-javascript/
export const rgbToHsl = (string) => {
  // forms an array of stringified numbers, up to 3 digits each
  const RGB_ARR = string.match(/\d{1,3}/g);
  // make r, g, and b fractions of 1
  const RGB_FRACTION_ARR = RGB_ARR.map(rgbStr => Number(rgbStr) / 255);
  // find greatest and smallest channel values
  const CMIN = Math.min(...RGB_FRACTION_ARR),
        CMAX = Math.max(...RGB_FRACTION_ARR),
        DELTA = CMIN - CMAX;
  let h = 0,
      s = 0,
      l = 0;
  
  // Calculate hue
  // No difference
  if (DELTA == 0) {
    h = 0;
  }
  // Red is max
  else if (CMAX == RGB_FRACTION_ARR[0]) {
    h = ((RGB_FRACTION_ARR[1] - RGB_FRACTION_ARR[2]) / DELTA) % 6;
  }
  // Green is max
  else if (CMAX == RGB_FRACTION_ARR[1]) {
    h = (RGB_FRACTION_ARR[2] - RGB_FRACTION_ARR[0]) / DELTA + 2;
  }
  // Blue is max
  else {
     h = (RGB_FRACTION_ARR[0] - RGB_FRACTION_ARR[1]) / DELTA + 4;
  }
  
  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) {
    h += 360;
  }

  // Calculate lightness
  l = (CMAX + CMIN) / 2;

  // Calculate saturation
  if (DELTA !== 0) {
    s = DELTA / (1 - Math.abs(2 * l - 1));
  }

  // Multiply l and s by 100
  s = Math.round(Math.abs(s * 100));
  l = Math.round(Math.abs(l * 100));
      
  return `hsl(${h},${s}%,${l}%)`;
}

// formula taken from: https://css-tricks.com/converting-color-spaces-in-javascript/
export const hslToRgb = (string) => {
  // forms an array of stringified numbers, up to 3 digits each
  // then convert each stringified number to proper number
  const HSL_NUMBER_ARR = string
    .match(/\d{1,3}/g)
    .map(numString => Number(numString));
  // turn s and l into fractions of 1
  let s = HSL_NUMBER_ARR[1] / 100;
  let l = HSL_NUMBER_ARR[2] / 100;
  let h = HSL_NUMBER_ARR[0];

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c / 2,
      r = 0,
      g = 0,
      b = 0;
  
  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `rgb(${r},${g},${b})`;
}

export const rgbToHex = (string) => {
  // forms an array of stringified numbers, up to 3 digits each
  const RGB_ARR = string.match(/\d{1,3}/g);
  // converts each stringified number into hex, and combines them with "#"
  const HEX_STR = "#" + RGB_ARR
    .map(rgb => {
      const HEX_NUMBER = Number(rgb).toString(16);
      if (HEX_NUMBER.length < 2) {
        return `0${HEX_NUMBER}`
      }
      return HEX_NUMBER;
    })
    .join("");
  return HEX_STR;
}