//맵드 타입
interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

//keyof 연산자 사용해서 업그레이드
type PartialUser2 = {
  [key in keyof User]?: User[key];
};

//템플릿 리터럴 타입
type Color = "Red" | "green" | "blue";
type Animal = "dog" | " cat" | "chicken";

type ColoredAnimal = `${Color} - ${Animal}`;
