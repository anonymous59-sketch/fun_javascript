// student.js
let students = [
  { studNo: "25-001", studName: "홍길동", score: 90 },
  { studNo: "25-002", studName: "김길동", score: 80 },
  { studNo: "25-003", studName: "박길동", score: 70 },
];

// 기존의 tbody의 html 삭제.
const target = document.querySelector("div.list tbody");
target.innerHTML = "";

makeList();

////////////////// 이벤트 //////////////////////
// 등록버튼.
document
  .querySelector('button[class*="success"]') //
  .addEventListener("click", (e) => {
    const studNo = document.querySelector("#studNo").value;
    const studName = document.querySelector("#studName").value;
    const score = document.querySelector("#score").value;
    // 항목입력X -> 입력하세요.
    if (!studNo || !studName || !score) {
      alert("입력하세요!");
      return;
    }
    // 중복값체크.
    // for (let student of students) {
    //   if (student.studNo == studNo) {
    //     alert("동일한 학생번호 존재합니다.");
    //     return;
    //   }
    // }
    let exists = students.some((elem) => elem.studNo == studNo);
    if (exists) {
      alert("동일한 학생번호 존재합니다.");
      return;
    }
    students.push({ studNo, studName, score });
    makeList();
    // target.appendChild(makeTr({ studNo, studName, score })); // 속성 = 변수 => 줄임표현.
  });

////////////////// 함수 //////////////////////
// 배열 => 화면에 출력.
function makeList() {
  target.innerHTML = ""; // 기존목록 지우기.
  // 학생수만큼 생성.
  for (let i = 0; i < students.length; i++) {
    //
    let tr = makeTr(students[i]);
    // div.list tbody의 하위요소로 추가.
    target.appendChild(tr);
  }
} // end of makeList.

// 학생정보 -> tr 생성해주는 함수.
function makeTr(student = {}) {
  let fields = ["studNo", "studName", "score"];
  // tr 생성.
  let tr = document.createElement("tr");
  for (let prop of fields /*in student*/) {
    // td 생성.
    let td = document.createElement("td");
    td.innerText = student[prop];
    tr.appendChild(td);
  }
  // <td><button>삭제</button></td>
  let td = document.createElement("td"); // <td></td>
  let delBtn = document.createElement("button"); // <button></button>
  // 삭제버튼의 이벤트.
  delBtn.addEventListener("click", deleteRowFnc);
  delBtn.innerText = "삭제"; // <button>삭제</button>
  delBtn.className = "btn btn-danger"; // <button class='btn btn-danger'>삭제</button>
  delBtn.setAttribute("data-sno", student.studNo); // <button data-sno="25-001">..</button>
  td.appendChild(delBtn); // <td><button class='btn btn-danger'>삭제</button></td>
  tr.appendChild(td); // <tr>....<td><button class='btn btn-danger'>삭제</button></td></tr>
  // 반환.
  return tr;
} // end of makeTr.

// 삭제버튼에 이벤트핸들러.
function deleteRowFnc(e) {
  // this.parentElement.parentElement.remove();
  let delNo = this.dataset.sno; // 삭제할 학생번호
  students = students.filter((elem) => elem.studNo != delNo); // 조건을 만족하는 배열 생성.
  makeList();
}
