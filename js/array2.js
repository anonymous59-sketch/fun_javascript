// array2.js
// 1. 회의용품 카테고리명 중 첫번째 상품명과 가격.
// > 1. fetch를 통해 데이터 가지고 오기
//   2. 가지고 온 데이터는 배열안에 객체들이 있는 형태니까 객체의 속성 중 카테고리가 '회의용품'인 것을 찾는 조건을 넣고, 배열 중에 제일 첫번째 되는 것을 찾기
//   3. console.log를 통해 결과값을 표현하기

// 2. 판매자명이 펜스토어인 모든 상품의 가격이 1000원이상인지 판별
// > 1. fetch를 통해 데이터를 가지고 오기
//   2. 가지고 온 데이터 중에 판매자명이 '펜스토어'인 객체들만 다시 배열로 만들어서 집어넣기
//     2. 주의사항 : 판매자명은 판매자정보라는 객체 안에 판매자명으로 존재하니까 주의 
//   3. 판매자명이 '펜스토어'인 객체들만 있는 배열을 만들었으니 그 배열에서 객체들의 '가격'이 전부 1000원 이상인지 확인해보기
//   4. console.log를 통해 결과값을 표현하기

// 3. 상품카테고리명이 필기구인 상품들의 평점이 4점을 넘는게 있는지 판별
// > 1. fetch를 통해 데이터를 가지고 오기
//   2. 가지고 온 데이터중에 카테고리가 '필기구'인 객체들을 모아서 배열을 다시 만들기
//   3. 새로 만든 배열은 카테고리가 '필기구'인 객체만 있을테니 이 배열의 평점이 4점이 넘는지 확인하기
//   4. console.log를 통해 결과값을 표현하기

fetch('js/data3.json')
  .then(resp => resp.json())
  .then(result => {
    let find = result.find(e => e['상품카테고리'] == '회의용품');
    console.log(`카테고리가 회의용품인 것 중 첫번째 물건의 정보\n상품명 : ${find['상품명']}, 가격: ${find['가격']}\n\n`);
  })
  .catch(err => console.log(err));

fetch('js/data3.json')
  .then(resp => resp.json())
  .then(result => {
    result = result.filter(elem => elem["판매자정보"]["판매자명"] == '펜스토어');
    console.log(result);
    let every = result.every(e => e['가격'] >= 1000);
    console.log(`판매자가 펜스토어인 모든 상품의 가격이 1000원 이상인가? ${every ? '맞다' : '아니다'}\n\n`);
  })
  .catch(err => console.log(err));

fetch('js/data3.json')
  .then(resp => resp.json())
  .then(result => {
    result = result.filter(elem => elem['상품카테고리'] == '필기구');
    console.log(result);
    let some = result.some(e => e['평점'] > 4);
    console.log(`상품카테고리가 필기구인 것 중 평점이 4점을 넘는 물품이 있는가? ${some ? '있다' : '없다'}`);
  })
  .catch(err => console.log(err));

  // filter 대신 reduce를 이용해서 한 번 해보기