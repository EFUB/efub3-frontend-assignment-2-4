// 제네릭 인터페이스
// 인터페이스 선언
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 인터페이스 사용
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

// 인덱스 시그니처와 함께 사용하기
interface Map2<V> {
  [key: string]: V;
}

let stringMap: Map2<string> = {
  key: "value",
};

let booleanMap: Map2<boolean> = {
  key: true,
};

// 제네릭 타입 별칠
type Map3<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string",
};
