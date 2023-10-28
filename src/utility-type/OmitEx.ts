interface Post6 {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const notitle: Omit<Post6, "title"> = {
  content: "sdf",
  tags: ["sdf"],
};

//omit 타입 구현
// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
