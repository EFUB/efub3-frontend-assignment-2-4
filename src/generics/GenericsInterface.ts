// 인터페이스 선언
interface KeyPair<K, V> {
  key: K;
  value: V;
}

//인터페이스 사용
let keyPair: KeyPair<string, number> = {
  key: "sdf",
  value: 0,
};

// 인덱스 시그니처와 함께 사용하기
interface Map1<V> {
  [key: string]: V;
}

let stringMap: Map1<string> = {
  key: "value",
};
let booleanMap: Map1<boolean> = {
  key: true,
};

//타입 별칭에도 제네릭을 적용할 수 있음
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "value",
};
