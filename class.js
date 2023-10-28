class Student {
  name;
  grade;
  age;

  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  study() {
    console.log(
      `${this.age}살의 ${this.name}은 열심히 공부 해서 ${this.g의rade}받음`,
    );
  }
}

let studentB = new Student("홍길동", "A+", 20);
studentB.study();

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const student1 = new StudentDeveloper("rin", "A+", 24, "js");
student1.programming();
