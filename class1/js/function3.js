// function3.js
// 함수표현식.

const sum = function (a, b) {
  return a + b;
}
console.log(sum);
let result = sum(2, 3);

const plus = sum; // '참조한다'라고 한다. 자바스크립트에서만 가능함. 변수에 함수를 대입하기.
console.log(plus);
plus(3, 4);

// 즉시실행함수
result = (function (x, y) {
  return x > y ? x : y; //함수의 값을 반환하는데 그 반환 값을 x가 y보다 크냐는 조건문, 참이면 x, 거짓이면 y를 출력하라는 뜻
})(4, 29);
console.log(result);

//화살표함수, (매개변수) => { 기능구현 }

// const hi = function () {
//   return `hello!`;
// }

// 위 함수를 화살표 함수로 표현하자면

const hi = name => `hello! ${name}`;
console.log(hi(`홍길동`));