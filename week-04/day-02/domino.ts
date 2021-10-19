'use strict';

import { Printable } from './printable';

export class Domino implements Printable {
  private sideA: number;
  private sideB: number;

  constructor(sideA: number, sideB: number) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  public getSideA(): number {
    return this.sideA;
  }

  public getSideB(): number {
    return this.sideB;
  }

  public printAllFields(): void {
    console.log(`Domino A side: ${this.sideA}, B side: ${this.sideB}`);
  }
}
