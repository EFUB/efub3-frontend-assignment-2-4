interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup2 = Tup[1];

type Tup3 = Tup[number];

//keyof
interface Person {
  name: string;
  age: number;
  location: string;
}

interface User1 {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User1]?: User1[key];
};

//템플릿 리터럴 타입
type Color = "red" | "black" | "green";
type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color} - ${Animal}`;
