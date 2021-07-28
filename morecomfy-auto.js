// https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
// hex <--> rgb <--> hsl
// node morecomfy-auto.js <colorFormat>

// test cases
// node morecomfy-auto.js 'rgb(213,34,67)' 
// node morecomfy-auto.js 'hsl(349,72.5,48.4)'
// node morecomfy-auto.js '#d52243'

const input = process.argv[2];
const indicator = input.charAt(0);
let firstOutput; let secondOutput;


// FROM HEX TO RGB
const hexToRGB = (hex) => {
  const hexInput = hex.toString().trim().slice(1).toLowerCase();
  //ffffff
  const hexadecimal = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

  let output = 'rgb(';

  for(let i=0; i<=hexInput.length-2; i+=2){
    const firstDigit = hexadecimal.indexOf(hexInput.charAt(i)) * 16;
    const secondDigit = hexadecimal.indexOf(hexInput.charAt(i+1));
    const color = firstDigit+secondDigit;

    if (i !==hexInput.length-2){
      output = output.concat(color,',');
    } else {
      output = output.concat(color,')');
    }
  }

  return output;
}

// FROM RGB TO HSL
const RGBtoHSL = (rgb) => {
  const rgbInput = rgb.slice(4); //remove 'rgb(', leaving the commas and end parentheses as the markers
  const inputArray = [];
  let colorHexCode = '#"';
  let colorRGBCode = new String();

  for(let i=0; i<rgbInput.length; i+=1){
    if(rgbInput[i] == ',' || rgbInput[i] == ')'){
      inputArray.push(Number(colorRGBCode));
      colorRGBCode = '';
    } else {
      colorRGBCode = colorRGBCode.concat(rgbInput[i]);
    }
  }

  const rgbArray = inputArray.map(x => x/255 );
  const sortedArray = [...rgbArray].sort((a,b) =>{ return a-b });
  const maxRGB = sortedArray[sortedArray.length-1];
  const minRGB = sortedArray[0];
  const diff = maxRGB - minRGB;
  const luminance = parseFloat((maxRGB + minRGB) / 2 ).toFixed(3);
  let saturation = new Number();
  let hueValue = new Number();
  let HSL = '';

  if (luminance == 0) {
    saturation = 0;
    hueValue = 0;
  } else {
    saturation = parseFloat( diff / (1- Math.abs(2 * luminance -1)) ).toFixed(3);
  }

  if(rgbArray.indexOf(maxRGB)==0) {
    // if max value is Red
    hueValue = (rgbArray[1] - rgbArray [2]) / diff ;
  } else if (rgbArray.indexOf(maxRGB)==1){
    // if max value is Green
    hueValue = 2 + ( (rgbArray [2] - rgbArray [0]) / diff  );
  } else if (rgbArray.indexOf(maxRGB)==2){
    // if max value is Blue
    hueValue = 4 + ( (rgbArray [0] - rgbArray [1]) / diff  );
  }

  // convert hue to degrees

  const hue = hueValue >= 0 ? Math.round(hueValue * 60) : Math.round(hueValue * 60 + 360);

  HSL =  HSL.concat('hsl(', hue, ',', saturation * 100, ',', luminance * 100, ')');

  return HSL;

}

// FROM HSL TO RGB
const HSLtoRGB = (hsl) => {
  const HSLInput = hsl.slice(4);
  const HSLArray = [];
  let HSLcodes = '';
  for(let i=0; i<HSLInput.length; i+=1){
    if(HSLInput[i] == ',' || HSLInput[i] == ')'){
      HSLArray.push(Number(HSLcodes));
      HSLcodes = '';
    } else {
      HSLcodes = HSLcodes.concat(HSLInput[i]);
    }
  }

  let hue = HSLArray[0];
  let saturation = HSLArray[1] / 100;
  let luminance = HSLArray[2] / 100;

  const c = (1 - Math.abs(2 * luminance - 1)) * saturation;
  const hueness = hue/60;
  const l = luminance - (c / 2);
  const i = c * (1 - Math.abs((hueness%2)-1));

  let RGBArray;

  if(hueness == 0) {
    RGBArray = [0,0,0];
  } else if (hueness < 1) {
    RGBArray = [c + l, i + l, l ];
  } else if (hueness < 2) {
    RGBArray = [i + l, c + l, l ];
  } else if (hueness < 3) {
    RGBArray = [l, c + l, i + l ];
  } else if (hueness < 4) {
    RGBArray = [l, i + l, c + l ];
  } else if (hueness < 5) {
    RGBArray = [i + l, l, c + l ];
  } else if (hueness < 6) {
    RGBArray = [c + l, l, i + l ];
  }

  const newRGBArray = RGBArray.map(x => Math.ceil(x * 255));
  let RGBString = newRGBArray.toString()
  return ''.concat('rgb(',RGBString,')');
}

// FROM RGB TO HEX
const RGBtoHex = (rgb) => {
  const rgbInput = rgb.slice(4,input.length); //remove 'rgb(', leaving the commas and end parentheses as the markers
  const hexadecimal = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
  let colorHexCode = new String('#');
  let colorRGBCode = new String();

  for(let i=0; i<rgbInput.length; i+=1){
    if(rgbInput[i] == ',' || rgbInput[i] == ')'){
      const firstCharIndex = Math.floor(Number(colorRGBCode)/16);
      const secondCharIndex = Math.floor(Number(colorRGBCode)%16);
      colorHexCode = colorHexCode.concat(hexadecimal[firstCharIndex]);
      colorHexCode = colorHexCode.concat(hexadecimal[secondCharIndex]);
      colorRGBCode = '';
    } else {
      colorRGBCode = colorRGBCode.concat(rgbInput[i]);
    }
  }

  return colorHexCode;
}

if (indicator == '#'){
  firstOutput = hexToRGB(input);
  secondOutput = RGBtoHSL(firstOutput);
} else if (indicator == "r") {
  firstOutput = RGBtoHex(input);
  secondOutput = RGBtoHSL(input);
} else if (indicator == "h"){
  firstOutput = HSLtoRGB(input);
  secondOutput = RGBtoHex(firstOutput);
}

console.log(firstOutput);
console.log(secondOutput);