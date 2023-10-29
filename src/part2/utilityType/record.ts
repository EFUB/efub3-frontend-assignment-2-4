// Record<K, V>

// 이 코드는 똑같이 생긴 프로퍼티를 추가해야 해서 중복 코드가 많다.
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
  watch: {
    url: string;
  };
};

type Thumbnail2 = Record<"large" | "medium" | "small", { url: string }>;

// <Record<K, T> 타입 구현>
type Record2<K extends keyof any, V> = {
  [kdy in K]: V;
};
