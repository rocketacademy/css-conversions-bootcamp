// converts input from hex to RGB
const hexToRGB = (input) => {
  let colRGB = 'rgb('
  for (let i = 1; i < input.length; i += 2) {
    // slice into xx | xx | xx , convert to base 10
    colRGB += parseInt(input.slice(i, i+2), 16);
    
    // add comma, unless at last set add parenthesis
    if (i === input.length - 2) {
      colRGB += ')'
    } else {
      colRGB += ','
    }
  }
  return colRGB;
}

// converts input from RGB to hex
const RGBToHex = (input) => {
  // get values in parenthesis, store as array [xx, xx, xx]
  const colRGB = input.slice(4, -1).split(',')
  let colHex = '#';
  for (let i = 0; i < colRGB.length; i += 1) {
    // convert to base 16, pad '0' at start for single digit outcomes
    let oneHex = Number(colRGB[i]).toString(16);
    oneHex = oneHex.padStart(2,0);
    colHex += oneHex;
  }
  return colHex;
}

const userInput = process.argv[2]
if (userInput[0] === '#' && userInput.length === 7) {
  console.log('Hex to RGB:', userInput, '->', hexToRGB(userInput))
} else if (userInput.slice(0, 4) === 'rgb(' && userInput.slice(-1) === ')') {
  console.log('RGB to Hex:', userInput, '->', RGBToHex(userInput));
} else {
  console.log('Invalid input')
}