// 타입 변수 응용하기
// 1. 타입 변수가 여러 개 필요한 경우
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [c, d] = swap("1", 2);

// 2. 다양한 배열 타입을 인수로 받을 때
function returnFirstValue<T>(data: T[]) {
  return data[0];
}

let num3 = returnFirstValue([0, 1, 2]);
// number

let str2 = returnFirstValue([1, "hello", "mynameis"]);
// number | string

// 3. 반환값 타입을 배열의 특정 요소의 타입이 되도록 할 때
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}

str2 = returnFirstValue2([1, "hello", "mynameis"]);
// number

// 4. 타입 변수를 제한하고 싶을 때
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123");
getLength([1, 2, 3]);
getLength({ length: 1 });
// getLength(undefined); 오류
// getLength(null); 오류
