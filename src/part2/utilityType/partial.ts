// Partial<T>

import { Post2 } from "./interface";

/* tags, thumbnail이 없어서 오류 발생
const draft: Post = {
  title: "제목",
  content: "내용",
};
*/

const draft: Partial<Post2> = {
  title: "제목",
  content: "내용",
};

// <Partial<T> 타입 구현>
type Partial<T> = {
  [key in keyof T]?: T[key];
};
