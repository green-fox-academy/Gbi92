'use strict';

export class Aircraft {
  protected currentAmmo: number;
  protected maxAmmo: number;
  protected baseDamage: number;
  protected type: string;
  protected isPriority: boolean;

  constructor(type: string, maxAmmo: number, baseDamage: number, isPriority: boolean) {
    this.type = type;
    this.currentAmmo = 0;
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.isPriority = isPriority;
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
    // another solution:
    // let smaller: number = Math.min(stationAmmo, currentMaxAmmo);
    // this.currentAmmo += smaller;
    // return stationAmmo - smaller;
  }

  public getStatus(): string {
    return `Type ${this.type}, Ammo: ${this.currentAmmo}, Base Damage: ${
      this.baseDamage
    }, All Damage: ${this.baseDamage * this.currentAmmo}`;
  }

  public getIsPriority(): boolean {
    return this.isPriority;
  }

  public getType(): string {
    return this.type;
  }

  public getCurrentAmmo(): number {
    return this.currentAmmo;
  }

  public getMaxAmmo(): number {
    return this.maxAmmo;
  }

  public getBaseDamage(): number {
    return this.baseDamage;
  }
}
