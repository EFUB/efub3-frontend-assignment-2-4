type ReturnType<T> = T extends () => infer R ? R : never;

type funcA = () => string;
type funcB = () => number;

type A = ReturnType<funcA>;
type B = ReturnType<funcB>;
