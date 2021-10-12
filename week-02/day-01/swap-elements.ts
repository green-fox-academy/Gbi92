'use strict';

// -  Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// -  Swap the first and the third element of `names`

let names: string[] = ['Arthur', 'Boe', 'Chloe'];

function swap(arr: string[], a: number, b: number): string[] {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr;
}

console.log(swap(names, 0, 2));
