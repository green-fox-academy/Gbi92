'use strict';

import { StringedInstrument } from './stringed-instrument';

export class BassGuitar extends StringedInstrument {
  constructor(numberOfStrings: number = 4) {
    super('Bass Guitar', numberOfStrings);
  }

  public sound(): string {
    return 'Duum-duum-duum';
  }
}
