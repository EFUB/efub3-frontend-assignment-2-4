type Thumbnail = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

type Thumbnail2 = Record<"large" | "medium" | "small", { url: string }>;

//Record 타입 구현
// type Record<K extends keyof any, V> = {
//   [key in K]: V;
// };
