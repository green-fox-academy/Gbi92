'use strict';

export class Student {
  private name: string;
  private age: number;
  private gender: string;
  private previousOrganization: string;
  private skippedDays: number;

  constructor(
    name: string,
    age: number,
    gender: string,
    previousOrganization: string
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.previousOrganization = previousOrganization;
    this.skippedDays = 0;
  }

  public introduce(): void {
    console.log(
      `Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} 
      from ${this.previousOrganization} who skipped ${this.skippedDays} days from the course already.`
    );
  }

  public getGoal(): void {
    console.log('My goal is: Be a junior software developer.');
  }

  public skipDays(numberOfDays: number): void {
    this.skippedDays += numberOfDays;
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

  public getSkippedDays(): number {
    return this.skippedDays;
  }

  public getPrevOrganization(): string {
    return this.previousOrganization;
  }
}
