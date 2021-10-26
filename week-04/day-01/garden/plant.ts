'use strict';

export class Plant {
  protected color: string;
  protected waterAmount: number;
  private absorption: number;
  private type: string;

  constructor(type: string, color: string, absorption: number) {
    this.type = type;
    this.color = color;
    this.waterAmount = 0;
    this.absorption = absorption;
  }

  public getNeedsWater(): boolean {
    return this.waterAmount < 5;
  }

  public absorbWater(plusWater: number): void {
    this.waterAmount += plusWater * this.absorption;
  }

  public getColor(): string {
    return this.color;
  }

  public getWaterAmount(): number {
    return this.waterAmount;
  }

  public getAbsorption(): number {
    return this.absorption;
  }

  public getType(): string {
    return this.type;
  }
}
