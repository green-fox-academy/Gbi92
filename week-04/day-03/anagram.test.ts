import test from 'tape';
import { areAnagrams } from './anagram';

test('strings are anagrams', (t) => {
  const str1: string = 'silent';
  const str2: string = 'listen';
  t.ok(areAnagrams(str1, str2));
  t.end();
});

test('strings are not anagrams', (t) => {
  const str1: string = 'parrot';
  const str2: string = 'house';
  t.notOk(areAnagrams(str1, str2));
  t.end();
});

test('throws error on empty strings', (t) => {
  const str1: string = '';
  const str2: string = '';
  t.throws(() => areAnagrams(str1, str2));
  t.end();
});
