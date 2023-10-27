// Exclude<T, U>

type F = Exclude<string | boolean, string>;
// boolean

type Exclude3<T, U> = T extends U ? never : T;
