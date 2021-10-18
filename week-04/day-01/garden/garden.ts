'use strict';

import { Plant } from './plant';
import { Flower } from './flower';
import { Tree } from './tree';

class Garden {
  private plants: Plant[];

  constructor() {
    this.plants = [];
  }

  public fillGarden(plant: Plant): void {
    this.plants.push(plant);
  }

  public getStateOfGarden(): void {
    this.plants.forEach((plant) => {
      if (plant instanceof Flower) {
        if (plant.getNeedsWater()) {
          console.log(`The ${plant.getColor()} Flower needs water`);
        } else {
          console.log(`The ${plant.getColor()} Flower doesn't need water`);
        }
      }
      if (plant instanceof Tree) {
        if (plant.getNeedsWater()) {
          console.log(`The ${plant.getColor()} Tree needs water`);
        } else {
          console.log(`The ${plant.getColor()} Tree doesn't need water`);
        }
      }
    });
  }

  public waterPlants(plusWater: number): void {
    console.log(`Watering with ${plusWater}`);
    
    let wateringCounter: number = 0;

    this.plants.forEach((plant) => {
      if (plant.getNeedsWater()) {
        wateringCounter++;
      }
    });

    this.plants.forEach((plant) => {
      if (plant.getNeedsWater()) {
        plant.absorbWater(plusWater / wateringCounter);
      }
    });
  }

  public getPlants(): Plant[] {
    return this.plants;
  }
}

let myGarden = new Garden();
let flower1 = new Flower('yellow');
let flower2 = new Flower('blue');
let tree1 = new Tree('purple');
let tree2 = new Tree('orange');

myGarden.fillGarden(flower1);
myGarden.fillGarden(flower2);
myGarden.fillGarden(tree1);
myGarden.fillGarden(tree2);

myGarden.getStateOfGarden();

myGarden.waterPlants(40);
//console.log(myGarden.getPlants());
myGarden.getStateOfGarden();

myGarden.waterPlants(70);
myGarden.getStateOfGarden();
//console.log(myGarden.getPlants());
