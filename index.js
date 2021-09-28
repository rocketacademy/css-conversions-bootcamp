const colHex = process.argv[2];
const RGBArray = [];
for (let i = 1; i < colHex.length; i += 2) {
  const oneRGB = parseInt(colHex.slice(i, i+2), 16);
  RGBArray.push(oneRGB);
}
const colRGB = `rgb(${RGBArray[0]},${RGBArray[1]},${RGBArray[2]})`
console.log(colRGB);


