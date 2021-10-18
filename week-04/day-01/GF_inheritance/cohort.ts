'use strict';

import { Mentor } from './mentor';
import { Student } from './student';

export class Cohort {
  private name: string;
  private students: Student[];
  private mentors: Mentor[];

  constructor(name: string) {
    this.name = name;
    this.students = [];
    this.mentors = [];
  }

  public addStudent(student: Student): void {
    this.students.push(student);
  }

  public addMentor(mentor: Mentor): void {
    this.mentors.push(mentor);
  }

  public info(): void {
    console.log(
      `The ${this.name} cohort has ${this.students.length} students and ${this.mentors.length} mentors.`
    );
  }

  public getName(): string {
    return this.name;
  }

  public getStudents(): Student[] {
    return this.students;
  }

  public getMentors(): Mentor[] {
    return this.mentors;
  }
}
