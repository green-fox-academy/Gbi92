'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let box: number[][] = [[10, 10], [290,  10], [290, 290], [10, 290], [10, 10]];
let fox: number[][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]];

function connectTheDots(dotArr:number[][]) {
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.moveTo(dotArr[0][0], dotArr[0][1]);
    for (let i: number = 1; i < dotArr.length; i++) {
        ctx.lineTo(dotArr[i][0], dotArr[i][1]);
    }
    ctx.stroke();
}

connectTheDots(box);
connectTheDots(fox);