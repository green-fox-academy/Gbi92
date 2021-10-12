'use strict';

// -  Create a variable named `baseNumber` and assign the value `123` to it
// -  Create a function called `doubleNumber()` that doubles it's input parameter
//    and returns the doubled value
// -  Log the result of `doubleNumber(baseNumber)` to the console

let baseNumber: number = 123;

function doubleNumber(input: number): number {
  let double: number = input * 2;
  return double;
}

console.log(doubleNumber(baseNumber));
