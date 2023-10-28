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
  /*
  watch: {
    url: string;
  };
   */
};

type Thumbnail_ = Record<'large' | 'medium' | 'small', { url: string }>;

type Record<K extends keyof any, V> = {
  [key in K]: V;
};
