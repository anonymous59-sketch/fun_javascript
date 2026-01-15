//function.js
// 값 / 기능의 차이
// num = 0; 값
// doIt = function() { 기능 실행 }
// let n1 = 10, n2 = 20 // let은 ,로 변수 선언을 여러개 할 수 있음

// 두 수를 비교해서 큰 수를 출력기능.
// 함수를 정의한다. 함수 선언
function showMax(a, b) { //parameter(매개변수)
  console.log(`첫번째 매개값은 ${a}, 두번째 매개값은 ${b}`);
  if (a > b){
    console.log(`큰값은 ${a}`);
  } else {
    console.log(`큰값은 ${b}`);
  }
 } // end of showMax(a, b) // 보통 함수의 끝에 함수 선언이 끝났다고 주석처리로 달아준다.

// 자바스크립트에서 함수는 상수로 선언하는 경향이 있어서 함수명이 겹치면 추가 선언이 안된다.
let n1 = 20, n2 = 30, n3 = 40, n4 = 50;
let m1 = [11, 12, 13, 14];
// 함수를 사용한다. 함수 호출
showMax(n1, n3); // arguement(매개값, 인자값)
showMax(n4, n1);
getMulti(n1, n2, n3); // 매개값이 선언한 함수의 매개변수의 개수와 달라도 자바스크립트는 오류 없이 진행한다.
// 매개값의 수가 적으면 다른 매개변수를 undefined로 치환해서 적용하고 매개값의 수가 많으면 매개변수만큼만 사용하고 다른 것은 무시한다.

// 매개변수 2개, 2개의 곱을 콘솔에 출력하는 함수. getMulti 함수.

function getMulti(x, y) {
  console.log(`${x}의 값과 ${y}값의 곱은 ${x * y}이다.`);
  return x * y; // 반환한다. 함수의 처리 결과를 값을 받아서 외부로 내보내준다.
}
getMulti(n4, n2);
getMulti(m1[0],  m1[3]);
let a1 = getMulti(m1[0], m1[3]);
console.log(a1);