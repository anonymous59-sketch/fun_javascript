// operator.js
console.log('hhhhhhhhhhhhhh');

let result = 10 > 5;
result = 10 == 11;

let num1 = 10; // 숫자.
let num2 = 25;
let str1 = '10'; // 문자.
str1 = 10;

result = num1 >= num2;
result = num1 === str1; // 값과 데이터타입 을 비교.
result = num1 != num2;

// 논리 연산자.
result = num1 > num2 || num1 == str1; // OR 연산자.
result = num1 > num2 && num1 == str1; // AND 연산자.
result = !(num1 > num2 && num1 == str1); // NOT 연산자.
result = !result;
result = !result;

console.log(result);

console.log('한'.charCodeAt(0));
console.log('A'.charCodeAt(0));