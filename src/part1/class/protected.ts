class ProtectedEmployee {
  // 필드
  private name: string;
  protected age: number;
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

class ProtectedExecutiveOfficer extends ProtectedEmployee {
  // 메서드
  func() {
    // this.name; 오류
    this.age; // 가능
  }
}

const employee2 = new ProtectedEmployee("이정환", 27, "developer");

// employee2.name = "홍길동"; 오류
// employee2.age = 30; 오류
employee2.position = "디자이너";
