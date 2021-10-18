'use strict';

import { Person } from './person';

export class Mentor extends Person {
  private level: string;

  constructor(name?: string, age?: number, gender?: string, level: string = 'intermediate') {
    super(name, age, gender);
    this.level = level;
  }

  public introduce(): void {
    console.log(
      `Hi, I'm ${this.getName()}, a ${this.getAge()} year old ${this.getGender()} ${this.level} mentor.`
    );
  }

  public getGoal(): void {
    console.log('My goal is: Educate brilliant junior software developers.');
  }

  public getLevel(): string {
    return this.level;
  }
}
