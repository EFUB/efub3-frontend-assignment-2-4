let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};
// -> 동일한 형태의 객체를 다수 생성 시 비효율적

class Student {
  // 필드
  name: string;
  grade: string;
  age: number;

  // 생성자
  constructor(name: string, grade: string, age: number) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부함");
  }
}

let studentB = new Student("홍길동", "A+", 27);

studentB.study();

class StudentDeveloper extends Student {
  // 필드
  favoriteSkill: string;

  // 생성자
  constructor(name: string, grade: string, age: number, favoriteSkill: string) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함`);
  }
}
