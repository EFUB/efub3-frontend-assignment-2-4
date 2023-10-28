// 학생 클래스 생성
class Student {
  //필드에 타입도 함께 명시
  private name: string = "";
  public grade: string = "";
  protected age: number = 0;

  //생성자
  constructor(name: string, grade: string, age: number) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  study() {
    console.log("열심히 공부함");
  }
}

// ts 상속
class StudentDelveloper extends Student {
  favoriteSkill: string = "";

  //자식 클래스에서 생성자를 정의했다면 반드시  생성자의 최상단에 super메서드를 호출
  constructor(name: string, grade: string, age: number, favoriteSkill: string) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

let studentA = new Student("gustn", "a", 22);

studentA.study(); // 열심히 공부함

// 필드 생략하기
//생성자의 인자에 타입과 접근제어자 설정해주면 필드와 this.필드를 생략할 수 있다.
class StudentB {
  //생성자
  constructor(
    private name: string,
    public grade: string,
    protected age: number
  ) {}
  study() {
    console.log("열심히 공부함");
  }
}
