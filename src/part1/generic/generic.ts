// 매개변수를 any 타입으로 정의했을 때
function func(value: any) {
  return value;
}

let num = func(10);
// any 타입

let str = func("string");
// any 타입

num.toUpperCase();
// num이 any 타입이기 때문에 오류가 발생하지 않음

// 매개변수를 unknown 타입으로 정의했을 때
function func2(value: unknown) {
  return value;
}

num = func2(10);
// unknown 타입

str = func2("string");
// unknown 타ㅇㅂ

// 비효율적인 타입 좁히기
if (typeof num === "number") {
  num.toFixed();
}

function func3<T>(value: T): T {
  console.log(value);
  return value;
}

const num2 = func3(10);
// T = number

let arr = func3<[number, number, number]>([1, 2, 3]);
// 타입 변수에 할당할 타입을 튜플 타입으로 지정하지 않았다면 number[] 타입으로 추론된다.
