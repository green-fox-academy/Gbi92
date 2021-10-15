'use strict';

// Given a non-negative integer n, return the sum of its digits recursively (without loops).

function sumOfDigits(n: number): number {
  if (n < 1) {
    return 0;
  }
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(4567));
