"use strict";

// Things are a little bit messed up here
// Your job is to decode the notSoCrypticMessage by using the hashmap as a lookup table
// Assemble the fragments into the out variable

let out: string = "";
let notSoCrypticMessage: number[] = [
  1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11,
];

let hashmap: any = {
  7: "run around and desert you",
  50: "tell a lie and hurt you ",
  49: "make you cry, ",
  2: "let you down",
  12: "give you up, ",
  1: "Never gonna ",
  11: "\n",
  3: "say goodbye ",
};

notSoCrypticMessage.forEach((num) => {
  out += hashmap[num];
});

console.log(out);
