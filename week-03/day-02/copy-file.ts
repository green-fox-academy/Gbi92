'use strict';

export {};

// Write a function that copies the contents of a file into another file
// It should take two filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyFileContent(file1: string, file2: string): boolean {
  try {
    let copy: string = fs.readFileSync(file1, 'utf-8');
    fs.writeFileSync(file2, '\n' + copy, { flag: 'a' });
    return true;
  } catch (error) {
    return false;
  }
}

copyFileContent('myFile.txt', 'my-file.txt');
