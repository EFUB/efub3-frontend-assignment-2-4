// Omit<T, K>

import { Post2 } from "./interface";

const noTitlePost: Omit<Post2, "title"> = {
  content: "",
  tags: [],
  thumbnail: "",
};

// <Omit<T, K> 타입 구현>
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
