// Pick<T, K>

import { Post2 } from "./interface";

const legacyPost: Pick<Post2, "title" | "content"> = {
  title: "",
  content: "",
};
// 추출된 타입 : { title: string, content: string }

// <Pick<T, K> 타입 구현>
type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};
