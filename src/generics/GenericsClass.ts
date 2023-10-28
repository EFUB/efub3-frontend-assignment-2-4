//여러 타입의 리스트를 생성할 수 있는 범용적인 클래스

class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const numberList = new List([1, 2, 3]);
const stringList = new List(["1", "2", "3"]);
//number, string 둘 다 가능
