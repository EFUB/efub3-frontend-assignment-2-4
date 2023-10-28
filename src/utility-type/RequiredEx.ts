interface Post3 {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const withThumbnailURLPost: Required<Post3> = {
  title: "skdjfl",
  tags: ["sdfsd"],
  content: "sdkjf",
  thumbnailURL: "sdf", //필수로 추가해야함
};

//Required<T> 타입 구현
// type Required<T> = {
//   [key in keyof T]-?: T[key];
// };
