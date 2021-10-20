import test from 'tape';
import { countLetters } from './count-letters';

test('sanity test', (t) => {
  const obj1: any = {
    a: 1,
    b: 2,
  };

  const obj2: any = {
    a: 1,
    b: 2,
  };
  t.deepEqual(obj1, obj2);
  t.end();
});

test('countLetters function returns object of letter occurences of string', (t) => {
  const testStr: string = 'better';
  t.deepEqual(countLetters(testStr), { b: 1, e: 2, t: 2, r: 1 });
  t.end();
});

test('countLetters function throws error on empty string', (t) => {
  const str: string = '';
  t.throws(() => countLetters(str));
  t.end();
});
