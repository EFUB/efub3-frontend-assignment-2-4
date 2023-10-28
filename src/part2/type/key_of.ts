interface Person {
  name: string;
  age: number;
  location: string;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: '김아무개',
  age: 35,
};

function getPropertyKey_(person: Person, key: keyof person) {
  return person[key]; // keyof를 값과 함께 사용하려고 하면 오류 발생
}

// typeof와 함께 사용 - 특정 변수 타입을 추론하는 기능
type Person_ = typeof person;
function getPropertyKey(person: Person_, key: keyof typeof person) {
  return person[key];
}
const person: Person = {
  name: '김아무개',
  age: 35,
};
