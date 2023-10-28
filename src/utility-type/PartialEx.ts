interface Post2 {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const draft: Partial<Post2> = {
  title: "제목",
  content: "dkjsld",
};

// Partial<T> 타입 구현
// type Partial<T> = {
//   [key in typeof T]?: T[key];
// };
