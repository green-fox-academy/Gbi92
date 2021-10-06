"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern

function drawSquare(xPos: number, yPos: number, size: number): void {
  ctx.fillRect(xPos, yPos, size, size);
}

let lineC: number = 8;
let edgeSize: number = 20;

for (let y: number = 0; y <= lineC; y++) {
  for (let x: number = 0; x <= lineC; x++) {
    if ((x + y) % 2 === 0) {
      ctx.fillStyle = "pink";
    } else {
      ctx.fillStyle = "black";
    }
    drawSquare(x * edgeSize, y * edgeSize, edgeSize);
  }
}
