'use strict';

export function countLetters(str: string): any {
  if (str === '') {
    throw 'String cannot be empty for letter counting.';
  }
  const lettersObj: any = {};
  const chars: string[] = str.split('');
  chars.forEach((char) => {
    lettersObj[char] ? lettersObj[char]++ : (lettersObj[char] = 1);
  });
  return lettersObj;
}
