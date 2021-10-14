import { Sharpie } from './sharpie';

export class SharpieSet {
  private listOfSharpies: Sharpie[];

  constructor() {
    this.listOfSharpies = [];
  }

  public getListOfSharpies(): Sharpie[] {
    return this.listOfSharpies;
  }

  public add(sharpie: Sharpie): void {
    this.listOfSharpies.push(sharpie);
  }

  public countUsable(): number {
    let counter: number = 0;
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].getInkAmount() > 0) {
        counter++;
      }
    }
    return counter;
  }

  public removeTrash(): void {
    for (let i = 0; i < this.listOfSharpies.length; i++) {
      if (this.listOfSharpies[i].getInkAmount() === 0) {
        this.listOfSharpies.splice(i, 1);
      }
    }
  }
}
