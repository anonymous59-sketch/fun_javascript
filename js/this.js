//// 기존의 index.html 파일을 다른 이름 저장으로 member.html로 저장,
//// 기존의 index.html 파일의 body 영역 안에서 h3태그와 script태그의 src = 'js/this.js'만 남기고 다 삭제
//// 그리고 js/this.js 문구를 컨트롤 클릭해서 파일을 만들고 this.js에 아래 내용 적기
//// 주석 내용은 교수님 설명을 풀어서 적어놨으니 다 따라 적을 필요 없음
// 수업순서 : this.js 수업 1번, literal.js가 2번, function3.js가 3번

// this 사용.
// 책 p42~

// 객체에서의 this
const obj = {
  name: 'hong',
  // showThis: function showThis() {} <<= 이런 식으로 객체 안에 메서드를 정의하는 것을 아래와 같이 표현할 수 있음
  showThis() {
    // 1. 어떠한 객체 안의 this는 자신의 객체를 가르킴
    let name = "hwang";
    console.log(this);
    console.log(name); // showThis 안의 변수인 name('hwang')을 가르키게 됨
    console.log(this.name); // this.name을 하면 이 객체 안의 속성(name = 'hong')을 가르키게 됨
  }
};
obj.showThis(); // obj의 showThis 메서드 사용하기 (this가 무엇을 가르키는지 알아보기 위함)

// 2. 함수에서 this
function thisFunc() {
  console.log(this); // 여기의 this는 Window 객체를 가르킴
}
thisFunc(); // 함수 안의 this를 확인해보기 위해 함수 실행해보기

// 3. 이벤트의 this
// 이벤트에서 function으로 정의하면 this는 이벤트 대상을 가르키고 화살표함수로 정의하면 this는 Window 객체를 가르킨다.
document.querySelector('h3').addEventListener('click', function (e) {
  console.log(this); // 이벤트 대상을 가르킴 (h3 태그로 적혀진 제목을 클릭해보면 알 수 있음)
});

document.querySelector('h3').addEventListener('click', (e) => {
  console.log(this); // 화살표 함수를 이용해서 만들면 this가 Windows 객체를 가르킴
});

console.log(this); // 아무데서나 this를 확인해보면 Window 객체를 불러온다.

// 변수 선언 방식 : var(예전방식) vs let(ES6버전 이후)
// var의 경우
var v1 = 10; // 전역변수

function sum() {
  var v1 = 20; // 지역변수 (함수 안에서만 존재하는 변수)
  console.log(v1); // sum 함수 안에 있는 v1을 호출하니까 20이 나온다
}
sum();
console.log(v1); // sum 함수 밖에 있는 v1을 호출해서 10이 나온다.

{
  var v1 = 30;
  console.log(v1); // 30이 찍힌다.
}
console.log(v1); // 30이 찍힌다.
// var로 선언하는 변수는 함수 안과 밖 기준으로만 구분이 되고 블록 구분은 적용되지 않고 전역인 것처럼 생각한다

// let의 경우
let v2 = 'hello'; // 전역변수
{
  let v2 = 'world'; // 지역변수
  console.log(v2); // 'world'값이 출력
}
console.log(v2); // 'hello' 값이 출력
// let 변수는 {} 블록 단위로 변수를 구분을 할 수 있다.
// for구문이나 if구문 등등 {} 단위로 구분이 된다면 let은 따로따로 인식한다.
// 책 p54의 마티아스 바인스 규칙을 따르기로 한다.
// 책 3장(함수 기본값 인수)으로 넘어감

// 함수 인수의 기본값
function max(n1, n2) {
// 만약 초기값이 없다면 아래의 조건이 있어야함
// 자바스크립트는 max(); 이런식으로 n1값과 n2 값이 없어도 값을 undefined 값을 가지고 와서 실행을 해버리기때문에 초기값이 없으면 아래 조건이 필요함
  if(n2 == undefined) {
    if(n1 == undefined) {
      return 0;
    }
    return n1;
  }
// 아래가 함수의 원하는 기능  
  if(n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}
let result1 = max(2, 3); // 만약 let result1 = max(); 이런식으로 코드를 사용하게되면 위의 max(n1, n2) 함수에 undefined 관련 조건이 없었다면 문제가 생길 수 있음
let result2 = max(10, 11);
let result3 = max(result1, result2);

function max1(n1 = 0, n2 = 0 /* 이런식으로 매개변수의 초기값을 지정해줄 수 있음 */) {
// 매개값의 초기값이 주어졌기 때문에 값을 입력하지 않고 함수를 호출하는 형식인 max1(); 이런식으로 사용을 해도 초기값 0, 0을 넣기 때문에 앞의 undefiend 관련 조건을 넣을 필요가 없음
  if(n1 > n2) {
    return n1;
  } else {
    return n2;
  }
}

// 4장 literal은 새로운 literal.js 파일 만들어서 계속