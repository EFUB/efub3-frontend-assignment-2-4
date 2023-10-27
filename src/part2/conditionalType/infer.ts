// infer

type ReturnType2<T> = T extends () => infer R ? R : never;

type FuncA = () => string;

type FuncB = () => number;

type AA = ReturnType2<FuncA>;
// string

type BB = ReturnType2<FuncB>;
// number

type CC = ReturnType2<number>;
// 조건식을 만족하는 R 추론 불가능
// never

// Promise의 resolve 타입을 infer를 이용해 추출하는 예
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string
