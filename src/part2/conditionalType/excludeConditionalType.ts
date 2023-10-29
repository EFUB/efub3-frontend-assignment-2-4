// Exclude 조건부 타입 구현하기

type Exclude2<T, U> = T extends U ? never : T;

type C = Exclude2<number | string | boolean, string>;
/*
1. Union 타입 분리
Exclude2<number, string>
Exclude2<string, string>
Exclude2<boolean, string>

2. 각 분리된 타입 모두 계산
T = number, U = string일 때 number extends string은 거짓 -> number
T = string, U = string일 때 string extends string은 참 -> never
T = boolean, U = string일 때 boolean extends string은 거짓 -> boolean

3. 계산된 타입을 모두 Union으로 묶기
결과: number | never | Boolean

여기서 공집합을 의미하는 never 타입은 Union으로 묶일 경우 사라짐
결과: number | Boolean
*/
