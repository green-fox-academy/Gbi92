'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawLine(
  xStart: number,
  yStart: number,
  xTo: number,
  yTo: number
): void {
  ctx.beginPath();
  ctx.strokeStyle = 'green';
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xTo, yTo);
  ctx.stroke();
}

let height: number = canvas.height;
let middle: number = height / 2;
let gap: number = 10;

for (
  let y: number = middle - gap, x: number = height - gap;
  y >= 0;
  y -= gap, x -= gap
) {
  drawLine(middle, y, x, 1 / x + middle);
}

for (
  let y: number = middle + gap, x: number = height - gap;
  y <= height;
  y += gap, x -= gap
) {
  drawLine(middle, y, x, middle - 1 / x);
}

for (let y: number = middle - gap, x: number = gap; y > 0; y -= gap, x += gap) {
  drawLine(middle, y, x, middle + 1 / x);
}

for (
  let y: number = middle + gap, x: number = gap;
  y < height;
  y += gap, x += gap
) {
  drawLine(middle, y, x, middle + 1 / x);
}
