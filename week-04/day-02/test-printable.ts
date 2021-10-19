'use strict';

import { Domino } from './domino';
import { Todo } from './todo';

let dominoes = [new Domino(3, 2), new Domino(4, 3), new Domino(2, 5)];
let todos = [
  new Todo('Buy milk', 'high', true),
  new Todo('Go runing', 'high', false),
];

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}
