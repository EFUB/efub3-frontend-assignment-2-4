// keyof 연산자

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "홍길동",
  age: 20,
};

getPropertyKey(person, "name");
