'use strict';

export{}

// Write a program that opens a file called "my-file.txt" and prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');

let filePath: string = 'my-file.txt';

function openFile(path: string) {
  let fileContent: string = fs.readFileSync(path, 'utf-8');
  console.log(fileContent);
}

try {
  openFile(filePath);
} catch (error: any) {
  console.log(`Unable to read file: ${filePath}`);
}
