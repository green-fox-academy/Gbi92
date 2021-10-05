"use strict";

let productMap: any = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

//How much is the fish?
console.log(`The fish is: ${productMap["Fish"]}`);

//What is the most expensive product?
let prices: number[] = [];

Object.keys(productMap).forEach((key) => {
  prices.push(productMap[key]);
});

let mostExp: number = Math.max(...prices);

Object.keys(productMap).forEach((key) => {
  if (productMap[key] === mostExp) {
    console.log(`${key} is the most expensive product.`);
  }
});

//What is the average price?
let priceSum: number = 0;
let keyCount: number = 0;

Object.keys(productMap).forEach((key) => {
  priceSum += productMap[key];
  keyCount++;
});

console.log(`The average price is: ${priceSum / keyCount}`);

//How many products' price is below 300?
let countBelow300: number = 0;

Object.keys(productMap).forEach((key) => {
  if (productMap[key] < 300) {
    countBelow300++;
  }
});

console.log(`${countBelow300} products' price is below 300.`);

//Is there anything we can buy for exactly 125?
let productName: string = '';

Object.keys(productMap).forEach((key) => {
  if (productMap[key] === 125) {
    productName = key;
  }
});

if (productName) {
  console.log(`We can buy ${productName} for exactly 125.`);
} else {
  console.log("There is nothing we can buy for 125.");
}

//What is the cheapest product?
let cheapest: number = Math.min(...prices);

Object.keys(productMap).forEach((key) => {
  if (productMap[key] === cheapest) {
    console.log(`${key} is the cheapest product.`);
  }
});
