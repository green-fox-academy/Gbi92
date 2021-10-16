'use strict';

export class Mentor {
  private name: string;
  private age: number;
  private gender: string;
  private level: string;

  constructor(name: string, age: number, gender: string, level: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.level = level;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} ${this.level} mentor.`);
  }

  public getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
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

  public getLevel(): string {
    return this.level;
  }
}