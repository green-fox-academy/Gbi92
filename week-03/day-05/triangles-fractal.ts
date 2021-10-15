'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

function drawTriangle(xStart: number, yStart: number,side: number) {
  let thirdPointXPos: number = side / 2;
  let thirdPointYPos: number = side * Math.cos(Math.PI / 6);
  
  ctx.beginPath();
  ctx.moveTo(xStart, yStart);
  ctx.lineTo(xStart + side, yStart);
  ctx.lineTo(xStart + thirdPointXPos, yStart + thirdPointYPos);
  ctx.closePath();
  ctx.stroke();
}

drawTriangle(0, 0, 400);
drawTriangle(0, 0, 200);
drawTriangle(0, 0, 100);
drawTriangle(100, 0, 100);
drawTriangle(200, 0, 100);
drawTriangle(300, 0, 100);
drawTriangle(200, 0, 200);
drawTriangle(100, 173, 200);
drawTriangle(100, 173, 100);
drawTriangle(200, 173, 100);