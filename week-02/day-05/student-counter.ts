"use strict";

const students: any[] = [
  { name: "Theodor", age: 3, candies: 2 },
  { name: "Paul", age: 9, candies: 2 },
  { name: "Mark", age: 12, candies: 5 },
  { name: "Peter", age: 7, candies: 3 },
  { name: "Olaf", age: 12, candies: 7 },
  { name: "George", age: 10, candies: 1 },
];

// create a function called listOfNames() that takes a list of students and returns:
// - The name of students who have more than 4 candies
export function listOfNames(studentList: any[]): string[] {
  let moreCandiesNames: string[] = [];
  let moreCandiesObj = studentList.filter((student) => student["candies"] > 4);
  moreCandiesObj.forEach((obj) => {
    moreCandiesNames.push(obj["name"]);
  });
  return moreCandiesNames;
}

console.log(listOfNames(students));

// create a function called sumOfAge() that takes a list of students and returns:
// - The sum of the age of people who have less than 5 candies
export function sumOfAge(studentList: any[]): number {
  let sum: number = 0;
  studentList.forEach((student) => {
    if (student["candies"] < 5) {
      sum += student["age"];
    }
  });
  return sum;
}

console.log(sumOfAge(students));
