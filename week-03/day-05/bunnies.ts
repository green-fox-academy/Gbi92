'use strict';

// We have a number of bunnies and each bunny has two big floppy ears.
// Write a recursive method (no loops or multiplication) which takes the number of bunnies as
// its sole parameter and returns the total number of ears the bunnies have.
// The method should be able to handle invalid input (e.g. negative numbers)

function earCounter(bunnies: number): number {
  if (bunnies <= 0) {
    return 0;
  }
  return 2 + earCounter(bunnies - 1);
}

console.log(earCounter(5));
console.log(earCounter(-3));
