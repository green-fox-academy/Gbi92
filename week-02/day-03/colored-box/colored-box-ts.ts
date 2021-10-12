'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge

ctx.beginPath();
ctx.strokeStyle = 'purple';
ctx.moveTo(20, 20);
ctx.lineTo(150, 20);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(150, 20);
ctx.lineTo(150, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'pink';
ctx.moveTo(150, 150);
ctx.lineTo(20, 150);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(20, 150);
ctx.lineTo(20, 20);
ctx.stroke();
