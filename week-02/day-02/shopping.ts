"use strict";

let products: any = {
  milk: 1.07,
  rice: 1.59,
  eggs: 3.14,
  cheese: 12.6,
  "chicken breasts": 9.4,
  apples: 2.31,
  tomato: 2.58,
  potato: 1.75,
  onion: 1.1,
};

let bobList: any = {
  milk: 3,
  rice: 2,
  eggs: 2,
  cheese: 1,
  "chicken breasts": 4,
  apples: 1,
  tomato: 2,
  potato: 1,
};

let aliceList: any = {
  rice: 1,
  eggs: 5,
  "chicken breasts": 2,
  apples: 1,
  tomato: 10,
};

//How much does Bob pay?
let bobPay: number = 0;

Object.keys(bobList).forEach((key) => {
  bobPay += bobList[key] * products[key];
});

console.log("Bob pays: " + bobPay);

//How much does Alice pay?
let alicePay: number = 0;

Object.keys(aliceList).forEach((key) => {
  alicePay += aliceList[key] * products[key];
});

console.log("Alice pays: " + alicePay);

//Who buys more Rice? Who buys more Potato?
function buysMore(key: string): void {
  if (aliceList[key] > bobList[key]) {
    console.log(`Alice buys more ${key}.`);
  } else {
    console.log(`Bob buys more ${key}.`);
  }
}

buysMore("rice");
buysMore("potato");

//Who buys more different products?
let bobCountDiffProd: number = 0;

for (let key in bobList) {
  ++bobCountDiffProd;
}

let aliceCountDiffProd: number = 0;

for (let key in aliceList) {
  ++aliceCountDiffProd;
}

if (bobCountDiffProd > aliceCountDiffProd) {
  console.log("Bob buys more different products: " + bobCountDiffProd);
} else {
  console.log("Alice buys more different products: " + aliceCountDiffProd);
}

//Who buys more products? (more pieces)
let bobCountPieces: number = 0;

Object.keys(bobList).forEach((key) => {
  bobCountPieces += bobList[key];
});

let aliceCountPieces: number = 0;

Object.keys(aliceList).forEach((key) => {
  aliceCountPieces += aliceList[key];
});

if (bobCountPieces > aliceCountPieces) {
  console.log("Bob buys more products: " + bobCountPieces);
} else {
  console.log("Alice buys more products: " + aliceCountPieces);
}
