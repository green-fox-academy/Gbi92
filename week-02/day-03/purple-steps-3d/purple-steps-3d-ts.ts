'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r4.png]

function drawPurple3d(xPos: number, yPos: number, size: number): void {
  ctx.fillStyle = 'purple';
  ctx.fillRect(xPos, yPos, size, size);
}

let rate: number = 5;

for (let i: number = 0; i < 8; i++) {
  drawPurple3d(rate * 2, rate * 2, rate);
  rate *= 1.5;
}
