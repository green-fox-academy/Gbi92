'use strict';

export function add(a: number, b: number): number {
  return a + b;
}

export function maxOfThree(a: number, b: number, c: number): number {
  return Math.max(a, b, c);
}

export function median(pool: number[]): number {
  let median: number = 0;
  let index: number = 0;
  pool.sort((a, b) => a - b);
  if (pool.length % 2 === 0) {
    index = pool.length / 2;
    median = (pool[index - 1] + pool[index]) / 2;
  } else {
    index = Math.ceil(pool.length / 2);
    median = pool[index - 1];
  }
  return median;
}

export function isVowel(character: string): boolean {
  return ['a', 'u', 'o', 'e', 'i'].some((vowel) => vowel === character);
}

export function translate(hungarian: string): string {
  let teve = hungarian.split('');

  for (let i = 0; i < hungarian.length; i++) {
    let c = hungarian[i];
    if (isVowel(c)) {
      teve.splice(i, 1, `${c}v${c}`);
    }
  }
  return teve.join('');
}

// Check out the folder. There's a work file and a test file.

//  -  Run the tests, all 11 should be green (passing).
//  -  The implementations though are not quite good.
//  -  Create tests that'll fail, and will show how the implementations are wrong(You can assume that the implementation of join and split are good)
//  -  After creating the tests, fix the implementations
//  -  Check again, if you can create failing tests
//  -  Implement if needed
