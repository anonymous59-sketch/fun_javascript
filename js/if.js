// if.js
// Math.random() : 0 <= x < 1 범위의 값.
// 1 ~ 10 임의의 값을 생성 -> x
// x의 값이 "짝수입니다" / "홀수입니다" 출력하기

// x의 값이 홀수이면서 5보다 크거나 같은지 => "조건을 만족합니다" / "조건을 만족안합니다."

let x = Math.floor(Math.random() * 10) + 1; // 0 <= x < 10의 범위를 가짐
console.log(x);
if (x % 2 === 0) {
  console.log(`짝수입니다.`);
} else {
  console.log(`홀수입니다.`);
}
console.log(`x의 값이 홀수이면서 5보다 크거나 같은가?`);
if (x % 2 === 1 && x >= 5) {
  console.log(`조건을 만족합니다`);
} else {
  console.log(`조건을 만족 안합니다.`);
}

// 3항 연산식. (조건) ? true일 때 실행할 것 : false일 때 실행할 것
console.log(`----------------------------------------------`);
(x % 2 == 1 && x >= 5) ? console.log(`조건을 만족합니다`) : console.log(`조건을 만족 안합니다`);

// Math.random => 0 <= x < 1
// 학생성적 출력, (0 <= x <= 100) 
x = Math.floor(Math.random() * 101);
console.log(x);
if (90 <= x) { 
  console.log(`A학점`); // 90 <= x <= 100 => A학점
  // 3항 연산자 A+ 학점 넣어보기
} else if (80 <= x) { 
  console.log(`B학점`); // 80 <= x < 90 => B학점
} else if (70 <= x) { 
  console.log(`C학점`); // 70 <= x < 80 => C학점
} else if (60 <= x) { 
  console.log(`D학점`); // 60 <= x < 70 => D학점
} else {
  console.log(`F학점`); // x < 60       => F학점
}

