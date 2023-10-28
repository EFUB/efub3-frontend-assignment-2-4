//function map(arr: unknown, callback: (item: unknown) => unknown): unknown[] {}

const arr = [1, 2, 3];
// 제네릭 사용해서 구현
function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }

  return result;
}

map(arr, (it) => it * 2); //가능
map(arr, (it) => it.toString()); //가능
