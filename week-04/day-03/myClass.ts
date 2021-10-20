'use strict';

export default class MyClass {
  public getApple(): string {
    return 'apple';
  }

  public sum(intList: number[]): number {
    if (intList === []) {
      throw 'Array should not be empty!';
    }
    return intList.reduce((prev, current) => prev + current);
  }
}

let myC = new MyClass();

console.log(myC.sum([3]));

