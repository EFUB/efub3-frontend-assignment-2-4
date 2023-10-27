// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;
// string

let b: StringNumberSwitch<string>;
// number

let c: StringNumberSwitch<number | string>;
// string | number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean>
// StringNumberSwitch<number>
// StringNumberSwitch<string>

// 2단계
// number
// string
// number

// 3단계
// number | string

// 실용적인 예제
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// number
// never
// boolean

// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// never
// string
// never

// string
