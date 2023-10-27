// Keyof 연산자

interface Person {
  name: string;
  age: number;
  location: string;
}

// key: keyof person -> 값과 함께 사용하려고 하면 오류 발생
function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "김아무개",
  age: 35,
  location: "서울",
};

// Typeof와 Keyof 함께 사용하기
type Person2 = typeof person;
// 결과
// {name: string, age: number, location: string}

function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}

const person2: Person = {
  name: "김아무개",
  age: 35,
  location: "부산",
};
