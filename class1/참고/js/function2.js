// function2.js
// sum함수. 매개변수 2개 더한 결과를 콘솔에 출력.
let result1 = 10; // 전역변수(global variable).

function sum(x, y) {
  console.log(result1);
  let result = result1 + x + y; // result : 지역변수(local variable).
  console.log(`합 ${result}`);
}

sum(1, 2);
console.log(`전역: ${result1}`);
result1 = 20;

{
  let result1 = 30;
  console.log(result1);
}
console.log(result1);

// 코드.
// 함수: gugudan, 4단을 콘솔에 출력.
function gugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}
gugudan(9);
