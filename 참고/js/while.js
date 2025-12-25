// while.js
// 값 / 기능
// num = 0;
// doIt = function() {
//        기능실행.
// }
for (let i = 1; i <= 5; i += 1) {
  //
  // console.log(`i의 값은 ${i}`);
}

// while(조건) { 실행블럭 }
let i = 1;
while (i <= 5) {
  console.log(`i의 값은 ${i}`);
  i++;
}

// 조건을 만족할 동안에만 실행.
while (true) {
  let num = Math.ceil(Math.random() * 10); // 1 ~ 10 임의의 수 생성.
  console.log(`num => ${num}`);
  if (num == 9) {
    break; // while 반복을 종료.
  }
}

// 수를 입력받아서 합을 구하고 quit 입력하면 반복종료.
let sum = 0;
if (sum != 0) {
  while (true) {
    let yourValue = prompt("숫자를 입럭하세요. 종료하면 quit 입력.");
    // 종료 => quit 입력.
    if (yourValue == "quit") {
      break; // while 반복을 종료.
    }
    yourValue = parseInt(yourValue); // 문자를 => 숫자 타입으로 형변환.
    sum += yourValue;
  }
  console.log(`합계: ${sum}`);
}

// Math.random() => 1 ~ 10 범위의 값을 생성.
// 5가 되면 반복문을 종료.
// sum 에 누적.
while (true) {
  let num = Math.ceil(Math.random() * 10);
  sum += num;
  console.log(`num => ${num}`);
  if (num == 5) {
    break;
  }
}

console.log(`합계: ${sum}`);

// 학생의 점수 => quit 종료.
// 반 평균 = 합계점수 / 사람의 수
// "평균은 75점입니다."
sum = 0;
let count = 0;
// 최고득점 점수 ?
let maxScore = 0;
while (true) {
  let yourValue = 0;
  yourValue = prompt("학생의 점수를 입럭하세요. 종료하면 quit 입력.");
  // 종료 => quit 입력.
  if (yourValue == "quit") {
    break; // while 반복을 종료.
  }
  yourValue = parseInt(yourValue); // 문자를 => 숫자 타입으로 형변환.
  sum += yourValue; // 평균을 구하기 위한 합계점수.
  count++; // 학생수.
  // 조건: 현재 최고점수 vs. yourValue 비교해서
  // 현재값이 최고점수보다 크면 현재값을 최고점수에 대입.
  if (maxScore < yourValue) {
    maxScore = yourValue;
  }
}
console.log(`평균: ${sum / count}, 최고점수: ${maxScore}`);
