'use strict';

class Student {
  public learn(): void {
    console.log('the student is actually learning');
  }

  public question(teacher: Teacher) {
      teacher.giveAnswer();
  }
}

class Teacher {
  public teach(student: Student) {
    student.learn();
  }

  public giveAnswer() {
    console.log('the teacher is answering a question');
  }
}

let MsBrown = new Teacher();
let Johnny = new Student();

Johnny.question(MsBrown);
MsBrown.teach(Johnny);