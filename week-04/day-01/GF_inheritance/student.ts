'use strict';

import { Person } from './person';

export class Student extends Person {
  private previousOrganization: string;
  private skippedDays: number;

  constructor(
    name?: string,
    age?: number,
    gender?: string,
    previousOrganization: string = 'The School of Life'
  ) {
    super(name, age, gender);
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  public introduce(): void {
    console.log(
      `Hi, I'm ${this.getName()}, a ${this.getAge()} year old ${this.getGender()} from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`
    );
  }

  public getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  public skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
  }

  public getSkippedDays(): number {
    return this.skippedDays;
  }

  public getPrevOrganization(): string {
    return this.previousOrganization;
  }
}

