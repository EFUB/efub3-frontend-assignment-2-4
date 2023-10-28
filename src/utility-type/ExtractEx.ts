type X = Extract<string | boolean, boolean>; //boolean

type Extract<T, U> = T extends U ? T : never;
