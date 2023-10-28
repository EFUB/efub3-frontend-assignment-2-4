// 접근 제어자

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

const employee = new Employee("홍길동", 30, "developer");
employee.name = "김아무개";
employee.age = 33;
