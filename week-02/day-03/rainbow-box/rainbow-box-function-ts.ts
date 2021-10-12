'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

const rainbowColors: string[] = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

function drawRainbowBox(size: number, color: string): void {
  ctx.strokeStyle = color;
  ctx.strokeRect(
    canvas.width / 2 - size / 2,
    canvas.height / 2 - size / 2,
    size,
    size
  );
}

for (let i: number = 0; i < rainbowColors.length; i++) {
  drawRainbowBox(i + Math.floor(Math.random() * 400), rainbowColors[i]);
}
