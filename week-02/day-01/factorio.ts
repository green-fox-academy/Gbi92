"use strict";

// - Create a function called `calculateFactorial()`
//   that returns the factorial of its input

function calculateFactorial(num: number): number {
  let factorial: number = 1;
  for (let i: number = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}

console.log(calculateFactorial(7));
