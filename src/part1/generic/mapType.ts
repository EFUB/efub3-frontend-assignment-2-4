// map 메서드 타입 정의하기
const arr2 = [1, 2, 3];
const newArr = arr2.map((it) => it * 2);
// function map(arr: unknown[], callback: (item: unknown) => unknown): unknown[] {}
function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
  let result: U[] = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

console.log(map(arr2, (it) => it * 2));
console.log(map(arr2, (it) => it.toString()));
