'use strict';

import { Aircraft } from './aircraft';

class Carrier {
  private aircraftList: Aircraft[];
  private ammoStorage: number;
  private healthPoint: number;

  constructor(ammoStorage: number, healthPoint: number) {
    this.aircraftList = [];
    this.ammoStorage = ammoStorage;
    this.healthPoint = healthPoint;
  }

  public add(aircraft: Aircraft): void {
    this.aircraftList.push(aircraft);
  }

  public countRequiredAmmo(): number {
    let requiredAmmoAmount: number = 0;
    this.aircraftList.forEach((aircraft) => {
      let ammoDeficit: number =
        aircraft.getMaxAmmo() - aircraft.getCurrentAmmo();
      requiredAmmoAmount += ammoDeficit;
    });
    return requiredAmmoAmount;
  }

  public fill(): void {
    if (this.ammoStorage === 0) {
      throw 'Ammunition storage is empty';
    }
    if (this.countRequiredAmmo() > this.ammoStorage) {
      this.aircraftList.forEach((aircraft) => {
        if (aircraft.isPriority()) {
          let remainingAmmo: number = aircraft.refillAmmo(this.ammoStorage);
          this.ammoStorage = remainingAmmo;
          // meg ha marad, hogy kene, h utana a nem priokat is toltse, amennyit tud?
        }
      });
    } else {
      this.aircraftList.forEach((aircraft) => {
        let remainingAmmo: number = aircraft.refillAmmo(this.ammoStorage);
        this.ammoStorage = remainingAmmo;
      });
    }
  }

  public fight(enemy: Carrier) {
    this.aircraftList.forEach((aircraft) => {
      let damage: number = aircraft.fight();
      enemy.setHealthPoint(enemy.getHealthPoint() - damage);
    });
  }

  public getStatus(): string {
    if (this.healthPoint === 0) {
      return "It's dead Jim :(";
    }
    let totalDamage: number = 0;
    this.aircraftList.forEach((aircraft) => {
      let damageOfAircraft: number =
        aircraft.getBaseDamage() * aircraft.getCurrentAmmo();
      totalDamage += damageOfAircraft;
    });
    return `HP: ${this.healthPoint}, Aircraft count: ${
      this.aircraftList.length
    }, Ammo Storage: ${this.ammoStorage}, Total damage: ${totalDamage}
    Aircrafts:
    ${this.aircraftList.forEach((aircraft) => aircraft.getStatus())}
    `;
  }

  public getAircraftList(): Aircraft[] {
    return this.aircraftList;
  }

  public getAmmoStorage(): number {
    return this.ammoStorage;
  }

  public getHealthPoint(): number {
    return this.healthPoint;
  }

  public setHealthPoint(point: number): void {
    this.healthPoint = point;
  }
}
