'use strict';

class Aircraft {
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
    if (stationAmmo > this.maxAmmo) {
      let remaining: number = stationAmmo - this.maxAmmo;
      return remaining;
    }
    //not complete
  }

  public getType(): string {
      return this.type;
  }

  public getStatus(): string {
      return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${this.baseDamage}, All Damage: ${this.fight()}`;
  }
}
