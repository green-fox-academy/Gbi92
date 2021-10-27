'use strict';

import test from 'tape';
import { add, maxOfThree, median, isVowel, translate } from './extension';

test('add: 3 and 3 is 6', function (t: any): any {
  t.equal(add(3, 3), 6);
  t.end();
});

test('add: -1 and 4 is 3', function (t: any): any {
  t.equal(add(-1, 4), 3);
  t.end();
});

test('max of three: 8', function (t: any): any {
  t.equal(maxOfThree(5, 4, 8), 8);
  t.end();
});

test('max of three: 5', function (t: any): any {
  t.equal(maxOfThree(3, 4, 5), 5);
  t.end();
});

test('median: four', function (t: any): any {
  t.equal(median([7, 5, 3, 5]), 5);
  t.end();
});

test('median: five', function (t: any): any {
  t.equal(median([1, 2, 13, 14, 25]), 13);
  t.end();
});

test('is vowel: A', function (t: any): any {
  t.ok(isVowel('A'));
  t.end();
});

test('is vowel: u', function (t: any): any {
  t.ok(isVowel('u'));
  t.end();
});

test('is vowel: v', function(t: any): any {
  t.notOk(isVowel('v'));
  t.end();
});

test('translate: tavasz', function (t: any): any {
  t.equal(translate('tavasz'), 'tavavavasz');
  t.end();
});

test('translate: lagopus', function (t: any): any {
  t.equal(translate('lagopus'), 'lavagovopuvus');
  t.end();
});