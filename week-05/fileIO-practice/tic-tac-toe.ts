'use strict';

export {};

// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file's content

const fs = require('fs');

function readFile(path: string): string {
  try {
    return fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw 'File does not exist';
  }
}

function ticTacResult(path: string) {
  let fileContent: string = readFile(path);
  let lines: string[] = fileContent.split('\n');
  
}

console.log(ticTacResult('win-o.txt'));
// Should print "O"

console.log(ticTacResult('win-x.txt'));
// Should print "X"

console.log(ticTacResult('draw.txt'));
// Should print "Draw"
