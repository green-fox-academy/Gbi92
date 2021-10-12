'use strict';

export {};

// Create a method called decryptDoubled() that takes a filename as string as a parameter
// and it can decrypt the duplicated-chars.txt file
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
// If the file can't be opened it should return this message: File not found
// The result should be saved in the output.txt file

const fs = require('fs');

function decryptDoubled(file: string): void {
  try {
    let fileContent: string = fs.readFileSync(file, 'utf-8');
    let lines: string[] = fileContent.split('\n');
    //Decryption:
    let deduppedText: string[] = lines.map((line) => {
      let dedup: string[] = [];
      for (let i: number = 0; i < line.length; i += 2) {
        if (line.charAt(i) === line.charAt(i + 1)) {
          dedup.push(line.charAt(i));
        }
      }
      return dedup.join('');
    });
    let result: string = deduppedText.join('\n');
    fs.writeFileSync('output.txt', result);
  } catch (error) {
    console.log('File not found');
  }
}

decryptDoubled('duplicated-chars.txt');
