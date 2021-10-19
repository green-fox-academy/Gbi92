'use strict';

import { StringedInstrument } from './stringed-instrument';

export class Violin extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('Violin', numberOfStrings);
  }

  public sound(): string {
    return 'Screech';
  }
}
