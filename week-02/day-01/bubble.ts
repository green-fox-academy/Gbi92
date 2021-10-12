'use strict';

//  Create a function that takes a list of numbers as parameter
//  and returns a list where the elements are sorted in ascending numerical order
//  When you are done, add a second boolean parameter to the function
//  If it is `true` sort the list descending, otherwise ascending

function bubble(arr: number[]): number[] {
  return arr.sort((a: number, b: number) => {
    return a - b;
  });
}

function advancedBubble(arr: number[], bool: boolean): number[] {
  if (bool) {
    return arr.sort((a: number, b: number) => {
      return b - a;
    });
  } else {
    bubble(arr);
  }
}

//  Example:
console.log(bubble([34, 12, 24, 9, 5]));
//  should print [5, 9, 12, 24, 34]
console.log(advancedBubble([34, 12, 24, 9, 5], true));
//  should print [34, 24, 12, 9, 5]
