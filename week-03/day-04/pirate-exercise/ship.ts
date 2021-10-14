import { Pirate } from './pirate';

export class Ship {
  private crew: Pirate[];
  private alivePirates: number;
  private captain: Pirate;
  private captainIsAlive: boolean;
  private rumConsumedByCaptain: number;

  constructor() {
    this.crew = [];
    this.alivePirates = 0;
    this.captain = new Pirate();
    this.captainIsAlive = this.captain.getIsAlive();
    this.rumConsumedByCaptain = this.captain.getIntoxicationLevel();
  }

  public getCrew(): Pirate[] {
    return this.crew;
  }

  public getAlivePirates(): number {
    return this.alivePirates;
  }

  public getCaptain(): Pirate {
    return this.captain;
  }

  public getCaptainIsAlive(): boolean {
    return this.captainIsAlive;
  }

  public getRumConsumedByCaptain(): number {
    return this.rumConsumedByCaptain;
  }

  public fillShip(): void {
    let numOfPirates: number = Math.floor(Math.random() * 113);
    for (let i = 0; i <= numOfPirates; i++) {
      this.crew.push(new Pirate());
    }
    for (let j = 0; j < this.crew.length; j++) {
      if (this.crew[j].getIsAlive()) {
        this.alivePirates += 1;
      }
    }
  }

  public battle(otherShip: Ship): boolean {
    let scoreOfThis: number = this.alivePirates - this.rumConsumedByCaptain;
    let scoreOfOther: number =
      otherShip.getAlivePirates() - otherShip.getRumConsumedByCaptain();
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
    }
  }

  public haveParty() {
    let randomAmountOfRum: number = Math.floor(Math.random() * 200);
    for (let i = 0; i < randomAmountOfRum; i++) {
      this.captain.drinkSomeRum();
      this.crew.forEach((pirate) => {
        pirate.drinkSomeRum();
      });
    }
  }
}
