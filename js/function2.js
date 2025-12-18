//fuction2.js
// sum함수, 매개변수 2개를 받아서 더한 결과를 반환하지말고 콘솔에 출력
let result1 = 10; // 전역변수(global variable). 모든 곳에 사용되는 변수

function sum(a, b) {
  result1 = 23; // 전역변수의 영향이 있기때문에 지역에서 다시 선언할 필요가 없음
  console.log(`지역변수 선언 되어지기 전에 result1 값 ${result1}`); //전역 변수의 값을 받아오는 데 만약 지역변수와 변수명이 겹치면 에러가 난다.
  let result = a + b; // result : 어떤 범위 안에 있는 변수라고 해서 지역 변수(local variable). 지역변수를 선언하면 전역변수가 있더라도 덮어 쓸 수 있음
  console.log(`${a}와 ${b}의 합은 ${result}이다`);
  console.log(`지역 : ${result}`);
}
sum(1, 2);
console.log(`전역 : ${result1}`);

// 코드
// 함수 : gugudan, 4단을 콘솔에 출력하기
function gugudan(j){
  console.log(`구구단 ${j}단`)
  for (let i = 1; i < 10; i++){
    console.log(`${j} * ${i} = ${j * i}`);
  }
}
gugudan(4);
