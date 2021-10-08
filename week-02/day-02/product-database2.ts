"use strict";

let someProduct: any = {
  Eggs: 200,
  Milk: 200,
  Fish: 400,
  Apples: 150,
  Bread: 50,
  Chicken: 550,
};

//Which products cost less than 201? (just the name)
let lessThan201: string[] = [];

Object.keys(someProduct).forEach((key) => {
  if (someProduct[key] < 201) {
    lessThan201.push(key);
  }
});

console.log(`Less than 201: ${lessThan201}`);

//Which products cost more than 150? (name + price)
Object.keys(someProduct).forEach((key) => {
  if (someProduct[key] > 150) {
    console.log(`More than 150: ${key} - ${someProduct[key]}`);
  }
});
