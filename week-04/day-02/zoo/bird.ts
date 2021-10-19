'use strict';

import { Flyable } from '../flyable';
import { Animal } from './animal';

export class Bird extends Animal implements Flyable {
  constructor(name: string, age?: number, gender?: string) {
    super(name, age, gender);
  }

  public breed(): string {
    return 'laying eggs';
  }

  land(): void {
    console.log('I can land on anywhere if I fit.');
  }
  fly(): void {
    console.log('I fly with my own wings.');
  }
  takeOff(): void {
    console.log('I can take off by myself anytime I want.');
  }
}
