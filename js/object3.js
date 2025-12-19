//object3.js
const studentAry = [{
    stdNo: `25-0001`,
    stdName: `홍길동`,
    phone: `010-1111-2222`,
    score: 80,
  },
  {
    stdNo: `25-0002`,
    stdName: `김명수`,
    phone: `010-2222-3333`,
    score: 85,
  },
  {
    stdNo: `25-0003`,
    stdName: `최덕배`,
    phone: `010-3333-4444`,
    score: 70,
  },
  {
    stdNo: `25-0004`,
    stdName: `박우수`,
    phone: `010-4444-5555`,
    score: 95,
  },
]

let table = `<table border = '2'>`;
table += `<thead><tr><th>학생번호</th><th>학생이름</th><th>전화번호</th><th>점수</th></thead><tbody>`;
for (let stu of studentAry) {
  table += `<tr><td>${stu.stdNo}</td><td>${stu.stdName}</td><td>${stu.phone}</td><td>${stu.score}</td></tr>`;
}
table += `</tbody></table>`;

document.writeln(table);