// student.js

console.log(document.querySelectorAll('.table > tbody > tr > td')); // 자식선택자 잘 안되는거 뭐가문제일까? >> 잘되네?

let students = [{
    studNo: '26-001',
    studName: '최길동',
    stuScore: 30
  },
  {
    studNo: '26-002',
    studName: '이길동',
    stuScore: 40
  },
  {
    studNo: '26-003',
    studName: '하길동',
    stuScore: 50
  },
];
const target = document.querySelector('.list tbody');
// 기존의 tbody의 html 내용을 삭제
target.innerHTML = "";
makeList();

// 반복문 학생 수만큼 생성 (전역에다가 하는건 기능이 잘 되는지 시험해보고 주석 또는 삭제처리하기)
// for (let i = 0; i < students.length; i++) {
//   let tr = makeTr(students[i]);
//   console.log(tr);
//   target.appendChild(tr);
// }

///////////////// 이벤트 /////////////////
// console.log(document.querySelector('button[class~="btn-success"]'))
document.querySelector('button[class~="btn-success"]').addEventListener('click', () => {
  // console.log(e.target);
  const studNo = document.querySelector('#stuNo').value;
  const studName = document.querySelector('#studName').value;
  const stuScore = document.querySelector('#score').value;
  // target.appendChild(makeTr({studNo, studName, stuScore})) // 만약 속성과 값에 들어갈 변수의 이름이 같으면 하나만 사용해서 줄일 수 있다.
  // 항목을 입력하지 않으면 입력하라는 경고문 나오고 중단.
  if (!studNo || !studName || !stuScore) { // 값이 입력되지 않으면 경고
    alert('항목을 입력하세요');
    return;
  }
  // 중복값 체크
  // for (let check of students) {
  //   if (check.studNo == studNo) {
  //     alert('동일한 학생 번호가 존재합니다');
  //     return;
  //   }
  // }

  let exists = students.some(elem => elem.studNo == studNo); // some이라는 메소드는 반복해서 비교하고 같은 값이 하나라도 있으면 true를 반환한다.
  // every 모든 배열이 만족하면 true를 반환한다.
  // if (elem.studNo == studNo) {
  //   return true;
  // }
  // return false;) //위의 문장이랑 같은 말
  if (exists) {
    alert('동일한 학생번호 존재합니다.');
    document.querySelectorAll('.table input').forEach(elem => elem.value = '');
    document.querySelector('#stuNo').focus();
    return;
  }

  // 값을 집어넣고 배열에 하나씩 추가하기
  students.push({studNo, studName, stuScore});
  makeList();
  
  // 등록 후 초기화 및 포커스
  document.querySelectorAll('.table input').forEach(elem => elem.value = '');
  document.querySelector('#stuNo').focus();
})
// 등록버튼 end of submit

document.querySelector('button[class~="btn-secondary"]').addEventListener('click', () => {
  document.querySelectorAll('.table input').forEach(elem => elem.value = '')
  document.querySelector('#stuNo').focus();
}) 
// 취소버튼 end of cancel


////////////////  함수  //////////////////
// 학생정보 -> tr 생성해주는 함수
function makeTr(student = {}) {
  // tr을 생성
  let tr = document.createElement('tr');
  let td = document.createElement('td');
  let check = document.createElement('input');
  check.setAttribute('type', 'checkbox');
  check.name = 'delCheck';
  check.setAttribute('data-sno', student.studNo);
  td.appendChild(check);
  tr.appendChild(td);
  for (let prop in student) {
    // td을 생성
    td = document.createElement('td');
    td.innerText = student[prop];
    tr.appendChild(td);
  }
  let button = document.createElement('button');
  // 삭제버튼의 이벤트
  // 삭제버튼을 누르면 배열에서 삭제하고 목록 최신화
  button.addEventListener('click', deleteRowFnc);
  button.setAttribute('data-sno', student.studNo); // <button data-sno='25-001'>.삭제<button>
  td = document.createElement('td');  
  button.className = 'btn btn-danger';
  button.innerText = '삭제';
  td.appendChild(button);
  tr.appendChild(td);
  // 반환
  return tr;
} // end of makeTr

// 배열을 화면에 출력하는 함수
function makeList() {
  target.innerHTML = ""; // 기존목록을 지우기
  for (let tag of students) {
    let tr = makeTr(tag);
    // console.log(tr);
    target.appendChild(tr);
  }
} // end of makeList

//삭제버튼에 이벤트 핸들러
function deleteRowFnc(){
  // console.log(this.dataset.sno); // data-sno 라고 값을 넣으면 dataset.sno 라는 식으로 값을 불러올 수 있다.
  let delNo = this.dataset.sno;
  let delChk = document.querySelectorAll("input[name='delCheck']:checked");
  let delChk1 = [];
  for (let a of delChk) {
    delChk1.push(a.dataset.sno);
  }
  students = students.filter(elem => {
    if (elem.studNo == delNo) {
      return false;
    }
    for (let del of delChk1) {
      if (elem.studNo == del) {
        return false;
      }
    }
    return true;
  });
  makeList();
}