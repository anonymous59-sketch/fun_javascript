// if.js
// Math.random() : 0 <= x < 1 범위의 값.
// 1 ~ 10 임의의 정수값을 생성 -> x
// x의 값이 "짝수입니다"/ "홀수입니다"

// x의 값이 홀수이면서 5보다 크거나 같은지 => "조건을 만족합니다"/ "조건을 만족안합니다"

let x = Math.floor(Math.random() * 10) + 1; // 0 <= x < 10
console.log(x);

if (x % 2 == 1 && x >= 5) {
  console.log("조건을 만족합니다");
} else {
  console.log("조건을 만족안합니다");
}
console.log('---------------------------------');

// 3항 연산식.
(x % 2 == 1 && x >= 5) ? console.log("조건을 만족합니다"): console.log("조건을 만족안합니다");


// 학생성적 출력. (0 <= x <= 100)
x = Math.floor(Math.random() * 101); // 0 <= x*101  < 101
console.log(x);

if (x >= 90) {
  console.log('A학점'); // 90 <= x <= 100 => A학점.
} else if (x >= 80) {
  console.log('B학점'); // 80 <= x < 90   => B학점.
} else if (x >= 70) {
  console.log('C학점'); // 70 <= x < 80   => C학점.
} else if (x >= 60) {
  console.log('D학점'); // 60 <= x < 70   => D학점.
} else {
  console.log('F학점'); // 60 > x         => F학점.
}