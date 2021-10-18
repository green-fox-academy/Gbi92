'use strict';


export class Person {
  private name: string;
  private age: number;
  private gender: string;

  constructor(name: string = 'Jane Doe', age: number = 30, gender: string = 'female') {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender}.`);
  }

  public getGoal(): void {
    console.log('My goal is: Live for the moment!');
  }

  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  public getGender(): string {
    return this.gender;
  }
}