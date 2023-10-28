// 갹체 프로퍼티의 타입 추출하기
interface Post {
  title: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// 배열요소의 타입 추출하기
type PostList = {
  title: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post: PostList[number] = {
  title: "sdf",
  author: {
    id: 1,
    name: "Sdfsd",
    age: 22,
  },
};

// 튜플의 요소 타입 추출하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean

type Tup3 = Tup[number]; // number| string| boolean
