'use strict';

import { Ship } from './ship';

class BattleApp {
  private shipOne: Ship;
  private shipTwo: Ship;

  constructor(shipOne: Ship, shipTwo: Ship) {
    this.shipOne = shipOne;
    this.shipTwo = shipTwo;
  }

  public getShipOne(): Ship {
    return this.shipOne;
  }

  public getShipTwo(): Ship {
    return this.shipTwo;
  }

  public startBattle(): boolean {
    return this.shipOne.battle(this.shipTwo);
  }
}

let blackPearl: Ship = new Ship();
let wickedWench: Ship = new Ship();

blackPearl.fillShip();
wickedWench.fillShip();

console.log('This is the BlackPearl crew \n');
console.log(blackPearl);
console.log('This is the WickedWench crew \n');
console.log(wickedWench);

let battle1 = new BattleApp(blackPearl, wickedWench);
console.log(battle1.startBattle());

console.log('This is the BlackPearl crew after battle \n');
console.log(blackPearl);
console.log('This is the WickedWench crew after battle \n');
console.log(wickedWench);
