// 수업순서 : this.js 수업 1번, literal.js가 2번, function3.js가 3번
// literal.js
const n1 = 10;
const n2 = 30;

console.log('n1 값' + n1 + ' n2 값' + n2); // 백틱(``) 없이 따옴표로 사용하면 상당히 불편함
console.log(`n1 값 ${n1}, n2 값 ${n2}의 합은 ${n1 + n2}`); // 백틱(``)을 사용해서 작성하면 변수도 쉽게 이용할 수 있고 연산도 바로 할 수 있음
console.log(`n1 값 ${n1}, n2 값 ${n2}의 큰 값은 ${n1 > n2 ? n1 : n2}`) // 3항 연산식도 가능함. '식'은 가능하고 조건문, 반복문처럼 '문'의 단위는 사용할 수 없음

// index.html에 제목태그(h3) 아래 리스트태그(ul) 태그를 생성하고 아래 실습 진행 
const fruits = ['사과', '배', '복숭아', '포도'];
// map()은 함수를 매개값으로 받아서 사용할 수 있다. 
// map()은 배열의 각각의 값을 받아서 그 값을 무언가로 바꿔서 새로운 배열에 담을 수 있게 하는 메서드
const newAry = fruits.map((elem, idx, ary) => {
  // return {name: elem}; // 객체로 만들어서 값을 반환하여 newAry에 담는다.
  // return elem; // 변환하지 않고 newAry에 담을 수 있다.
  return `<li>${elem}</li>` // li 태그를 달아서 newAry에 담는다. 
}).join(''); // .join('')의 역할은 배열의 각각을 문자열로 만들고 구분자가 없이 연결하게 한다.

console.log(newAry); // 값 확인해보기
document.querySelector('ul').innerHTML = newAry; // index.html이 어떻게 출력되는지 확인하기

// 위의 내용을 아래처럼 간단하게 적을 수 있다.
const newAry1 = `${fruits.map((elem, idx, ary) => `<li>${elem}</li>`).join('')}`; // newAry1 이라고 변수를 적은 이유는 위의 newAry가 상수로 선언했기때문에 중복을 피하기 위함
document.querySelector('ul').innerHTML = newAry1; // 23줄의 newAry1을 보면 백틱(``)을 사용했고 ${}안에 함수를 넣은 것을 알 수 있다.
// 사실 백틱과 ${}를 사용하지 않고 그대로 넣어도(21번 줄처럼) innerHTML의 특성상 적용은 되는데 지금은 literal 수업이니까 백틱을 넣고 ${}안에 함수를 넣은 의도가 백틱 안의 ${}안에는 변수와 식, 함수까지 들어가도 적용이 된다는 것을 보여주기위함.

// 위의 내용을 member.html에서 실습해보기
// member.html에서 아래 내용을 <ul class="pagination justify-content-center">의 밑에 복붙
// <li class="page-item disabled"><a class="page-link">Previous</a></li>
// <li class="page-item"><a class="page-link" href="#">1</a></li>
// <li class="page-item active" aria-current="page"><a class="page-link" href="#">2</a></li>
// <li class="page-item"><a class="page-link" href="#">3</a></li>
// <li class="page-item"><a class="page-link" href="#">Next</a></li>

// 그리고 member.html의 script에서 function2.js를 function3.js로 수정하고 컨트롤 클릭해서 function3.js 파일을 만든다
// function2.js 파일의 내용을 전부 복사해서 function3.js 파일에 붙여넣는다.
// function3.js 파일의 목적은 document.createElement를 사용하지 않고 위에서 사용한 백틱과 ${}를 이용해 간단하게 만드는 것을 목적으로 한다.
// function3.js 파일에서 계속
