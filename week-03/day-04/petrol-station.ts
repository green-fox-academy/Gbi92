'use strict';

class Station {
  private gasAmount: number;

  constructor(gasAmount: number) {
    this.gasAmount = gasAmount;
  }

  public getGasAmount(): number {
    return this.gasAmount;
  }

  public refill(car: Car) {
    this.gasAmount -= car.getCapacity();
    car.setGasAmount(car.getCapacity());
  }
}

class Car {
  private gasAmount: number;
  private capacity: number;

  constructor() {
    this.gasAmount = 0;
    this.capacity = 100;
  }

  public getCapacity(): number {
    return this.capacity;
  }

  public getGasAmount(): number {
    return this.gasAmount;
  }

  public setGasAmount(amount: number): void {
    this.gasAmount = amount;
  }
}

let mol = new Station(300);
let suzuki = new Car();

mol.refill(suzuki);
console.log(mol);
console.log(suzuki);
