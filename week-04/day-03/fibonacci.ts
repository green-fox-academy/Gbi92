'use strict';

export function fibonacci(fiboIndex: number) {
  let prev: number = 0;
  let current: number = 1;

  if (fiboIndex === 1) {
    return prev;
  }
  if (fiboIndex === 2) {
    return current;
  }

  for (let i: number = 1; i < fiboIndex - 1; i++) {
    let sum: number = prev + current;
    prev = current;
    current = sum;
  }
  return current;
}

console.log(fibonacci(4));
