// 변수선언, 연산자 활용
// 이름저장하기 위한 변수 => 이름 저장.
let myName = '이창호';
myName = '홍길동';
// 혈액형 (AB, O, B, Rh-)
let bloodType = 'AB';
// 키 선언 => 키 저장.
let myHeight = 167.8;
// 성인, 미성년 구분.
let isAdult = true; // false

let sum = 10 + 20;
console.log('sum의 값은 ' + sum + ' 입니다.');

// 내 이름은 이창호 입니다. => 콘솔출력.
console.log('내 이름은 ' + myName + ' 입니다.');

// +, -, *, /, %
let num1 = 10;
let num2 = 5;
let result = 0;
result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result = (result + num1) % num2;
result++; // result = result + 1;
result++;
result++;
result--;
result += 2;
result *= 2; // result = result * 2;
result %= 5; // 2
result = result > 10;
result += 3; // result = true + 3; => NaN 값을 출력.
result = 'hello' * 3; // NaN
result = result - 3;
console.log('현재 result 값은 ' + result);