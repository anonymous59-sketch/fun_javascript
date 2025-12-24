// creat.js
console.log(document.querySelector(`button`));

// document.querySelector('button').addEventListener('click', () => {
//   let liTag = document.createElement(`li`);
//   let text = document.createTextNode(document.querySelector('#subject').value);
//   liTag.appendChild(text);
//   document.querySelector(`#itemList`).appendChild(liTag);
// })
// form의 action 값을 '#'(자기 자신)으로 설정해서 저장이 되었음

// button 태그에 넣을 것인지 form태그의 submit에다 기능을 넣을 것인지 확인해야 됨
// 버블링 : 이벤트가 시작될 때 가장 하위요소부터 추적해서 상위 요소로 이벤트 순서를 작용하는 방법
// 이벤트가 원래 하위에서 상위로 전부 적용하게됨 : 버블링, 반대로 제일 상위에서 하위로 가는 경우가 캡쳐링
// addEventListener('작동방식', '이벤트 핸들러', '버블링, 캡처링 방식 정하기' => 기본이 false(버블링))

// form submit 이벤트를 등록 action의 값이 없어도 새로고침이 안되어서 저장이 되는 방식
document.querySelector('form[name="addForm"]').addEventListener('submit', (e) => {  // submit에 대하여 제어를 해야되니까 버튼 타입을 submit으로 설정해야 됨
  e.preventDefault(); //submit 차단. // 페이지 새로고침을 막는 방법
  let title = document.querySelector('#subject').value;
  if (!title) {
    alert('값을 입력해주세요');
    return; // 함수에서 빠져나오기
  }
  let liTag = document.createElement('li');
  liTag.innerHTML = `${title} <button id = 'delBtn'>삭제</button>`;
  // li 태그에 이벤트
  liTag.addEventListener('click', e => {
    // console.log(e); // target의 tagName을 확인해보자
    // console.log(e.target.tagName);
    let target = e.target;
    if (e.target.tagName == 'BUTTON') {
      target = e.target.parentElement;
    }
    e.stopPropagation(); // 이벤트 전파 중단
    target.classList.toggle('cancel'); // 밑에 방법도 복잡하다고 해서 넣은 편의성 기능
    // if (e.target.classList.contains('cancel')) { // 클래스리스트에 'cancel'이라는 클래스가 있는지 확인하기
    //   e.target.classList.remove('cancel'); //  'cancel'이라는 이름의 클래스를 삭제하겠다는 의미. 클래스 리스트를 불러오고 거기에서 삭제하는 느낌
    // } else {
    //   e.target.classList.add('cancel'); // 'cancel'이라는 이름의 클래스를 추가하겠다는 의미. 클래스 리스트를 불러오고 거기에서 추가하는 느낌
    // }
    // e.target.className = 'cancel light standard';  // className이 클래스 이름을 가져와서 e.target에 집어넣겠다는 의미의 속성 ; .이 없어도 된다.
    // console.log(e.target.classList); // e.target에 적용되는 클래스의 리스트를 보여준다.; 배열처럼 표시한다.
  }, true)
  
  // 삭제하는 것 
  let delBtn1 = document.createElement('button');
  delBtn1.innerText = '삭제1';
  liTag.appendChild(delBtn1);
  delBtn1.addEventListener('click', e => e.target.parentElement.remove())
  // 리스트 추가하기
  document.querySelector('#itemList').appendChild(liTag);
  // 초기화
  document.querySelector('#subject').value = ''; 
  // 포커스 넣기
  document.querySelector('#subject').focus();

  // 삭제하는 것 내가 해본 거 // Selector는 하나만 불러오는 거라서 문제가 있으니 forEach를 사용해야 되지 않을까
  document.querySelectorAll(`#delBtn`).forEach((elem) => {
    elem.addEventListener('click', e => {
      e.target.parentElement.remove();
  })
  })
})
