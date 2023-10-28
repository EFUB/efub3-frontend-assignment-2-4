interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const withThumnailPost: Post = {
  title: '한입 타스 후기',
  tags: ['ts'],
  content: '',
};

const withThumnailPost_: Required<Post> = {
  title: '한입 타스 후기',
  tags: ['ts'],
  content: '',
  //thumbnailURL: "" 생략 시 오류
};

type Required<T> = {
  [key in keyof T]-?: T[key];
};
