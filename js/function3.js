// 수업순서 : this.js 수업 1번, literal.js가 2번, function3.js가 3번
// 밑의 내용은 function2.js 내용을 복붙한것을 기반으로 작성한거니 참고, 각자의 function2.js와 내용이 다를 수 있으니 자신의 function2.js를 가지고 해야됨

// console.log('function2 => ', result); // 같은 html에 연결된 자바스크립트이므로 전역 변수는 자바스크립트끼리 공유된다.
let ary1 = JSON.parse(jsonData1);
// let totalCnt = 167;
// let realEnd = Math.ceil(totalCnt/10);
let totalCnt = ary1.length;
let page = 1;

//// 함수(member => tr>td:(id),td(fn),td(ln),td(salary))
// tr 만들기 함수
// createElement를 안쓰고 만들기 실습
function makeTr (member) {
  let tr = `<tr><td>${member.id}</td><td>${member.first_name}</td><td>${member.last_name}</td><td>${member.salary}</td><td id = 'del'><button data-delno = '${member.id}'>삭제</button></td></tr>` // 여기는 혼자서 실습
  return tr;
}

// 멤버 수 만큼 tr 생성
const target = document.querySelector('#target');
const pageSize = 6; // 페이지의 리스트 수

// 페이지별로 목록보여주기.
function showPageList(pg = 1) {
  // 기존 목록을 지우고 그리기
  target.innerHTML = '';

  let page = pg; // 현재 몇 페이지인지 알 수 있는 페이지 정보
  let start = (page - 1) * pageSize;
  let end = page * pageSize;
  let pageAry = ary1.slice(start, end);
  
  pageAry.forEach(elem => {
    const newTr = makeTr(elem);
    target.insertAdjacentHTML('beforeend', newTr);
  })
} // end of showPageList
showPageList();

// 페이징 목록 생성 함수
function generatePagingList() {
  // 기존 목록 지우기
  let ulPagination = document.querySelector('ul.pagination');
  ulPagination.innerHTML = '';
  let realEnd = Math.ceil(totalCnt / pageSize);
  let startPage = 1, endPage = 10;
  let prev = false, next = false;
  
  // 현재페이지를 기준으로 계산 
  endPage = Math.ceil(page / 10) * 10;
  startPage = endPage - 9;
  endPage = endPage > realEnd ? realEnd : endPage;
  // 이전 페이지, 이후 페이지 계산
  prev = startPage == 1 ? false : true;
  next = endPage < realEnd ? true : false;
  
  //////////////////////////////////////////////////// 여기가 변하는 내용//////////////////////////////////////////////////////////////
  // prev
  const prevStr = `<li class="page-item ${prev ? "" : 'disabled'}"><a class="page-link" href = ${prev ? '#' : ''} data-page = "${startPage -1}">Previous</a></li>`;
  // prevStr이라는 변수를 선언하고 값은 member.html에 Previous가 있는 li태그의 그 문장을 복사해서 붙여넣는다
  // 클래스와 페이지 넣는 기능이 필요하기때문에 ${}을 이용해서 disabled 클래스와 data-page의 값을 넣을 수 있게 수정한다.
  // 3항 연산자를 잘 모르면 이해하기 힘들 수 있음. A ? B : C (A가 참이면 B를 출력하고 A가 거짓이면 C를 출력한다)의 뜻을 잘 알아야함
  ulPagination.insertAdjacentHTML('beforeend', prevStr); // insertAdjacentHTML을 이용해서 ul태그 아래 넣을 건데 beforeend니까 ul태그의 닫는 태그 위에 삽입하는 순서로 작동함
  
  // page
  for(let p = startPage; p <= endPage; p++) {
    const pageStr = `<li class="page-item ${p == page ? 'active' : ''}" aria-current = ${p == page ? 'page' : ''}><a class="page-link" href="#" data-page = '${p}'>${p}</a></li>`
    ulPagination.insertAdjacentHTML("beforeend", pageStr);
    // 위의 prevStr과 비슷한 원리, 대신 '이전' 버튼과 '다음' 버튼과는 달리 페이지를 누르는 버튼이라서 중간 상세 ${}를 지정해주는 것이 조금 다름
  }
  
  // next 
  const nextStr = `<li class="page-item ${next ? '' : 'disabled'}"><a class="page-link" href= ${next ? '#' : ''} data-page = '${endPage + 1}'>Next</a></li>`;
  ulPagination.insertAdjacentHTML('beforeend', nextStr);
  // prevStr과 비슷함
//////////////////////////////////////////// 내용 변화 끝 /////////////////////////////////////////////////////
}
generatePagingList();
//// 이벤트
document.querySelector('ul.pagination').addEventListener('click', e => {
  // console.dir(e.target.tagName == 'A'); // console.dir로 요소의 정보를 확인 할 수 있음, 요소 상세보기에서 tagName이 태그 종류임을 알 수 있음
  if(e.target.tagName == 'A'/* 태그 이름은 대소문자 구분해야됨 */) {
    let selectPage = e.target.dataset.page;
    // 페이징 목록
    page = selectPage;
    generatePagingList();
    showPageList(selectPage);
  }
});

//// 삭제버튼 만들기 동적 렌더링이 발생하는 페이지는 이벤트 위임 기능을 사용하기
target.addEventListener('click', e => {
  // console.log(e.target.tagName);
  if(e.target.tagName == 'BUTTON') {
    // console.log(e.target.dataset.delno);
    ary1 = ary1.filter(elem => elem.id != e.target.dataset.delno);
    generatePagingList();
    showPageList(page);
  }
})