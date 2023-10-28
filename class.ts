class Employee {
  name: string = "";
  age: number = 0;
  position: string = " ";
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  work() {
    console.log("일하기");
  }
}

class Executive extends Employee {
  officeNumber: number;
  constructor(
    name: string,
    age: number,
    position: string,
    offiiceNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = offiiceNumber;
  }
}

class Employee2 {
  private name: string;
  protected age: number;
  public position: string;
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee2 {
  func() {
    //this.name; ❌private 파생클래스에서 접근 불가
    this.age;
  }
}

const employee2 = new Employee2("린", 24, "developer");

//employee2.name = "혜린";  ❌private 인스턴스에서 접근 불가
//employee2.age = 20; ❌protected는 인스턴스에서 접근 불가
employee2.position = "designer";

//필드 생략하기
class Employee3 {
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}
  work() {
    console.log(`${this.name} 일함`);
  }
}
