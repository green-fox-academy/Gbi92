'use strict';

// Write a function that joins two arrays by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too
// Expected output: ["Eve-Joe", "Ashley-Fred"...]

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function match(arr1: string[], arr2: string[]): string[] {
  let matched: string[] = [];
  for (let i: number = 0; i < arr2.length; i++) {
    if (arr1[i] === undefined) {
      matched.push(arr2[i]);
    } else {
      let pair: string = `${arr1[i]} - ${arr2[i]}`;
      matched.push(pair);
    }
  }
  return matched;
}

console.log(match(girls, boys));

export = match;
