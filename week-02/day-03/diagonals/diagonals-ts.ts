"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

function drawLine(
  xStart: number,
  yStart: number,
  xEnd: number,
  yEnd: number
): void {
  ctx.beginPath;
  if(xStart === 0 && yStart === 0) {
      ctx.strokeStyle = 'green';
  } else {
      ctx.strokeStyle = 'red';
  }
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xEnd, yEnd);
  ctx.stroke();
}

drawLine(0, 0, canvas.width, canvas.height);
//drawLine(canvas.width, 0, 0, canvas.height);
