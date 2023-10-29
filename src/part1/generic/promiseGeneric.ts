// 프로미스와 제네릭

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // 결과값: 20
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  // response는 number 타입
  console.log(response);
});

promise.catch((error) => {
  if (typeof error === "string") {
    console.log(error);
  }
});
