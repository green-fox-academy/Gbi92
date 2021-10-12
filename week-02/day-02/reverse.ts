'use strict';

// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

export function reverse(sentence: string): string {
  let reversedArr: string[] = sentence.split(' ').reverse();
  let reversedWordsArr: string[] = reversedArr.map((word) => {
    return word.split('').reverse().join('');
  });
  return reversedWordsArr.join(' ');
}

console.log(reverse(toBeReversed));
