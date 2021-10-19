'use strict';

export abstract class Animal {
  protected name: string;
  protected age: number;
  protected gender: string;
  protected hunger: number;

  constructor(name: string, age?: number, gender?: string) {
    this.name = name;
    this.age = age ?? 0;
    this.gender = gender ?? '';
    this.hunger = 10;
  }

  public getName(): string {
    return this.name;
  }

  public eat(): void {
    this.hunger -= 1;
  }

  public abstract breed(): string;
}
