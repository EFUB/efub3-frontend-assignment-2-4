interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Post = {
  title: '',
  content: '',
};

const legacyPost_: Pick<Post, 'title' | 'content'> = {
  title: '',
  content: '',
};

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};
