'use strict';

// -  Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// -  Change the value of the fourth element (8) to 4 with the `.map` method
// -  Print the fourth element as a test

let numbers4: number[] = [1, 2, 3, 8, 5, 6];

numbers4 = numbers4.map((num) => {
  if (num === 8) {
    return num / 2;
  } else {
    return num;
  }
});

console.log(numbers4[3]);
