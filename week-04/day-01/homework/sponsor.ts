'use strict';

export class Sponsor {
  private name: string;
  private age: number;
  private gender: string;
  private company: string;
  private hiredStudents: number;

  constructor(name: string, age: number, gender: string, company: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.company = company;
    this.hiredStudents = 0;
  }

  public introduce(): void {
    console.log(`Hi, I'm ${this.name}, a ${this.age} year old ${this.gender} who 
    represents ${this.company} and hired ${this.hiredStudents} students so far.`);
  }

  public getGoal(): void {
    console.log('My goal is: Hire brilliant junior software developers.');
  }

  public hire(): void {
    this.hiredStudents += 1;
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

  public getCompany(): string {
    return this.company;
  }

  public getHiredStudents(): number {
    return this.hiredStudents;
  }
}
