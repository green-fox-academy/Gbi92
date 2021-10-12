'use strict';

export {};

// Create a method that decrypts reversed-order.txt

const fs = require('fs');

function reverseOrder(file: string): void {
  try {
    let fileContent: string = fs.readFileSync(file, 'utf-8');
    let lines: string[] = fileContent.split('\n');
    //Reversing lines:
    let reversedText: string[] = [];

    for (let i: number = lines.length - 1; i >= 0; i--) {
      reversedText.push(lines[i]);
    }

    let result: string = reversedText.join('\n');
    fs.writeFileSync('output-ordered.txt', result);
  } catch (error) {
    console.log('File not found');
  }
}

reverseOrder('reversed-order.txt');
