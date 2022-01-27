const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

const componentToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const hexToHsl = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  r /= 255, g /= 255, b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if(max == min){
    h = s = 0;
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

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

const color = process.argv[2]

if (color.startsWith('#')){
  const rgb = hexToRgb(color)
  console.log(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
  console.log(hexToHsl(color))
} else if (color.startsWith('rgb')){
  const rbgArray = color.match(/[0-9]+/g).map((x)=>parseInt(x,10))
  const hex = rgbToHex(rbgArray[0], rbgArray[1], rbgArray[2])
  console.log(hex);
  console.log(hexToHsl(hex))
} else if (color.startsWith('hsl')){
  const hslArray = color.match(/[0-9]+/g).map((x)=>parseInt(x,10))
  const hex = hslToHex(hslArray[0],hslArray[1],hslArray[2])
  console.log(hex)
  const rgb = hexToRgb(hex)
  console.log(`rgb(${rgb.r},${rgb.g},${rgb.b})`)
}