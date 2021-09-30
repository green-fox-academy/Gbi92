'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000

let cubL: number = 5.1;
let cubW: number = 6.3;
let cubH: number = 3.4;

console.log('Surface Area: ' + ((cubL * cubW * 2) + (cubL * cubH * 2) + (cubH * cubW * 2)) );
console.log('Volume: ' + (cubL * cubW * cubH) );

