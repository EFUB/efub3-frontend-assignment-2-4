// 맵드 타입

interface User1 {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User1[key];
};

// key가 "id" -> id: User1[id] -> id: number
// key가 "name" -> id: User1[name] -> name: string
// key가 "age" -> id: User1[age] -> age: number

// keyof 연산자를 이용해 업그레이드
type PartialUser2 = {
  [key in keyof User1]?: User1[key];
};

// 맵드 타입을 이용해 모든 프로퍼티가 읽기 전용 프로퍼티가 된 타입
type ReadonlyUser = {
  readonly [key in keyof User1]: User1[key];
};
