import test from 'tape';
import MyClass from './myClass';

test('getApple method is returning apple', (t) => {
  const testClass: MyClass = new MyClass();
  t.equal(testClass.getApple(), 'apple');
  t.end();
});

test('sum method is returning the sum of the elements', (t) => {
  const testClass: MyClass = new MyClass();
  const numArray: number[] = [1, 2, 3, 4];
  t.equal(testClass.sum(numArray), 10);
  t.end();
});

test('sum method throws error on empty array', (t) => {
  const testClass: MyClass = new MyClass();
  const emptyArray: number[] = [];
  t.throws(() => testClass.sum(emptyArray));
  t.end();
});

test('if list has one element sum method is returning the element', (t) => {
  const testClass: MyClass = new MyClass();
  const numArray: number[] = [3];
  t.equal(testClass.sum(numArray), 3);
  t.end();
});
