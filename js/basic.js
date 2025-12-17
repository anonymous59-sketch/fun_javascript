//변수선언, 연산자 활용
//이름저장하기 위한 변수 => 이름 저장.
let myName = "박상원";
myName = '홍길동';
// 혈액형 (AB, O, B, A)
let bloodType = ['AB', 'B', 'A', 'O'];
// 키 선언 => 키와 값 저장
let myHeight = 100;
//성인, 미성년 구분
let isAdult = true; // false의 값을 가질 수 있음
//  isAdult = "assg"; 
//  console.log(isAdult)
let sum = 10 + 20;
console.log('sum의 값은 : ' + sum + '입니다.');
// console.log(`sum의 값은 : ${sum}입니다.`);

// 내 이름은 박상원 입니다.
console.log('내 이름은 ' + myName + '입니다.');
// console.log(`내 이름은 ${myName}입니다.`);

// +, -, *, /, %
let num1 = 10;
let num2 = 5;
let result;
result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result = result + num1 % num2;
// 산술 순서 확인하기 괄호() 먼저, (곱, 나눗셈, 나머지)계산 있는 순서대로, (덧셈, 뺄셈) 순서 
result++; // result = result + 1;
result++;
result++;
result--; // result = result - 1;
result += -2; // result = result + 숫자
result *= 2.5; // result = result * 숫자
result %= 2; // result = result % 숫자
result++;
console.log(`result 값 추적 ${result}`);
// 비교연산자는 true 또는 false로 나오는 논리 연산을 한다.
result = result > 10; // true 겂은 숫자로 변환할 때 1의 값을, false는 0의 값으로 반환한다. 자바스크립트의 특징. 다른 언어는 데이터 타입이 안 맞아서 계산이 안된다. => NaN(Not a Number 라는 결과 값이 나오는게 일반적)
result += 3;
result = '글자' * 4; //NaN을 표시하기 위한 코드 자바스크립트는 + 가 산술기호보다는 데이터간의 연결로 우선시 한다.
result = result + 3; //NaN은 연산을 계속 해도 NaN이다.
console.log('지금 num1의 값은 ' + num1 + ', num2의 값은 ' + num2 + ' \n' + '현재 result 값은 : ' + result);
