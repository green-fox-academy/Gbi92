'use strict';

import { HardCandy } from './hardCandy';
import { Lollipop } from './lollipop';
import { Sweet } from './sweet';

class CandyShop {
  private sugar: number;
  private income: number;
  private inventory: Sweet[];

  constructor(sugar: number) {
    this.sugar = sugar;
    this.income = 0;
    this.inventory = [];
  }

  public createSweet(sweet: Sweet): void {
    this.inventory.push(sweet);
    this.sugar -= sweet.getSugarAmount();
  }

  public raise(amount: number): void {
    this.inventory.forEach((sweet) => {
      sweet.setPrice(sweet.getPrice() + amount);
    });
  }

  public sell(amount: number, type: string) {
      //dunno
  }

  public buySugar(amount: number): void {
    if (this.income === 0) {
      throw 'You cannot buy anything. Income is: 0';
    }

    if (this.income - amount / 10 < 0) {
      throw 'Income is less than required amount';
    } else {
      this.sugar += amount;
      this.income -= amount / 10;
    }
  }

  public toString(): string {
    let countHardCandy: number = 0;
    let countLollipop: number = 0;
    this.inventory.forEach((sweet) => {
      sweet.getType() === 'lollipop' ? countLollipop++ : countHardCandy++;
    });
    return `Inventory: ${countHardCandy} hard candies, ${countLollipop} lollipops, Income: ${this.income}, Sugar: ${this.sugar} grams`;
  }
}
