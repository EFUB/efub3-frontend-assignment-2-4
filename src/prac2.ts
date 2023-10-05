// 접근 제어자를 생성자의 매개변수에 설정해 코드를 간결하게 만들어 보세요.
class Developers {
  public name: string;
  protected age: number;
  private position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  sayHi() {
    console.log(
      `저는 ${this.age}살이고 이름은 ${this.name}입니다. 포지션은 ${this.position}입니다`
    );
  }
}
