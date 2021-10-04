"use strict";

let lineCount: number = 5;

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is

let middleLine: number = Math.ceil(lineCount / 2);

for (let i: number = 1; i <= middleLine; i++) {
  let line: string = "";

  for (let j: number = 1; j <= middleLine - i; j++) {
    line += " ";
  }
  for (let k: number = 1; k <= i + (i - 1); k++) {
    line += "*";
  }
  console.log(line);
}

for (let l = 1; l <= lineCount - middleLine; l++) {
  let bottom: string = "";

  for (let m: number = 1; m <= middleLine - (middleLine - l); m++) {
    bottom += " ";
  }
  for (let n: number = 1; n <= lineCount - l * 2; n++) {
    bottom += "*";
  }
  console.log(bottom);
}
