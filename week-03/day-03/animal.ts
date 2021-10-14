'use strict';

class Animal {
  private _hunger: number;
  private _thirst: number;

  constructor() {
    this._hunger = 50;
    this._thirst = 50;
  }

  public eat(): void {
    this._hunger--;
  }

  public drink(): void {
    this._thirst--;
  }

  public play(): void {
    this._hunger++;
    this._thirst++;
  }

  public getHunger(): number {
    return this._hunger;
  }

  public getThirst(): number {
    return this._thirst;
  }
}
