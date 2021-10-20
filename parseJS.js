import { readFile } from 'fs';
​
export const showComments = (fileName) => {
​
  const handleFileRead = (error, content) => {
    // Split the content of our file by lines
    const lines = content.split('\n');
​
    // For each line, log the line number and the content of that line
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i].includes('//')) {
        console.log(`Line ${i + 1}: ${lines[i]}`)
      }
    }
  };
​
  readFile(fileName, 'utf8', handleFileRead);
}
​
export const showParams = (fileName) => {
​
  const handleFileRead = (error, content) => {
    // Split the content of our file by lines
    const lines = content.split('\n');
​
    // For each line, log the line number and the content of that line
    for (let i = 0; i < lines.length; i += 1) {
      if (lines[i].includes('=>')) {
        const words = lines[i].split(' ');
        const funcName = words[1];
        const paramNames = words[3].slice(1,-1);
        console.log(`${funcName}: ${paramNames}`);
      }
    }
  };
​
  readFile(fileName, 'utf8', handleFileRead);
}