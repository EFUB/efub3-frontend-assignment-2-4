// map 메서드를 참고해서 forEach 메서드를 함수로 만들어 보세요.
// 참고 ) forEach 메서드는 반환값이 없는 메서드입니다.
const arr = [1, 2, 3];

function forEach<T>(arr: T[], callBack: (it: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callBack(arr[i]);
  }
}
