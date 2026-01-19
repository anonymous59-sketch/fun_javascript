// string2.js
const str = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores iure eveniet nisi deserunt fugit! Illo, quasi. Commodi ad ut quas, suscipit excepturi minus, porro ullam sunt reiciendis tempora, dolores temporibus!`;
const strAry = str.split(' '); // 구분자 기준으로 배열 만드는 매서드
// console.log(strAry);

// 문자열 생성
const container = document.querySelector('div.container');
strAry.forEach(word => {
  let span = document.createElement('span');
  span.innerHTML = word;
  container.appendChild(span);
});

// 1. 버튼에 클릭 이벤트 등록
// 2. 사용자 입력값 체크
// 3. 반복문 활용해서 span 요소를 가져와서 사용자의 입력값과 비교
// 4. 같으면 remove(), 없으면 메세지출력 
document.querySelector('button.btn-secondary').addEventListener('click', e => {
  let userText = document.querySelector('#user_input');
  let userValue = userText.value;
  document.querySelectorAll('span').forEach(elem => {
    if (elem.innerText.indexOf(userValue) != -1) {
      elem.remove();
    }})
  // const spans = document.querySelectorAll('span');
  // for (let span of spans) {
  //   if (span.innerText.indexOf(userValue) != -1) {
  //     span.remove();
  //     userText.value = '';
  //     userText.focus();
  //   }
  // }
});

let seconds = 1;
let job = setInterval(e => {
  // console.log('call');
  seconds--;
  if (seconds < 0) {
    let aryNum = document.querySelectorAll('span');
    if (aryNum.length == 0) {
      alert('성공');
    } else if (aryNum.length > 0) {
      alert('실패');
    }
    clearInterval(job); // 종료
  }
}, 1000); // setInterval(기능하는 함수, 시간(ms)), 시간별로 함수를 실행한다.
// 위의 기능에서 100초 안에 30개의 요소를 다 삭제하면 성공, 못하면 실패,