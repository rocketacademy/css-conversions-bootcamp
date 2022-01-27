const input = process.argv[2];

const hexInput = input.toString().trim().slice(1).toLowerCase();
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

console.log(output)