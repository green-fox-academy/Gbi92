'use strict';

import { Animal } from './animal';

export class Reptile extends Animal {
  constructor(name: string, age?: number, gender?:string) {
    super(name, age, gender);
  }

  public breed(): string {
    return 'laying eggs';
  }
}
