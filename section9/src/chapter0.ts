// 조건부 타입
type A = number extends string ? number : string;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

// 제네릭 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// string

let varB: StringNumberSwitch<string>;
// number
function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im momo");
// string

let result2 = removeSpaces(undefined);
// undefined
