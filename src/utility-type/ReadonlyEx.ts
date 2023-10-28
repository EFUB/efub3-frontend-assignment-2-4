interface Post4 {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const readonlyPost: Post4 = {
  title: "보호된 게시물",
  tags: ["sdf"],
  content: "sdf",
};

readonlyPost.content = "해킹 시도"; // 불가!!!

//Readonly 타입 구현
// type Readonly<T> = {
//   readonly [key in keyof T]: T[key];
// };
