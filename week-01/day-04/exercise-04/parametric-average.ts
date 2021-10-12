'use strict';

// Write a program that calculates the sum and the average from 1 to a given number
// Example input: 5
// Example output: Sum: 15, Average: 3

let input: number = 4;
let sum: number = 0;

for (let i: number = 1; i <= input; i++) {
  sum += i;
}

console.log('Sum: ' + sum);
console.log('Average: ' + sum / input);
