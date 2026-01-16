// console.log('function2 => ', result); // 같은 html에 연결된 자바스크립트이므로 전역 변수는 자바스크립트끼리 공유된다.
let ary1 = JSON.parse(jsonData1);
// let totalCnt = 167;
// let realEnd = Math.ceil(totalCnt/10);
let totalCnt = ary1.length;
let page = 4;

//// 함수(member => tr>td:(id),td(fn),td(ln),td(salary))
// tr 만들기 함수
function makeTr (member) {
  let tr = document.createElement('tr');
  let fields = ['id', 'first_name', 'last_name', 'salary'];
  fields.forEach(field => {
    const td = document.createElement('td');
    td.innerHTML = member[field];
    tr.appendChild(td);
  })
  return tr;
}

// 멤버 수 만큼 tr 생성
const target = document.querySelector('#target');

// 페이지별로 목록보여주기.
function showPageList(pg = 1) {
  // 기존 목록을 지우고 그리기
  target.innerHTML = '';

  let page = pg; // 현재 몇 페이지인지 알 수 있는 페이지 정보
  let start = (page - 1) * 10;
  let end = page * 10;
  let pageAry = ary1.slice(start, end);
  
  pageAry.forEach(elem => {
    const newTr = makeTr(elem);
    target.appendChild(newTr);
  })
} // end of showPageList
  
showPageList();

// 페이징 목록 생성 함수
function generatePagingList() {
  // 기존 목록 지우기
  let ulPagination = document.querySelector('ul.pagination');
  ulPagination.innerHTML = '';
  let realEnd = Math.ceil(totalCnt/10);
  let startPage = 1, endPage = 10;
  let prev = false, next = false;
  
  // 현재페이지를 기준으로 계산 
  endPage = Math.ceil(page / 10) * 10;
  startPage = endPage - 9;
  endPage = endPage > realEnd ? realEnd : endPage;
  // 이전 페이지, 이후 페이지 계산
  prev = startPage == 1 ? false : true;
  next = endPage < realEnd ? true : false;
  
  // 1 ~ 10 반복하면서
  //<li class="page-item"><a class="page-link" href="#">1</a></li> 만들기
  let liTag = document.createElement('li');
  liTag.className = 'page-item';
  let aHref = document.createElement('a');
  aHref.className = 'page-link';
  aHref.innerText = 'Previous';
  if (prev /* boolean 판별이라 한 번 더 '== true'로 할 필요가 없다 */) {
    aHref.setAttribute('href', '#');
  } else {
    liTag.classList.add('disabled');
  }
  liTag.appendChild(aHref);
  ulPagination.appendChild(liTag);
  
  for(let p = startPage; p <= endPage; p++) {
    let liTag = document.createElement('li');
    liTag.className = 'page-item';
    let aHref = document.createElement('a');
    aHref.className = 'page-link';
    aHref.setAttribute('href', '#');
    aHref.innerText = p;
    if(p == page) {
      liTag.classList.add('active');
      liTag.setAttribute('aria-current', 'page');
    }
    // 부모 자식 관계 형성
    liTag.appendChild(aHref);
    ulPagination.appendChild(liTag);
  }
  
  liTag = document.createElement('li');
  liTag.className = 'page-item';
  aHref = document.createElement('a');
  aHref.className = 'page-link';
  aHref.innerText = 'Next';
  if (next) {
    aHref.setAttribute('href', '#');
  } else {
    liTag.classList.add('disabled');
  }
  liTag.appendChild(aHref);
  ulPagination.appendChild(liTag);
}
generatePagingList();
//// 이벤트
document.querySelector('ul.pagination').addEventListener('click', e => {
  // console.dir(e.target.tagName == 'A'); // console.dir로 요소의 정보를 확인 할 수 있음, 요소 상세보기에서 tagName이 태그 종류임을 알 수 있음
  if(e.target.tagName == 'A'/* 태그 이름은 대소문자 구분해야됨 */) {
    let selectPage = e.target.innerText;
    // 페이징 목록
    page = selectPage;
    generatePagingList();

    showPageList(selectPage);
  }
});