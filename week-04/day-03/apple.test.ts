import test from 'tape';
import Apple from './apple';

test('Apple getApple is returning apple', (t) => {
  const myApple: Apple = new Apple();
  t.equal(myApple.getApple(), 'apple', 'return value is apple');
  t.end();
});
