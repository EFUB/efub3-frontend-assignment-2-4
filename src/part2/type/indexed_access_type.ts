interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
  },
};

function printAuthorInfo(author: { id: number; name: string }) {
  console.log(`${author.id} - ${author.name}`);
}

/*
// 프로퍼티 타입이 수정될 때 매개변수 타입도 수정하는 것이 불편함 
interface Post{
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number; // 추가
    }
}

function printAuthorInfo(author: {id: number; name: string; age: number}){
    console.log(`${author.id} - ${author.name}`);
}
*/

interface Post_ {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number; // 추가
  };
}

function printAuthorInfo_(author: Post['author']) {
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

const post_: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
    age: 27,
  },
};

const post__: PostList[0] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '이정환',
    age: 27,
  },
};

// 튜플의 요소 타입 추출하기
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type Tup3 = Tup[number];
