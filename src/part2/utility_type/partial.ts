interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post> = {
  title: '제목은 나중에 짓자',
  content: '초안',
};

type Partial<T> = {
  [key in keyof T]?: T[key];
};
