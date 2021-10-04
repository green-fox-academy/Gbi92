"use strict";

let lineCount: number = 4;

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

export function drawPyramid(lineCount: number) {
  // write your code here for Gradescope testing
  for (let i: number = 1; i <= lineCount; i++) {
    let line: string = "";
    for (let j: number = 1; j <= lineCount - i; j++) {
      line += " ";
    }
    for (let k: number = 1; k <= i + (i - 1); k++) {
      line += "*";
    }
    console.log(line);
  }
}

drawPyramid(lineCount);
