'use strict';

let matrixOne: number[][] = [
  [1, 2],
  [3, 4],
];
let matrixTwo: number[][] = [
  [5, 4],
  [3, 2],
];

function multiplyMatrix(matrix1: number[][], matrix2: number[][]) {
  let multiplied: number[][] = [];
  let element: number = 0;
  for (let i: number = 0; i < matrix1.length; i++) {
    multiplied.push([]);
    for (let k: number = 0; k < matrix1.length; k++) {
      for (let j: number = 0; j < matrix1.length; j++) {
        element += matrix1[i][j] * matrix2[j][k];
      }
      multiplied[i].push(element);
      element = 0;
    }
  }
  return multiplied;
}

console.log(multiplyMatrix(matrixOne, matrixTwo));
