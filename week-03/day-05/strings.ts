'use strict';

// Given a string, write a recursive (no loops) method which returns a new string
// with all the lowercase 'x' chars changed to 'y' chars.

let myString: string = 'xlxxox';

function xToYString(i: number, str: string): string {
  if (i === str.length) {
    return '';
  }
  if (str.charAt(i) === 'x') {
    return 'y' + xToYString(i + 1, str);
  } else {
    return str.charAt(i) + xToYString(i + 1, str);
  }
}

console.log(xToYString(0, myString));
