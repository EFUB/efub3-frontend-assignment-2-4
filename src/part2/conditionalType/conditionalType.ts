// 조건부 타입
type A = number extends string ? number : string;

// Number extends string은 number 타입이 string 타입의 서브타입이 아니다.
// -> 조건문 거짓
// -> 타입 A는 string 타입

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;
// ObjB는 ObjA의 서브 타입
// -> 조건문 참
// -> 타입 B는 number 타입
