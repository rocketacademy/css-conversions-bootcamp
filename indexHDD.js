// Import readFile function from global fs module. fs stands for file system.
import { readFile } from 'fs';

console.log('done importing from fs');

// Define callback function to run after retrieving file contents in readFile
// const handleFileRead = (error, content) => {
//   console.log('running inside of handleFileRead');

//   // Handle errors if any
//   if (error) {
//     console.log('read error', error);
//     return;
//   }

//   console.log(`content from file read: ${content}`);
// };

const handleFileRead = (error, content) => {
  // Split the content of our file by lines
  const lines = content.split('\n');

  // For each line, log the line number and the content of that line
  for (let i = 0; i < lines.length; i += 1) {
    console.log(`Line ${i + 1}: ${lines[i]}`);
  }
};


console.log('about to call readFile');

// 2nd param 'utf8' specifies the file encoding.
// Read more about UTF8 here: https://en.wikipedia.org/wiki/UTF-8
// readFile('mystuff.txt', 'utf8', handleFileRead);

// readFile('/Users/grahamlim/Documents/bootcamp/week-08/pre-class/css-conversions-bootcamp/mystuff.txt', 'utf8', handleFileRead);

// readFile('testFolder', 'utf8', handleFileRead);

readFile(process.argv[2], 'utf8', handleFileRead);


console.log('done calling readFile');

// fs is the built-in Node.js library that interacts with the computer's file system, i.e. the operating system abstraction of the hard drive. See official fs documentation here.
// readFile is one of the functions that fs exports. See the specific documentation for readFile here.

// readFile passes the error parameter to its callback function so that we know when something went wrong during file read. We should always have conditional checking for error when file reading.