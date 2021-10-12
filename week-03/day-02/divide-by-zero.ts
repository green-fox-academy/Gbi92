'use strict';

// Create a function that divides number 10
// by a number that's passed as a paramater and prints the result.
// It should print "fail" if the parameter is 0

function divideTen(num: number): void {
  let result: number = 10 / num;
  if (num === 0) {
    throw new Error('fail');
  } else {
    console.log(result);
  }
}

let myNum: number = 0;

try {
  divideTen(myNum);
} catch (error: any) {
  console.log(error.message);
}
