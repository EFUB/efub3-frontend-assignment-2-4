//제네릭이 string이면 문자열 배열, 아니면 넘버 배열
type IsStringType<T> = T extends string ? string[] : number[];

type T1 = IsStringType<string>;
type T2 = IsStringType<number>;

const a: T1 = ["월요일", "화요일", "수요일"];
const b: T2 = [1000, 2000, 3000];

console.log(a);
console.log(b);
