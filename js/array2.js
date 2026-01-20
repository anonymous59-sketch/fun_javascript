// array2.js
// 1. 회의용품 카테고리명 중 첫번째 상품명과 가격.
// 2. 판매자명이 펜스토어인 모든 상품의 가격이 1000원이상인지 판별
// 3. 상품카테고리명이 필기구인 상품들의 평점이 4점을 넘는게 있는지 판별

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

fetch('js/data3.json')
  .then(resp => resp.json())
  .then(result => {
    result = result.reduce((acc, elem) => {
      if(elem['판매자정보']['판매자명'] == '펜스토어') {
        acc.push(elem);
      }
      return acc;
    }, []).every(e => e['가격'] >= 1000);
    console.log(`판매자가 펜스토어인 모든 상품의 가격이 1000원 이상인가?\n${result ? '맞다' : '아니다'}`);
  })
  .catch(err => console.log(err));

fetch('js/data3.json')
  .then(resp => resp.json())
  .then(result => {
    result = result.reduce((acc, elem) => {
      if(elem['상품카테고리'] == '필기구') {
        acc.push(elem)
      }
      return acc
    }, []).some(e => e['평점'] > 4);
    console.log(`상품 카테고리가 필기구인 것 중 평점이 4점이 넘는 물품이 있는가?\n${result ? '있다' : '없다'}`);
  })
  .catch(err => console.log(err));