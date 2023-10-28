type Z = Exclude<string | boolean, string>;

type Exclude<T, U> = T extends U ? never : T;
