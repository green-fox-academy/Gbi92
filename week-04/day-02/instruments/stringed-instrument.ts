'use strict';

import { Instrument } from './instrument';

export abstract class StringedInstrument extends Instrument {
  protected numberOfStrings: number;

  constructor(name: string, numberOfStrings: number) {
    super(name);
    this.numberOfStrings = numberOfStrings;
  }

  public abstract sound(): string;

  public play(): void {
    console.log(
      `${this.name}, a ${this.numberOfStrings}-stringed instrument that goes ${this.sound()}`
    );
  }
}
