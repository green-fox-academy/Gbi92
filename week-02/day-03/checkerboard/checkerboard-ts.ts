"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

function drawSquare(xPos: number, yPos: number, size: number): void {
  ctx.fillRect(xPos, yPos, size, size);
}

function isEven(number: number): boolean {
  return number % 2 === 0;
}

let rows: number = 8;
let columns: number = rows;
let edgeSize: number = 20;

for (let y: number = 0; y < rows; y++) {
  for (let x: number = 0; x < columns; x++) {
    if (isEven(x + y)) {
      ctx.fillStyle = "pink";
    } else {
      ctx.fillStyle = "black";
    }
    drawSquare(x * edgeSize, y * edgeSize, edgeSize);
  }
}

// for (let y: number = 0; y < rows * edgeSize; y += edgeSize) {
//   for (let x: number = 0; x < columns * edgeSize; x += edgeSize) {
//     if (isEven((x + y) / edgeSize)) {
//       ctx.fillStyle = "pink";
//     } else {
//       ctx.fillStyle = "black";
//     }
//     drawSquare(x, y, edgeSize);
//   }
// }