'use strict';

export class Aircraft {
  protected currentAmmo: number;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected type: string;

  constructor(type: string, maxAmmo: number, baseDamage: number) {
    this.type = type;
    this.currentAmmo = 0;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
  }

  public fight(): number {
    let damage: number = this.baseDamage * this.currentAmmo;
    this.currentAmmo = 0;
    return damage;
  }

  public refillAmmo(stationAmmo: number): number {
    let currentMaxAmmo: number = this.maxAmmo - this.currentAmmo;
    if (stationAmmo > currentMaxAmmo) {
      this.currentAmmo += currentMaxAmmo;
      return stationAmmo - currentMaxAmmo;
    } else {
      this.currentAmmo += stationAmmo;
      return 0;
    }
    // let smaller: number = Math.min(stationAmmo, currentMaxAmmo);
    // this.currentAmmo += smaller;
    // return stationAmmo - smaller;
  }

  public getType(): string {
    return this.type;
  }

  public getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${
      this.baseDamage
    }, All Damage: ${this.fight()}`;
  }
}
