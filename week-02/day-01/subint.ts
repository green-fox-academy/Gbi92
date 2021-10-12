'use strict';

//  Create a function that takes a number and an array of numbers as a parameter
//  and returns the indices of the numbers of the array which contain the given number
//  or returns an empty list (if the number is not part of any of the numbers in the array)

function findMatchingIndexes(num: number, arr: number[]): number[] {
  let numStr: string = num + '';
  let numStrArr: string[] = arr.map((el) => el + '');
  let matching: number[] = [];
  numStrArr.forEach((el, i) => {
    if (el.includes(numStr)) {
      matching.push(i);
    }
  });
  if (matching) {
    return matching;
  } else {
    return [];
  }
}

// Example
console.log(findMatchingIndexes(1, [1, 11, 34, 52, 61]));
// should print: `[0, 1, 4]`
console.log(findMatchingIndexes(9, [1, 11, 34, 52, 61]));
// should print: '[]'
