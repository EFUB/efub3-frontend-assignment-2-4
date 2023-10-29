// 인덱스드 엑세스 타입

// 객체 프로퍼티의 타입 추출하기
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post1: Post = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.id} - ${author.name}`);
}

// 배열 요소의 타입 추출하기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

// Number 타입
const post2: PostList[number] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

// Number Literal 타입
const post3: PostList[0] = {
  title: "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  },
};

// 튜플의 요소 타입 추출하기
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number];
// number | string | boolean
