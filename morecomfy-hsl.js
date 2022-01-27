// https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
// const hexadecimal = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

const input = process.argv[2]; //now should be rgb input
// rgb(num,num,num)

const rgbInput = input.slice(4); //remove 'rgb(', leaving the commas and end parentheses as the markers
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

HSL =  HSL.concat('hsl(', hue, 'deg,', saturation * 100, '%,', luminance * 100, '%)');

console.log(HSL);