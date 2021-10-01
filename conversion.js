

/**
 * 
 * @param {*} hex // represents source value in hex format
 * @returns rgb equivalent string
 */
export function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * 
 * @param {*} c represents an element of the rgb source value
 * @returns the hex code equivalent for that element
 */
export function componentToHex(c) {
  if (c < 256) {
    return Math.abs(c).toString(16);
  }
  return 0;
}

/**
 * 
 * @param {*} rgb represents the source value in rgb format
 * @returns returns the string of the hex code equivalent
 */
export function rgbToHex(rgb) {
  const rgbStringEdit1 = rgb.substr(4);
  const rgbStringEdit2 = rgbStringEdit1.slice(0,-1);
  const rgbValues = rgbStringEdit2.split(",");
  let r = rgbValues[0];
  let g = rgbValues[1];
  let b = rgbValues[2];
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

/**
 * 
 * @param {*} rgb represents the source value in rgb format
 * @returns returns the string of the hsl code equivalent
 */
export function rgbToHSL(rgb) {
    const rgbStringEdit1 = rgb.substr(4);
    const rgbStringEdit2 = rgbStringEdit1.slice(0,-1);
    const rgbValues = rgbStringEdit2.split(",");
    let r = rgbValues[0];
    let g = rgbValues[1];
    let b = rgbValues[2];

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
  s = s*100;
  s = Math.round(s);
  l = l*100;
  l = Math.round(l);
  h = Math.round(360*h);
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}

/**
 * 
 * @param {*} hex represents the source value in hsl format
 * @returns returns the string of the hsl code equivalent
 */
export function hexToHSL(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
  s = s*100;
  s = Math.round(s);
  l = l*100;
  l = Math.round(l);
  h = Math.round(360*h);
  return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}
