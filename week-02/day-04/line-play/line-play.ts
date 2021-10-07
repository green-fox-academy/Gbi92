"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLine(
  xStart: number,
  yStart: number,
  xTo: number,
  yTo: number
): void {
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xTo, yTo);
  ctx.stroke();
}

let height: number = canvas.height;
let gap: number = 20;

for (let i: number = height - gap; i > 0; i -= gap) {
  ctx.strokeStyle = "green";
  drawLine(0, i, i, height - 1 / i);
}

for (let j: number = height - gap; j > 0; j -= gap) {
  ctx.strokeStyle = "purple";
  drawLine(j, 0, height - 1 / j, j);
}
