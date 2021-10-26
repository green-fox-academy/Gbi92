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
//unique-t meg kiszedni - object keyek array
function ipAdresses(content: string): string[] {
  const regex: RegExp = /\d{2}\.\d{2}\.\d{2}\.\d{2}/g;
  let ipAdresses = content.match(regex);
  if (ipAdresses === null) {
    const empty: string[] = [];
    return empty;
  }
  return ipAdresses;
}

console.log(ipAdresses(fileContent));

function getPostRatio(content: string): number {
  const regexGET: RegExp = /GET/g;
  const regexPOST: RegExp = /POST/g;
  let getArr = content.match(regexGET);
  let postArr = content.match(regexPOST);
  if (getArr?.length && postArr?.length) {
    return getArr.length / postArr.length;
  }
}

getPostRatio(fileContent);
