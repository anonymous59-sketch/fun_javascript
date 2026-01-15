//exe3.js

const numAry =[10, 30, 50];

numAry[numAry.length] = 20; // 계속 배열의 마지막에 값을 추가하게 된다.
numAry[numAry.length] = 60;
numAry[numAry.length] = 80;
// 콘솔에 출력 반복문을 사용해서 해보기

let max = 0;
for (i = 0; i < numAry.length; i++) {
  // console.log(`numAry[${i}]의 값은 ${numAry[i]}`);
  // if (numAry[i] >= 50) {
  //   console.log(`50보다 큰 값은\nnumAry[${i}]의 값이 ${numAry[i]}이다`);
  // } 
  // if (i % 2 == 0) {
  //   console.log(`배열의 홀수번 째에 있는 것은\nnumAry[${i}]이고 값은 ${numAry[i]}이다`);
  // }
  if (max < numAry[i]) {
    max = numAry[i];
  }
}
console.log(`배열의 가장 큰 값은 ${max}이다`);
for (let num of numAry ) {
  console.log(num);
}
// 회원정보(회원아이디, 이름, 포인트) 여러명 있음
let members = [
  {id: `user01`, name: `홍길동`, point: 800},
  {id: `user02`, name: `김문희`, point: 756},
  {id: `user03`, name: `박동철`, point: 980},
];

// 반복문을 써서 포인트의 합계를 구해보고 최고 포인트 값 구하기
let sum = 0;
max = 0;
for (let pt of members) {
  sum += pt.point;
  if (max < pt.point) {
    max = pt.point;
  }
}
console.log(`포인트 합계는 ${sum}이고 최고 포인트의 값은 ${max}이다.`);

sum = 0, max = 0;
for (i = 0; i < members.length; i++) {
  sum += members[i].point;
  if (members[i].point > max) {
    max = members[i].point;
  }
}
console.log(`포인트 합계는 ${sum}이고 최고 포인트의 값은 ${max}이다`);

// 표 만들어보기. 합계는 위에 사용하던거 가져옴
let table = `<table border="2px"><thead><tr><th>아이디</th><th>이름</th><th>포인트</th></tr></thead><tbody>`;
for (let tb of members) {
  table += ` <tr><td>${tb.id}</td><td>${tb.name}</td><td>${tb.point}</td></tr>`
}
table += `</tbody><tfoot><tr><td colspan="2">합계</td><td>${sum}</td></tr>
</tfoot></table>`
document.writeln(table);