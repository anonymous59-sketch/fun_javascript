// event.js
// 이벤트 - 이벤트 핸들러가 있어야함
// 버튼(클릭) - 이벤트핸들러 등록해보기

// doucument.querySelector('선택자') => 화면요소를 찾아서 반환.

console.dir(document.querySelector("button")); // console.dir 객체의 구조를 객체의 모양으로 볼 수 있게 해주는 함수

document.querySelector('button') // 버튼을 선택하고
  .addEventListener('click', function () { // 매개값 : 1) 이벤트유형, 2) 이벤트 핸들러(함수)  함수도 매개값이 될 수 있다.
    console.log(`클릭됨`);
    console.log(this); //console.log(this) 이것이 무엇을 가르키는지 확인. this는 현재 이벤트 핸들러를 적용받는 대상을 가르킨다.
    this.style.backgroundColor = `yellow`;
    this.innerHTML = `Event`;
  }); // 버튼을 `클릭` 했을 때 `함수`를 실행하는 이벤트 핸들러


// li에 각 요소에 이벤트
let allList = document.querySelectorAll("#first>li"); // querySelector는 하나만 가져오는데 All을 붙이면 다 가져온다.
console.log(allList); // 어떤걸 가져오는지 콘솔창에서 확인 할 수 있다. 확인해보니 배열 느낌으로 되어있다.
for (i = 0; i < allList.length; i++) {
  allList[i].addEventListener('click', liClickFnc);
  allList[i].addEventListener('mouseout', mouseOutFnc);
  allList[i].addEventListener('mouseover', mouseOverFnc);
}

document.querySelector('button').addEventListener(`mouseover`, (e) => {
  // 이벤트핸들러(this를 하니 버튼이 아닌 window 객체를 가르켜서 e로 매개변수를 주고 타겟을 다시 설정)
  console.log(e.target);
  e.target.style.color = 'blue';
});

function liClickFnc(e) {
  console.log(e.target.innerHTML); // e.target 이벤트의 대상 // event(이건 객체라고 했음) 매개값을 주어서 윈도우 객체 안의 타겟을 확인하기 쉽게 만들었고 다시 확인해보니 타겟이 li인 것을 확인 할 수 있었다. 그러니 e.target은 이벤트의 대상이 그 li태그이고 이제 그걸 가지고 innerHTML을 통해 값을 조정한다. 
}

function mouseOverFnc(e) {
  e.target.style.backgroundColor = "yellow";
}

function mouseOutFnc(e) {
  e.target.style.backgroundColor = "";
}