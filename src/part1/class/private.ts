class PrivateElmployee {
  // 필드
  private name: string;
  public age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, positon: string) {
    this.name = name;
    this.age = age;
    this.position = positon;
  }

  // 메서드
  work() {
    console.log(`${this.name}이 일함`); // 여기서는 접근 가능
  }
}

const employee = new PrivateElmployee("이정환", 27, "developer");

// employee.name = "홍길동"; 오류
employee.age = 30;
employee.position = "디자이너";
