// 제네릭 조건부 타입

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number

// varA: T에 number 할당 -> 조건식 참 -> string 타입이 됨
// varB: T에 string 할당 -> 조건식 거짓 -> number 타입이 됨

function removeSpaces(text: string | undefined | null) {
  // return text.replaceAll(" ", ""); text가 string이 아닐 수 있어서 오류
  if (typeof text === "string") {
    // tsconfig.json에 compilerOptions 추가
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
// string | undefined
// 변수 result의 타입이 아까와는 달리 string | undefined 타입으로 추론되어 조건부 타입을 이용해야 한다.

function removeSpaces2<T>(text: T): T extends string ? string : undefined;
function removeSpaces2(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result2 = removeSpaces2("hi im winterlood");
// string

let result3 = removeSpaces2(undefined);
// undefined
