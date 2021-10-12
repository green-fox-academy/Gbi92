'use strict';

let lineCount: number = 6;

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is

export function drawSquare(lineCount: number) {
  // write your code here for Gradescope testing
  for (let i: number = 1; i <= lineCount; i++) {
    let line: string = '';
    for (let j: number = 1; j <= lineCount; j++) {
      if (i === 1 || j === 1 || j === lineCount || i === lineCount) {
        line += '%';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}
