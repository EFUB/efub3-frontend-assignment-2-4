// map 메서드를 참고해서 forEach 메서드를 함수로 만들어 보세요.
// 참고 ) forEach 메서드는 반환값이 없는 메서드입니다.

// 반환값이 없으므로 map 함수와 다르게 반환값이 void
function forEach<T>(arr: T[], callback: (item: T) => T): void {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
