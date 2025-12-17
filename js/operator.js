// operator.js
console.log('message test');

let result = 10 > 5;
result = 10 == 11;

let num1 = 10; // 숫자 타입
let num2 = 25;
let str1 = '10'; // 문자 타입
str1 = 10;

result = num1 >= num2;
result = num1 == str1; // 값만 비교해주는 비교연산자
result = num1 === str1; // 값과, 데이터 타입까지 비교연산자
result = num1 != num2;

// 논리 연산자. 문자는 아스키 값(정수)으로 변환을 하고 그것을 통해 값 비교를 한다. 
result = num1 > num2 || num1 == str1; // OR 연산자
result = num1 > num2 && num1 == str1; // AND 연산자
result = !(num1 > num2 && num1 == str1); // NOT(부정) 연산자.
result = !result;
result = !result;

console.log(result);
// 아스키 코드의 번호를 확인해서 문자의 값을 나타냄.
/* console.log('家'.charCodeAt());
console.log('A'.charCodeAt()); */