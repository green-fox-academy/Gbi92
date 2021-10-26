'use strict';

// Read all data from 'log.txt'
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses
// Write a function that returns the GET / POST request ratio

const fs = require('fs');

let fileContent: string = '';

try {
  fileContent = fs.readFileSync('log.txt', 'utf-8');
} catch (error) {
  throw 'File does not exist';
}

let lines: string[] = fileContent.split(' /');

function ipAdresses(content: string): string[] {
  const regex: RegExp = /\d{2}\.\d{2}\.\d{2}\.\d{2}/g;
  let ipAdresses = content.match(regex);
  return ipAdresses;
}

console.log(ipAdresses(fileContent));

//meg nem jo! megnezni a typescript regex type dolgokat
function getPostRatio(content: string) {
  const regexGET: RegExp = /GET/g;
  const regexPOST: RegExp = /POST/g;
  let getArr = content.match(regexGET);
  let postArr = content.match(regexPOST);
  console.log(getArr.length);
}

getPostRatio(fileContent);
