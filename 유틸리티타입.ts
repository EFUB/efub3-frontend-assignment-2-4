interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailUrl?: string;
}

type Partial1<T> = {
  [key in keyof T]?: T[key];
};
const draft: Partial1<Post> = {
  title: "제목은 나중에 짓자",
  content: "초안..",
};

type Required1<T> = {
  [key in keyof T]-?: T[key];
};

type Readonly1<T> = {
  readonly [key in keyof T]: T[key];
};

type Pick1<T, K extends keyof T> = {
  [key in K]: T[key];
};

type Omit1<T, K extends keyof T> = Pick1<T, Exclude<keyof T, K>>;

type Thumbnail = Record<"large" | "medium" | "small", { url: string }>;

type Recodrd<K extends keyof any, V> = {
  [key in K]: V;
};

type Extract1<T, U> = T extends U ? T : never;

type ReturnType1<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;
