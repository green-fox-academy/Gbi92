'use strict';

import { Armada } from './armada';

class WarApp {
  private armadaOne: Armada;
  private armadaTwo: Armada;

  constructor(armadaOne: Armada, armadaTwo: Armada) {
    this.armadaOne = armadaOne;
    this.armadaTwo = armadaTwo;
  }

  public getArmadaOne(): Armada {
    return this.armadaOne;
  }

  public getArmadaTwo(): Armada {
    return this.armadaTwo;
  }

  public startWar(): boolean {
    return this.armadaOne.war(this.armadaTwo);
  }
}

let spanishArmada: Armada = new Armada();
let englishArmada: Armada = new Armada();

spanishArmada.fillArmada();
englishArmada.fillArmada();

console.log('Spanish armada \n');
console.log(spanishArmada);
console.log('English armada \n');
console.log(englishArmada);

let war1 = new WarApp(spanishArmada, englishArmada);
console.log(war1.startWar());

console.log('Spanish armada after war \n');
console.log(spanishArmada);
console.log('English armada after war \n');
console.log(englishArmada);
