'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

ctx.fillStyle = 'green';
ctx.fillRect(canvas.width / 2 - 5, canvas.height / 2 - 5, 10, 10);
