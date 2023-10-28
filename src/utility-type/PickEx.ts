interface Post5 {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post5, "title" | "content"> = {
  title: "보호된 게시물",
  content: "sdf",
};

//Pick 타입 구현
// type Pick<T, K extends keyof T> = {
//   [key in K]: T[key];
// };
