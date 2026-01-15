// 체크리스트.js

// 데이터 초기값 설정
let itemListAry = ['수건', '칫솔']; 
// 전역 변수 및 초기값 표시
const input = document.querySelector(`input#item`);
const listDiv = document.querySelector('#itemList');
makeDiv();

//// 이벤트
// 추가버튼 눌렀을 시 이벤트
document.querySelector('button#add').addEventListener('click', e => {
  const itemName = input.value;
  if (!itemName) { // 빈 값이 입력되면 경고창
    alert('여행준비물을 입력해주세요');
    input.focus();
    return;
  }
  let exist = itemListAry.some(elem => elem == itemName);
  if (exist) { // 중복목록 있으면 경고창
    alert('동일한 여행준비물이 존재합니다.');
    input.value = '';
    input.focus();
    return;
  }
  itemListAry.push(itemName);
  input.value = '';
  input.focus();
  makeDiv();
});

// submit으로 실행해도 페이지 새로고침이 아니라 의도대로 리스트 만드는 이벤트
document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
   const itemName = input.value;
  if (!itemName) {
    alert('여행준비물을 입력해주세요');
    input.focus();
    return;
  }
  let exist = itemListAry.some(elem => elem == itemName)
  if (exist) {
    alert('동일한 여행준비물이 존재합니다.');
    input.value = '';
    input.focus();
    return;
  }
  itemListAry.push(itemName);
  input.value = '';
  input.focus();
  makeDiv();
});

//// 함수
// div에 그리는 함수
function makeDiv() {
  listDiv.innerHTML = '';
  let ul = document.createElement('ul'); // ul을 반복해서 만들 필요가 없어서 여기에 작성
  for (let item of itemListAry) {
    let li = makeLi(item);
    ul.appendChild(li);
  }
  listDiv.appendChild(ul);
}

// li를 만들고 결과값을 div그리는 함수에 넘겨줄 함수 
function makeLi(item1 = '') {
  let li = document.createElement('li');
  li.innerText = item1;
  let delMark = document.createElement('span'); // 문제 이미지랑 비슷하게 나오려면 버튼이 아니라 inline으로 추가
  delMark.innerText = 'X';
  delMark.setAttribute('data-name', item1); // 값을 식별하기 위한 속성, 입력 아이템 이름을 그대로 사용자 정의 속성에 넣어서 표현
  delMark.className = 'close'; // css를 위해 클래스 추가
  delMark.addEventListener('click', delBtn);
  li.appendChild(delMark);
  return li;
}

// 삭제버튼 기능 담당 함수
function delBtn() {
  let delItem = this.dataset.name;
  itemListAry = itemListAry.filter(elem => elem != delItem);
  input.focus(); // 삭제 후에 바로 입력할 수 있게 조정
  makeDiv();
}