//keyof 연산자
interface Person {
  name: string;
  age: number;
}
const person: Person = {
  name: "sdf",
  age: 25,
};

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

// keyof, Typeof 함께 사용하기
function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}
