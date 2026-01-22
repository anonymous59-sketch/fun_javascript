// promise2.js
function orderMenu(menu) {
  return new Promise((resolve, reject) => {
    console.log(`${menu}를 주문`);

    setTimeout(()=>{
      if(menu == '라면') {
        resolve('라면을 완료했습니다');
      } else {
        reject('재료가 없습니다');
      }
    }, 1500);

  });
}
function delivery() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('손님에게 전달');
    }, 1500);
  });
}

// orderMenu('라면') // 함수의 반환이 promise 객체라서 바로 then, catch 매서드를 사용할 수 있다. 
//   .then(data => {
//     console.log(data); /* 로그메세지 출력 */
//     return delivery();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => console.error(err) /* 에러메세지 출력 */
// );

// async await 처리
async function orderFood() {
  await orderMenu('라면').then(data => console.log(data) /* resolve와 reject 경우가 있어서 then이나 catch로 결과를 정해줘야한다. */);
  let result = await delivery();
  console.log(result);
}
orderFood();