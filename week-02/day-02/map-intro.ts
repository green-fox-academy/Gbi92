"use strict";

//Create an empty map where the keys are integers and the values are characters
let firstMap: any = {};

//Print out whether the map is empty or not
console.log(firstMap);

//Add the following key-value pairs to the map
firstMap[97] = "a";
firstMap[98] = "b";
firstMap[99] = "c";
firstMap[65] = "A";
firstMap[66] = "B";
firstMap[67] = "C";

//Print all the keys
for (let key in firstMap) {
  console.log(key);
}

//Print all the values
Object.keys(firstMap).forEach((key) => {
  console.log(firstMap[key]);
});

//Add value D with the key 68
firstMap[68] = 'D';

//Print how many key-value pairs are in the map
let count: number = 0;

for(let key in firstMap) {
    ++count;
}

console.log(count);

//Print the value that is associated with key 99
console.log(firstMap[99]);

//Remove the key-value pair with key 97
delete firstMap[97];

//Print whether there is an associated value with key 100 or not
console.log(firstMap[100]); //undefined

//Remove all the key-value pairs
for(let key in firstMap) {
    delete firstMap[key];
}

console.log(firstMap);