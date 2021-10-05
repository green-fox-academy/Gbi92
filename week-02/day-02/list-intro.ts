"use strict";

//Create an empty list which will contain names (strings)
let names: string[] = [];

//Print out the number of elements in the list
console.log(names.length);

//Add "William" to the list
names.push("William");

//Print out whether the list is empty or not
console.log(names.length);

//Add "John" to the list
//Add "Amanda" to the list
names.push("John", "Amanda");

//Print out the number of elements in the list
console.log(names.length);

//Print out the 3rd element
console.log(names[2]);

//Iterate through the list and print out each name
names.forEach((name) => {
  console.log(name);
});

names.forEach((name, i) => {
  console.log(`${i + 1}. ${name}`);
});

//Remove the 2nd element
names.splice(1, 1);

//Iterate through the list in a reversed order and print out each name
names.reverse().forEach((name) => {
  console.log(name);
});

//Remove all elements
names.splice(0);

console.log(names);
