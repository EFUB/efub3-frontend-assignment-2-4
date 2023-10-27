// 타입스크립트의 상속
// 파생 클래스에서 생성자 정의 시 반드시 super 메서드 호출

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
