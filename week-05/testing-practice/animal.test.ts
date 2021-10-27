import test from 'tape';
import { Animal } from '../../week-03/day-03/animal';

test('Animal is instantiated with 50 hunger', (t) => {
  const myAnimal: Animal = new Animal();
  t.equal(myAnimal.getHunger(), 50, 'hunger value is 50');
  t.end();
});

test('Animal is instantiated with 50 thirst', (t) => {
  const myAnimal: Animal = new Animal();
  t.equal(myAnimal.getThirst(), 50, 'thirst value is 50');
  t.end();
});

test('Animal eat decreases hunger by 1', (t) => {
  const myAnimal: Animal = new Animal();
  myAnimal.eat();
  t.equal(myAnimal.getHunger(), 49);
  t.end();
});

test('Animal drink decreases thirst by 1', (t) => {
  const myAnimal: Animal = new Animal();
  myAnimal.drink();
  t.equal(myAnimal.getThirst(), 49);
  t.end();
});

test('Animal play increases thirst by 1', (t) => {
  const myAnimal: Animal = new Animal();
  myAnimal.play();
  t.equal(myAnimal.getThirst(), 51);
  t.end();
});

test('Animal play increases hunger by 1', (t) => {
  const myAnimal: Animal = new Animal();
  myAnimal.play();
  t.equal(myAnimal.getHunger(), 51);
  t.end();
});
