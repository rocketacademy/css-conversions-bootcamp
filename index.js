if (process.argv[2] === 'hexrgb') {
  const colHex = process.argv[3];
  let colRGB = 'rgb('
  for (let i = 1; i < colHex.length; i += 2) {
    colRGB += parseInt(colHex.slice(i, i+2), 16);
    if (i === colHex.length - 2) {
      colRGB += ')'
    } else {
      colRGB += ','
    }
  }
  console.log(colRGB);
} else if (process.argv[2] === 'rgbhex') {
  const colRGB = process.argv[3].slice(4, -1).split(',');
  let colHex = '#';
  for (let i = 0; i < colRGB.length; i += 1) {
    const oneHex = Number(colRGB[i]).toString(16);
    colHex += oneHex;
  }
  console.log(colHex);
}