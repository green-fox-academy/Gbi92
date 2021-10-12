'use strict';

export {};

// Write a function that is able to manipulate a file
// by writing your name into it as a single line.
// The file should be named "my-file.txt".
// In case the program is unable to write the file,
// it should print the following error message: "Unable to write file: my-file.txt".

const fs = require('fs');

let fileContent: string = 'Koos Gabriella';
let fileName: string = 'my-file.txt';

function writeSingleLine(content: string, path: string) {
  fs.writeFileSync(path, content);
}

try {
  writeSingleLine(fileContent, fileName);
} catch (error: any) {
  console.log(`Unable to write file: ${fileName}`);
}
