// Extract<T, U>

type G = Extract<string | boolean, boolean>;
// boolean

type Extract2<T, U> = T extends U ? T : never;
