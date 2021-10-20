import test from 'tape';
import { areAnagrams } from './anagram';

test('areAnagrams function returns true if strings are anagrams', (t) => {
  const str1: string = 'silent';
  const str2: string = 'listen';
  t.equal(areAnagrams(str1, str2), true);
  t.end();
});

test('areAnagrams function returns false if strings are not anagrams', (t) => {
  const str1: string = 'parrot';
  const str2: string = 'house';
  t.equal(areAnagrams(str1, str2), false);
  t.end();
});

test('areAnagrams function throws error on empty strings', (t) => {
  const str1: string = '';
  const str2: string = '';
  t.throws(() => areAnagrams(str1, str2));
  t.end();
});
