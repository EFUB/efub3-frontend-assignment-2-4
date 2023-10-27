const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);
// function map(arr: unknown[], callback: (item: unknown) => unknown): unknown[] {}
// function map<T>(arr: T[], callback: (item: T) => T): T[]{}
function map<T>(arr: T[], callback: (item: T) => T): T[] {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const arr = [1, 2, 3];
function map<T>(arr: T[], callback: (item: T) => T): T[] {}
map(arr, (it) => it * 2); // number
map(arr, (it) => it.toString()); // string

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {}
map(arr, (it) => it.toString());
