import { Animal } from './animal';

export class Farm {
  private listOfAnimals: Animal[];
  private limit: number;

  constructor(limit: number) {
    this.listOfAnimals = [];
    this.limit = limit;
  }

  public getListOfAnimals(): Animal[] {
    return this.listOfAnimals;
  }

  public getLimit(): number {
      return this.limit;
  }

  public breed(): void {
    if (this.listOfAnimals.length < this.limit) {
      this.listOfAnimals.push(new Animal());
    } else {
      console.log('Sorry, the farm is full.');
    }
  }

  public sell(): void {
    let leastHungry: Animal = this.listOfAnimals[0];
    let indexOfLeastHungry: number = 0;
    for (let i = 0; i < this.listOfAnimals.length; i++) {
      if (this.listOfAnimals[i].getHunger() < leastHungry.getHunger()) {
        leastHungry = this.listOfAnimals[i];
        indexOfLeastHungry = i;
      }
    }
    this.listOfAnimals.splice(indexOfLeastHungry, 1);
  }
}
