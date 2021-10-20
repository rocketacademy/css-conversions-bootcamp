let r = process.argv[2];
let g = process.argv[3];
let b = process.argv[4];

function componentToHex(c) {
  var hex = c.toString(16);
  console.log('hex', hex);
  return hex.length == 1 ? "0" + hex : hex;
};
      
function rgbToHex(r, g, b) {
  return ("#" + componentToHex(Number(r)) + componentToHex(Number(g)) + componentToHex(Number(b)));    
};

console.log(rgbToHex(r, g, b));
