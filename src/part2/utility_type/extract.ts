type B = Extract<string | boolean, boolean>;
type Extract<T, U> = T extends U ? T : never;
