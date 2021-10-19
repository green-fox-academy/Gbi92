'use strict';

import { StringedInstrument } from './stringed-instrument';

export class ElectricGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 6) {
    super('Electric Guitar', numberOfStrings);
  }

  public sound(): string {
    return 'Twang';
  }
}
