import test from 'tape';
import fibonacci from './fibonacci';

test('fibonacci function returns 0 when given index is 1', (t) => {
  t.equal(fibonacci(1), 0);
  t.end();
});

test('fibonacci function returns 1 when given index is 2', (t) => {
  t.equal(fibonacci(2), 1);
  t.end();
});

test('fibonacci function throws error on 0 or negative number', (t) => {
  t.throws(() => fibonacci(-1));
  t.end();
});

test('fibonacci function returns member of the fibonacci sequence by the given index', (t) => {
  t.equal(fibonacci(4), 2);
  t.end();
});
