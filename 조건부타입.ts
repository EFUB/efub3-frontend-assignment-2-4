import { useDispatch } from "react-redux";

type StringNumberSwitch<T> = T extends number ? string : number;

let var1: StringNumberSwitch<number>; //string 타입 됨

//제네릭 조건부 타입
type IsStringType<T> = T extends string ? string[] : number[];

function removeSpace<T>(text: T): T extends string ? string : undefined {
  if (typeof text == "string") {
    //return text.replaceAll(" ", "") as any;
  }
  return undefined as any;
}
