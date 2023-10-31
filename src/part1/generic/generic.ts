// any 타입
// function func(value: any) {
//   return value;
// }

// let num = func(10);
// let str = func("string");

// num.toUpperCase();

// unknown 타입
// function func(value: unknown) {
//   return value;
// }

// let num = func(10);
// // unknown 타입

// let str = func("string");
// // unknown 타입

// num.toUpperCase(); // ❌
// num.toFixed(); // ❌

// if (typeof num === "number") {
//   num.toFixed();
// }

function func<T>(value: T): T {
  return value;
}

let num = func(10);
// number 타입
