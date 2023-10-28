type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<String>; // number

//제네릭 조건부 타입 함수
function removeSpace<T>(text: T): T extends string ? string : undefined;

function removeSpace(text: any) {
  if (text === "string") {
    return text?.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpace("sdfs sdfs aaaa"); //string
let result2 = removeSpace(undefined); //undefined
