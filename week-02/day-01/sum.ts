"use strict";

// Write a function called `sum()` that returns the sum of numbers from zero to the given parameter

function sum(until: number): number {
  let sum: number = 0;
  for (let i: number = 0; i <= until; i++) {
    sum += i;
  }
  return sum;
}

console.log(sum(4));
