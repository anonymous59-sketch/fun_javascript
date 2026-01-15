// array.js

// const numAry = new Array(); // 빈 배열을 클래스를 가지고 와서 배열 객체를 만들 때, // numAry = [10, 20, 30]; // 초기값을 바로 넣기 위해서 제공하는 편의방식
const numAry = [10, 20, 30];
const str = 'hello';

// str.push(`world`); // 'str'은 배열이 아니라서 배열 속성인 .push를 사용할 수 없다.

const chrAry = ['a', 'b', 'c'];

const newAry = numAry.concat(chrAry); // .concat 두 개의 배열을 묶어서 새로운 배열로 만든다.
console.log(numAry, chrAry, newAry, newAry.join(`-`)); // 배열.join -> 배열요소를 문자열로 변환해서 표현해준다. 구분자의 기본형은 ,이고 괄호 안에 넣어서 변경할 수 있다.

// 배열 추가, 삭제

numAry.push(40); // 배열 제일 끝에 값을 추가.
console.log(numAry);

numAry.unshift(50); // 배열의 제일 앞에 값을 추가.
console.log(numAry);

numAry.pop(); // 배열의 제일 끝의 값을 삭제.
console.log(numAry);

numAry.shift(); // 배열 제일 앞의 값을 삭제.
console.log(numAry);

numAry.splice(0, 2, 1, 2, 3, 4, 5); // 첫번째 매개값: 위치, 두번째 매개값: 수정할 대상의 크기, 세번째 값: 대체할 값 
// 두번째 매개값에 수정할 크기를 넣고 세번째 값의 수로 몇개를 덮어쓸 건지 확인 ; 세번째 매개값이 없으면 삭제
console.log(numAry);

console.log(numAry.slice(3, 5)); // 어느 위치부터 몇 개를 잘라내서 새로운 배열을 만들겠다. index 값을 범위로 할 때 자바스크립트는 대체적으로 시작값은 포함, 마지막 값은 제외.
console.log(numAry);

numAry.forEach((elem, idx, ary) =>  // 배열의 각 요소들을 함수에 적용해본다. 화살표 함수를 자주 사용
  console.log(elem, idx, ary) // 첫번째는 배열의 해당 요소를 표현, 두번째값은 index번호, 세번째는 배열 그 자체 ; 이 값은 정해져있다.
);

// 각 요소들 값 중에서 짝수만 콘솔에 출력.
console.log(`배열은 ${numAry}이다.`);
numAry.forEach((elem, idx, ary) => {
  if (elem % 2 == 0 && idx <= 2) {
    console.log(`해당 배열의 짝수의 값은 ${elem}이고 인덱스는 ${idx}이다.`);
  }
});

// 화살표함수, 3항 연산자까지 사용해서 코드 최소화하기
numAry.forEach((elem, idx) => idx < 3 ? console.log(elem) : ``);