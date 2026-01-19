//// string.js
// indexOf() 특정 문자의 index 찾는 매서드 vs includes() true, false로 반환
let pos = "Hello, World".indexOf('o'); // 문자열이 없으면 -1을 반환
// console.log(pos);

const names = ['홍길동', '박인기', '박길동'];
let cnt = 0;
names.forEach(name => {
  if(name.indexOf('길동') != -1) {
    cnt++;
  }
})
// console.log(`길동은 ${cnt}명 입니다`);

// filter() => 조건을 만족하는 요소들을 새로운 배열을 만들어 담는다.
const newNames = names.filter((elem, idx, ary) => {
  // console.log(elem, idx, ary);
  return elem.indexOf('길동') != -1;
});
// console.log(newNames);

// includes()
cnt = 0;
names.forEach(name => {
  if(name.includes('길동')) {
    cnt ++;
  }
})
// console.log(`길동은 ${cnt}명 입니다2`);

const newNames1 = names.filter(elem => elem.includes('길동'));
// console.log(newNames1);

// slice()
console.log("Hello, World".slice(-5, -3));

const now = new Date();
console.log(now);

const yyyy = now.getFullYear();
now.setMonth(9);
now.setDate(3);
const mm = now.getMonth();
const dd = now.getDate();
console.log(`${yyyy}-${('0' + (mm + 1)).slice(-2)}-${('0' + dd).slice(-2)}`)