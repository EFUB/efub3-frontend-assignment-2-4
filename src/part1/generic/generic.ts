/* 1. 매개변수를 any 타입으로 정의했을 때 
function func(value: any){
    return value;
}

let num = func(10);
let str = func("string");

num.toUpperCase(); // num이 any 타입이라 오류 발생하지 않음
*/

/*
// 2. 매개변수를 unknown 타입으로 정의했을 때 
function func(value: unknown){
    return value;
}

let num = func(10);
let str = func("string");

num.toUpperCase(); // 어떤 타입인지 정확히 알 수 없으므로
num.toFixed(); // string, number 메소드 모두 사용할 수 없음 

if (typeof num === "number"){ // 비효율적인 타입 좁히기
    num.toFixed();
}
*/

function func<T>(value: T): T {
  // T에 할당될 타입은 함수 호출 시 결정됨
  console.log(value);
  return value;
}

const num = func(10);
let arr = func<[number, number, number]>([1, 2, 3]);

// 타입 변수가 여러 개 필요한 경우 타입 변수를 여러 개 사용
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1', 2);

// 다양한 배열 타입을 인수로 받을 때 배열의 타입을 타입 변수로 설정
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num_ = returnFirstValue([0, 1, 2]); // number
let str_ = returnFirstValue([1, 'hello', 'mynameis']); // number | string

// 반환값 타입을 배열의 특정 요소의 타입이 되도록 할 때 튜플과 rest 파라미터를 이용
function returnFirstValue_<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let str = returnFirstValue([1, 'hello', 'mynameis']); // number

// 타입 변수를 제한하고 싶을 때(함수를 호출하고 인수로 전달할 수 있는 값의 범위에 제한을 두는 것)
function getLength<T extends { length: number }>(data: T) {
  return data.length; // length 프로퍼티를 갖는 객체 타입으로 제한
}

getLength('123');
getLength([1, 2, 3]);
getLength({ length: 1 });
//getLength(undefined); // 불가
//getLength(null); // 불가
