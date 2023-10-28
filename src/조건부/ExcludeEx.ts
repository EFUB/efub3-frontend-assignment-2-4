type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
