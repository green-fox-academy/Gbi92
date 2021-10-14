import { Pirate } from './pirate';
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

let blackPearl = new Ship();
let wickedWench = new Ship();

blackPearl.fillShip();
wickedWench.fillShip();

console.log(blackPearl);
console.log(wickedWench);

wickedWench.haveParty();

let battle1 = new BattleApp(blackPearl, wickedWench);
console.log(battle1.startBattle());