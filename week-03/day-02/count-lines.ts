'use strict';

export {};

// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

export function countLines(file: string): number {
  try {
    let fileContent: string = fs.readFileSync(file, 'utf-8');
    let lines: string[] = fileContent.split('\n');
    return lines.length;
  } catch (error) {
    return 0;
  }
}

countLines('my-File.txt');
