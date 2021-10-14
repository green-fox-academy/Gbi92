'use strict';

export class Pirate {
  private intoxicationLevel: number;
  private isAlive: boolean;

  constructor() {
    this.intoxicationLevel = 0;
    this.isAlive = true;
  }

  public getIntoxicationLevel(): number {
    return this.intoxicationLevel;
  }

  public getIsAlive(): boolean {
    return this.isAlive;
  }

  public drinkSomeRum(): void {
    if (!this.isAlive) {
      console.log(`Arrgh..he's dead`);
    } else {
      this.intoxicationLevel += 1;
    }
  }

  public howsItGoingMate() {
    if (!this.isAlive) {
      console.log(`Arrgh..he's dead`);
    } else {
      if (this.intoxicationLevel < 4) {
        console.log('Pour me anudder!');
      } else {
        console.log(`Arghh, I'ma Pirate. How d'ya d'ink its goin?`);
        this.intoxicationLevel = 0;
      }
    }
  }

  public brawl(pirate: Pirate) {
    let chance: number = Math.floor(Math.random() * 3);
    if (this.isAlive && pirate.isAlive) {
      switch (chance) {
        case 0:
          this.die();
          break;
        case 1:
          pirate.die();
          break;
        case 2:
          this.die();
          pirate.die();
          break;
      }
    }
  }

  public die() {
    this.isAlive = false;
  }
}
