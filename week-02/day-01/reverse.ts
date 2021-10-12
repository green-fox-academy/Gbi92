'use strict';

// -  Create a variable named `numbers`
//    with the following content: `[3, 4, 5, 6, 7]`
// -  Reverse the order of the elements of `numbers`
// 	   -  do it with the built in method
//	   -  do it with creating a new temp array and a loop
// -  Print the elements of the reversed `numbers`

let numbers7: number[] = [3, 4, 5, 6, 7];

numbers7 = numbers7.reverse();

console.log(numbers7);

//or:

let reversedArr: number[] = [];

for (let i: number = numbers7.length - 1; i >= 0; i--) {
  reversedArr.push(numbers7[i]);
}

console.log(reversedArr);
