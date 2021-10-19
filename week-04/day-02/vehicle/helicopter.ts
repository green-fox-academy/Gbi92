'use strict';

import { Flyable } from '../flyable';
import { Vehicle } from './vehicle';

class Helicopter extends Vehicle implements Flyable {
  constructor(color: string, speed: number, age: number) {
    super(color, speed, age);
  }

  land(): void {
    console.log('I can land on stable flat fields.');
  }
  fly(): void {
    console.log('I fly with rotating wings, called blades.');
  }
  takeOff(): void {
    console.log('I can take off with a pilot on board.');
  }
}
