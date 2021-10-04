"use strict";

let lineCount: number = 6;

// Write a program that draws a
// square like this:
//
// %%%%%%
// %%   %
// % %  %
// %  % %
// %   %%
// %%%%%%
//
// The square should have as many lines as lineCount is

for (let i: number = 1; i <= lineCount; i++) {
  let line: string = "";
  for (let j: number = 1; j <= lineCount; j++) {
    if (i === 1 || j === 1 || j === lineCount || i === lineCount || i === j) {
      line += "%";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
