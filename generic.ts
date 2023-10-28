function func(value: any) {
  return value;
}

let num = func(10);

let str = func("string");

num.toUpperCase();
//🧐num이 any타입이라 오류가 발생하지 않음

function func2(value: unknown) {
  return value;
}

let num2 = func2(10);

let str2 = func2("string");

//num2.toUpperCase(); ❌오류 발생

//제네릭
function Generic<T>(value: T): T {
  console.log(value);
  return value;
}

const num3 = Generic(3);
const tuple1 = Generic<[number, number]>([1, 2]);

//타입 변수가 2개 이상인 경우
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

//타입 변수 응용하기
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num4 = returnFirstValue([0, 1, 2]); //number
let str4 = returnFirstValue(["a", "b", "c"]); //string

//반환값 타입을 배열의 특정 요소 타입이 되도록 할 때
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

//length를 가지고 있는 타입일 경우에만 에러 안남
getLength("12");
getLength([1, 2, 3]);
//getLength(undefined); ❌

const arr = [1, 2, 3];
const newArr = arr.map((it) => it + 2);
//[2,4,6];

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

//인터페이스에 제너릭 사용
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

interface IMap<V> {
  [key: string]: V;
}

let stringMap: IMap<string> = {
  key: "value",
};

let booleanMap: IMap<boolean> = {
  key: true,
};

//타입 별칭에도 사용 가능
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};

//실습3
interface IStudent {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

const user1: User<IStudent> = {
  name: "rin",
  profile: {
    school: "Ewha",
    type: "student",
  },
};

function goToSchool(user: User<IStudent>) {
  console.log(`${user.profile.school}를 갑니다.`);
}

//리스트
class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }
}
