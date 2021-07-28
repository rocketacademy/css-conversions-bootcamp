const input = process.argv[2]; //now should be rgb input
// rgb(num,num,num)
const rgbInput = input.slice(4,input.length); //remove 'rgb(', leaving the commas and end parentheses as the markers

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

console.log(colorHexCode);