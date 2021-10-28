'use strict';

export abstract class Sweet {
  protected type: string;
  protected price: number;
  protected sugarAmount: number;

  constructor(type: string, price: number, sugarAmount: number) {
    this.type = type;
    this.price = price;
    this.sugarAmount = sugarAmount;
  }

  public getType(): string {
    return this.type;
  }

  public getPrice(): number {
    return this.price;
  }

  public getSugarAmount(): number {
    return this.sugarAmount;
  }

  public setPrice(amount: number): void {
    this.price = amount;
  }
}
