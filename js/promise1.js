// resolve와 reject
let orderMenu = '라면';

const p1 = new Promise((resolve, reject) => {
  if(orderMenu == '라면') {
    resolve('주문 완료');
  } else {
    reject('주문 취소');
  }
});

p1.then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
});

const f1 = fetch('js/data.json')

f1.then(data => {
  console.log(data);
  return data.json();
  })
  .then(data => {
    console.log(data);
    return 'hello';
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err)
);