interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시물입니다.',
  tags: [],
  content: '',
};

readonlyPost.content = '해킹당함'; // readonly 수정 불가

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
