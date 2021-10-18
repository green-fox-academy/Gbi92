'use strict';

import { Person } from './person';

export class Sponsor extends Person {
  private company: string;
  private hiredStudents: number;

  constructor(name?: string, age?: number, gender?: string, company: string = 'Google') {
    super(name, age, gender);
    this.company = company;
    this.hiredStudents = 0;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this.getName()}, a ${this.getAge()} year old ${this.getGender()} who represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  public hire(): void {
    this.hiredStudents += 1;
  }

  public getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  public getCompany(): string {
    return this.company;
  }

  public getHiredStudents(): number {
    return this.hiredStudents;
  }
}
