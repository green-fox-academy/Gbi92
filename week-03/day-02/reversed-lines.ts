'use strict';

export {};

// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

function reverseLines(file: string): void {
  try {
    let fileContent: string = fs.readFileSync(file, 'utf-8');
    let lines: string[] = fileContent.split('\n');
    //Reversing lines:
    let reversedText: string[] = lines.map((line) => {
      let reversedArr: string[] = line.split(' ').reverse();
      let reversedWordsArr: string[] = reversedArr.map((word) => {
        return word.split('').reverse().join('');
      });
      return reversedWordsArr.join(' ');
    });
    let result: string = reversedText.join('\n');
    fs.writeFileSync('output-reversed.txt', result);
  } catch (error) {
    console.log('File not found');
  }
}

reverseLines('reversed-lines.txt');
