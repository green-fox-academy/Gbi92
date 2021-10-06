"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

const colors: string[] = ["green", "blue", "orange", "pink"];

function drawRect(
  xPos: number,
  yPos: number,
  width: number,
  height: number
): void {
  ctx.fillRect(xPos, yPos, width, height);
}

for (let i: number = 0; i < 4; i++) {
  ctx.fillStyle = colors[i];
  drawRect(
    i + Math.floor(Math.random() * 300),
    i + Math.floor(Math.random() * 300),
    i + Math.floor(Math.random() * 300),
    i + Math.floor(Math.random() * 300)
  );
}
