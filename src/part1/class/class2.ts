class Employee {
  // 필드
  name: string = "";
  age: number = 0;
  position: string = "";

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};
