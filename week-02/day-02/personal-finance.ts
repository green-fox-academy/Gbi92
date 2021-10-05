"use strict";

let expenses: number[] = [500, 1000, 1250, 175, 800, 120];

//How much did we spend?
let spendAll: number = 0;

expenses.forEach((num) => {
  spendAll += num;
});

console.log(spendAll);

//Which was our greatest expense?
console.log(Math.max(...expenses));

//Which was our cheapest spending?
console.log(Math.min(...expenses));

//What was the average amount of our spendings?
console.log(spendAll / expenses.length);
