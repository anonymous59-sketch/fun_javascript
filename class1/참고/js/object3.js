// object3.js
const studentAry = [
  { stdNo: "25-0001", stdName: "홍길동", phone: "010-1111-1111", score: 80 },
  { stdNo: "25-0002", stdName: "김명수", phone: "010-2222-2222", score: 70 },
  { stdNo: "25-0003", stdName: "최덕배", phone: "010-3333-3333", score: 85 },
  { stdNo: "25-0004", stdName: "박우수", phone: "010-4444-4444", score: 95 },
];

let htmlStr = `<table border="2">
      <thead>
        <tr>
          <th>학생번호</th>
          <th>이름</th>
          <th>연락처</th>
          <th>점수</th>
        </tr>
      </thead>
      <tbody>`;
for (let student of studentAry) {
  htmlStr += `<tr>
          <td>${student.stdNo}</td>
          <td>${student.stdName}</td>
          <td>${student.phone}</td>
          <td>${student.score}</td>
        </tr>`;
}
htmlStr += `</tbody>
    </table>`;
document.writeln(htmlStr);
