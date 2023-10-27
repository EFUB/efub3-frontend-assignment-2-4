/* public
class Employee_{
    name: string; // 자동으로 public
    public age: number;
    public position: string;
}
*/

/* private
class Employee {
  private name: string;
  public age: number;
  public position: string;

  work() {
    console.log(`${this.name}이 일함`); // 여기서는 접근 가능
  }
}

const employee = new Employee('이정환', 27, 'developer');
employee.name = '홍길동'; // 오류 
employee.age = 30;
employee.position = '디자이너';
*/

/* protected
class Employee {
  private name: string;
  protected age: number;
  public position: string;

  work() {
    console.log(`${this.name}이 일함`); // 여기서는 접근 가능
  }
}

class ExecutiveOfficer extends Employee {
  func() {
    this.name;
    this.age;
  }
}

const employee = new Employee('이정환', 27, 'developer');
employee.name = '홍길동'; // 오류
employee.age = 30;
employee.position = '디자이너';
*/
