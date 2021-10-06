"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50 long horizontal line from that point
// Draw at least 3 lines with that function using a loop

function horizontalLine(xStart: number, yStart: number): void {
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xStart + 50, yStart);
  ctx.stroke();
}

for (let i: number = 0; i < 3; i++) {
  horizontalLine(
    i + Math.floor(Math.random() * 400),
    i + Math.floor(Math.random() * 400)
  );
}
