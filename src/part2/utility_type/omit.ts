interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
  thumbnailURL: '',
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
