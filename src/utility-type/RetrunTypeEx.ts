type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

function func1() {
  return "hskdf";
}

function func2() {
  return 10;
}

type ReturnA = ReturnType<typeof func1>; //string
type ReturnB = ReturnType<typeof func2>; // number
