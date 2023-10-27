// Readonly

import { Post2 } from "./interface";

const readonlyPost: Readonly<Post2> = {
  title: "보호된 게시글",
  tags: [],
  content: "",
};

// readonlyPost.content = "해킹당함"; 오류

// <Readonly<T> 타입 구현>
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
