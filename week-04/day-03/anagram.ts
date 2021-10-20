'use strict';

export function areAnagrams(word1: string, word2: string): boolean {
  if (word1 === '' || word2 === '') {
    throw 'Empty strings cannot be anagrams';
  }
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}
