"use strict";

//Create a map where the keys are strings and the values are strings with the following initial values
let otherMap: any = {
  "978-1-60309-452-8": "A Letter to Jo",
  "978-1-60309-459-7": "Lupus",
  "978-1-60309-444-3": "Red Panda and Moon Bear",
  "978-1-60309-461-0": "The Lab",
};

//Print all the key-value pairs in the following format
Object.keys(otherMap).forEach((key) => {
  console.log(`${otherMap[key]} (ISBN: ${key})`);
});

//Remove the key-value pair with key 978-1-60309-444-3
delete otherMap["978-1-60309-444-3"];

//Remove the key-value pair with value The Lab
Object.keys(otherMap).forEach((key) => {
  if (otherMap[key] === "The Lab") {
    delete otherMap[key];
  }
});

//Add the following key-value pairs to the map
otherMap['978-1-60309-450-4'] = 'They Called Us Enemy';
otherMap['978-1-60309-453-5'] = 'Why Did We Trust Him?';

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(otherMap['478-0-61159-424-8']); //undefined

//Print the value associated with key 978-1-60309-453-5
console.log(otherMap['978-1-60309-453-5']);
