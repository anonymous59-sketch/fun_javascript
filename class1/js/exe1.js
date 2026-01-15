//exe1.js
// Math.random() 함수. 0 <= x < 1
// Math.ceil() 함수. 4.567356 = 5 ; 소숫점 올림 함수
// Math.floor() 함수. 4.567835 = 4 ; 소숫점 버림 함수
let x = Math.random() * 10;
console.log(x);
console.log(Math.ceil(x));
console.log(Math.floor(x));

// 임의의 값이 5보다 크면 => true, 작으면 => false

// Math.ceil(x) < 5 ;; fasle
// Math.floor(x) >= 5 ;; true

console.log('5보다 큰가?', Math.floor(x) >= 5);

// 짝수인지 => true, 홀수 => false
let y;
y = Math.floor(x) % 2 == 0;
console.log('짝수인가?', y);