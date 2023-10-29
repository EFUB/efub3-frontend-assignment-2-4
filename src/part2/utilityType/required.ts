// Required<T>

import { Post2 } from "./interface";

// Required<Post2>는 Post2 타입의 모든 프로퍼티가 필수 프로퍼티로 변환된 객체 타입
const withThumbnailPost: Required<Post2> = {
  title: "한입 타스 후기",
  tags: ["ts"],
  content: "",
  thumbnail: "https://...",
};

// <Required<T> 타입 구현>
type Required<T> = {
  [key in keyof T]-?: T[key];
};
