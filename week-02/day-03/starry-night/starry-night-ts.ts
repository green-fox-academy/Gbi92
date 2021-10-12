'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

let greyShades: string[] = [
  '#D3D3D3',
  '#A5A5A5',
  '#797979',
  '#ADADAD',
  '#FAF7FF',
  'ffffff',
];

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 600, 400);

function drawSquare(xPos: number, yPos: number): void {
  ctx.fillRect(xPos, yPos, 5, 5);
}

for (let i: number = 0; i < 300; i++) {
  ctx.fillStyle = greyShades[Math.floor(Math.random() * greyShades.length)];
  drawSquare(
    i + Math.floor(Math.random() * 600),
    i + Math.floor(Math.random() * 600)
  );
}
