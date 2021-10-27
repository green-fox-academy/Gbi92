import test from 'tape';
import { Sharpie } from '../../week-03/day-03/sharpie';

test('Sharpie is instantiated with 100 inkAmount', (t) => {
  const mySharpie: Sharpie = new Sharpie('blue', 10);
  t.equal(mySharpie.getInkAmount(), 100, 'ink amount is 100');
  t.end();
});

test('Sharpie use decreases inkAmount by 10', (t) => {
  const mySharpie: Sharpie = new Sharpie('blue', 10);
  mySharpie.use();
  t.equal(mySharpie.getInkAmount(), 90);
  t.end();
});
