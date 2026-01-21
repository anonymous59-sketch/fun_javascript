// promise 객체.

// pending(요청중), fulfilled(요청완료), rejected(오류)
const promise = new Promise(function (resolve, reject) {
  console.log(`promise 생성.`);
  reject('err');
  resolve('OK');
  // 함수로 결과값을 반환하게하는데 성공이면 then 메서드로 값을 넘기고 실패하면 catch 메서드로 값을 넘긴다.
});

promise.then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.error(err);
});

// 비동기 함수
let count = 1; // 값을 2배, 더하기 3, 빼기 1를 비동기 함수로 처리하려면?

// setTimeout(e => {
//   count = count * 2;
//   setTimeout(e => {
//     count = count + 3;
//     setTimeout(e => {
//       count = count - 1;
//       setTimeout(e => {
//         console.log(count);
//       }, 10);
//     }, 1000);
//   }, 1000);
// }, 1000); // callback 지옥 사례

// promise 처리 > chaining으로 동기적으로 처리한다.
const p1 = new Promise(function(res, rej) {
  setTimeout(e => {
    count = count * 2;
    res(count);
  }, 1000);
});

p1.then(data => {
    return new Promise((res,rej) => {
      setTimeout(e => {
        count = data + 3;
        res(count);
      }, 1000);
    });
  })
  .then(data => {
    return new Promise((res, rej) => {
      setTimeout(e => {
        count = data - 1;
        res(count)
      }, 1000);
    });
  })
  .then(data => {
      setTimeout(e => {
        console.log(data);
      }, 10)
});