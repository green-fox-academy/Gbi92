"use strict";

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)

function printParams(
  a: number,
  b: number,
  c: string,
  d: number,
  e: boolean
): void {
  console.log(a, b, c, d, e);
}

printParams(5, 89, "flower", 432, true);
