'use strict';

//Redo the 5 trees homework (with classes)

class Tree {
  private type: string;
  private leafColor: string;
  private age: number;
  private sex: string;

  constructor(type: string, leafColor: string, age: number, sex: string) {
    this.type = type;
    this.leafColor = leafColor;
    this.age = age;
    this.sex = sex;
  }

  public getType(): string {
    return this.type;
  }

  public getLeafColor(): string {
    return this.leafColor;
  }

  public getAge(): number {
    return this.age;
  }

  public getSex(): string {
    return this.sex;
  }
}

let oak: Tree = new Tree('oak', 'green', 120, 'F');
let mapleOak: Tree = new Tree('maple oak', 'red', 150, 'F');
let pine: Tree = new Tree('pine', 'evergreen', 70, 'M');
let palm: Tree = new Tree('palm', 'dark green', 40, 'M');
let willow: Tree = new Tree('willow', 'light green', 28, 'F');
