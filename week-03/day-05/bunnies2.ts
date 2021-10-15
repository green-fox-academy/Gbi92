'use strict';

// We have bunnies standing in a line numbered as 1, 2, ... The "odd" bunnies
// (1, 3, ...) have the usual number of ears = 2. However, the even bunnies
// (2, 4, ...) have 3 ears each (because they have a raised foot). Write
// a recursive method which accepts the number of bunnies as a parameter
// and returns the total number of "ears" in the bunny line. The method should be
// able to handle invalid input (e.g. negative numbers).

function mixedEarCounter(bunnies: number): number {
  if (bunnies <= 0) {
    return 0;
  }
  if (bunnies % 2 === 0) {
    return 3 + mixedEarCounter(bunnies - 1);
  } else {
    return 2 + mixedEarCounter(bunnies - 1);
  }
}

console.log(mixedEarCounter(5));
console.log(mixedEarCounter(2));
console.log(mixedEarCounter(-4));