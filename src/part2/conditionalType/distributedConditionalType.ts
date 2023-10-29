// 분산적인 조건부 타입
type StringNumberSwitch2<T> = T extends number ? string : number;

let e: StringNumberSwitch2<number | string>;
// 변수 e는 string | number 타입으로 정의됨
