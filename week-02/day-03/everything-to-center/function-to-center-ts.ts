"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a line from that point to the center of the canvas
// Fill the canvas with lines from the edges (every 20 px) to the center

function drawLine(xStart: number, yStart: number) {
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(canvas.width / 2, canvas.height / 2);
  ctx.stroke();
}

for (let x: number = 0, y: number = 0; x <= canvas.width; x += 20, y += 20) {
    drawLine(x, 0);
    drawLine(0, y);
    drawLine(x, canvas.height);
    drawLine(canvas.width, y);
}

