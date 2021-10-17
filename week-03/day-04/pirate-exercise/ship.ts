'use strict';

import { Pirate } from './pirate';

export class Ship {
  private crew: Pirate[];
  private aliveCrewMembers: number;
  private captain: Pirate;

  constructor() {
    this.crew = [];
    this.aliveCrewMembers = 0;
    this.captain = new Pirate();
  }

  public getCrew(): Pirate[] {
    return this.crew;
  }

  public getAlivePirates(): number {
    return this.aliveCrewMembers;
  }

  public getCaptain(): Pirate {
    return this.captain;
  }

  public fillShip(): void {
    let numOfPirates: number = Math.floor(Math.random() * 113);
    for (let i = 0; i <= numOfPirates; i++) {
      this.crew.push(new Pirate());
    }
    this.aliveCrewMembers = this.crew.length;
  }

  public battle(otherShip: Ship): boolean {
    let scoreOfThis: number =
      this.aliveCrewMembers - this.captain.getIntoxicationLevel();
    let scoreOfOther: number =
      otherShip.getAlivePirates() - otherShip.captain.getIntoxicationLevel();
    if (scoreOfThis > scoreOfOther) {
      otherShip.generateLosses();
      this.haveParty();
      return true;
    } else {
      this.generateLosses();
      otherShip.haveParty();
      return false;
    }
  }

  public generateLosses() {
    let randomDeath: number = Math.floor(Math.random() * this.crew.length);
    for (let i = 0; i < randomDeath; i++) {
      this.crew[i].die();
      this.aliveCrewMembers--;
    }
  }

  public haveParty() {
    let randomAmountOfRum: number = Math.floor(Math.random() * 200);
    for (let i = 0; i < randomAmountOfRum; i++) {
      this.captain.drinkSomeRum();
    }
    this.crew.forEach((pirate) => {
      let randomAmountOfRum: number = Math.floor(Math.random() * 200);
      for (let i = 0; i < randomAmountOfRum; i++) {
        pirate.drinkSomeRum();
      }
    });
  }
}
