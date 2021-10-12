'use strict';

// While saving this quote, a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;

let quoteArr: string[] = quote.split(' ');
//Remove 0 (zero) elements BEFORE index of 'you', and insert "always takes longer than"
quoteArr.splice(quoteArr.indexOf('you'), 0, 'always takes longer than');
quote = quoteArr.join(' ');

console.log(quote);
