// object2.js
// 객체 + 배열 활용.
// 학생번호, 이름, 연락처, 점수
const studentAry = [
  { stdNo: "25-0001", stdName: "홍길동", phone: "010-1111-1111", score: 80 },
  { stdNo: "25-0002", stdName: "김명수", phone: "010-2222-2222", score: 70 },
  { stdNo: "25-0003", stdName: "최덕배", phone: "010-3333-3333", score: 85 },
  { stdNo: "25-0004", stdName: "박우수", phone: "010-4444-4444", score: 95 },
];
console.log(studentAry[1].stdName);
let sum = 0; // 누적하기 위한 변수.
let htmlStr = "<ul>";
for (let student of studentAry) {
  sum += student.score;
  htmlStr += `<li> ${student.stdName}(${student.score}) </li>`;
}
htmlStr += `<li>합계점수(${sum})</li>`;
htmlStr += "</ul>";
document.writeln(htmlStr);

console.log(`반점수 합계: ${sum}, 평균: ${sum / studentAry.length}`);
// let sum = studentAry[0].score + studentAry[1].score + studentAry[2].score;
