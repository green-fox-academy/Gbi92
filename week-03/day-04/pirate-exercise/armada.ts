'use strict';

import { Ship } from './ship';

export class Armada {
  private listOfShips: Ship[];

  constructor() {
    this.listOfShips = [];
  }

  public getListOfShips(): Ship[] {
    return this.listOfShips;
  }

  public fillArmada(): void {
    let numOfShips: number = Math.floor(Math.random() * 10);
    for (let i = 0; i <= numOfShips; i++) {
      const ship: Ship = new Ship();
      ship.fillShip();
      this.listOfShips.push(ship);
    }
  }

  public war(otherArmada: Armada): boolean {
    let i: number = 0,
      j: number = 0;
    while (
      i < this.getListOfShips().length &&
      j < otherArmada.getListOfShips().length
    ) {
      const winnerIsFirst: boolean = this.getListOfShips()[i].battle(
        otherArmada.getListOfShips()[j]
      );
      if (winnerIsFirst) {
        j++;
      } else {
        i++;
      }
    }
    return i !== this.getListOfShips().length;
  }
}
