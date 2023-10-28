function func<T>(value: T): T {
  console.log(value);
  return value;
}

const num = func(10);

//제네릭 함수를 호출할 때 타입 변수에 할당할 타입을 직접 명시하는 것도 가능함

function fun<T>(value: T): T {
  console.log(value);
  return value;
}

let arr1 = fun<[number, number, number]>([1, 2, 3]);

// 1. 타입 변수가 여러개 필요한 경우
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

// 2. 다양한 배열 타입을 인수로 받을 때
function returnFirstValue<T>(data: T[]) {
  return data[0];
}
let first = returnFirstValue([0, 1, 2]); //number
let str = returnFirstValue([1, "sdf", "sdfsdfs"]); //number | string

// 3.  반환값 타입을 배열의 특정 요소의 타입이 되도록 할 때
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str2 = returnFirstValue([1, "sdf", "sdfsdfs"]); //number

// 4. 타입 변수를 제한하고 싶을 때
// Ex ) 타입 변수를 length 프로퍼티를 갖는 객체 타입으로 제한하기

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // 길이를 구할 수 있음
getLength([1, 2, 3]); // 길이를 구할 수 있음
// getLength(null) // 에러!!
