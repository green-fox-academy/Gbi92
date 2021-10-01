'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineC: number = 8;

for (let i: number = 1; i <= lineC; i++) {
    let line: string = '';
    for (let j: number = 1; j <= lineC; j++) {
        if ((i + j) % 2 === 0 ){
            line += '%';
        } else {
            line += ' ';
        }
    }
    console.log(line);
}
