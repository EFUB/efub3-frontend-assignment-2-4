// 제네릭 조건부 타입
type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>;
let varB: StringNumberSwitch<string>;

function removeSpaces(text: string | undefined | null) {
  // return text.replaceAll(" ". ""); // text가 string이 아닐 수 있음 - 타입 좁히기 필요
  if (typeof text === 'string') {
    return text.replaceAll(' ', ''); // 변수 타입이 string | undefined 타입으로 추론
  } else {
    return undefined;
  }
}
let result = removeSpaces('hi im winterlood');

function removeSpaces_<T>(text: T): T extends string ? string : undefined {
  if (typeof text === 'string') {
    return text.replaceAll(' ', ''); // 조건부 타입의 결과를 알 수 없으므로 두 리턴문 다 오류
  } else {
    return undefined;
  }
}

// 오버로드 시그니처 추가하여 함수 오버로딩 구현
function removeSpaces__<T>(text: T): T extends string ? string : undefined;
function removeSpaces__(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result2 = removeSpaces__(undefined);

type StringNumberSwitch<T> = T extends number ? string : number;
let c: StringNumberSwitch<number | string>;
