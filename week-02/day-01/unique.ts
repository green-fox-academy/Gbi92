"use strict";

//  Create a function that takes a list of numbers as a parameter
//  and returns a list of numbers where every number is unique (occurs only once)

function findUniqueItems(arr: number[]): number[] {
  let uniqueArr: number[] = [];
  arr.forEach((num) => {
    if (!uniqueArr.includes(num)) {
      uniqueArr.push(num);
    }
  });
  return uniqueArr;
}

//  Example
console.log(findUniqueItems([1, 11, 34, 11, 52, 61, 1, 34]));
//  should print: `[1, 11, 34, 52, 61]`
