'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function drawPurpleSquare(xPos:number, yPos: number, size: number): void {
    ctx.fillStyle = 'purple';
    ctx.fillRect(xPos, yPos, size, size);
}

let rate: number = 15;

for(let i: number = 1; i < rate; i++) {
    drawPurpleSquare(i * rate, i * rate, rate);
}