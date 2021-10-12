'use strict';

export {};

// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function countLines(file: string) {
  let fileContent: string = fs.readFileSync(file, 'utf-8');
  let colors: string[] = fileContent.split('\n');
  console.log(colors.length);
}

try {
  countLines('my-File.txt');
} catch (error: any) {
  console.log(0);
}
