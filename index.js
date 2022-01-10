import { hexToRgb, rgbToHex } from './cssColorConversion.js';

if (process.argv[2] === 'rgbhex') {
  // rgb(255,255,255) -> 255,255,255 -> ['255','255','255'] -> [255,255,255]
  const rgb = process.argv[3].substring(4, process.argv[3].length - 1).split(',').map((item) => parseInt(item, 10));

  console.log(rgbToHex(...rgb));
} else {
  const rgb = hexToRgb(process.argv[2]);

  console.log(`rgb(${rgb.r},${rgb.g},${rgb.b})`);
}
