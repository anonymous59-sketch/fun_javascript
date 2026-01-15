// object2.js
// 객체 + 배열 활용.
// 학생 : 학생번호, 이름, 연락처, 점수
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

console.log(studentAry[1].stdName);

let sum = studentAry[0].score + studentAry[1].score + studentAry[2].scroe;

sum = 0; // 변수 선언 필요 또는 초기화 필요
let htmlStr = `<ul>`; // html에 한 번 적어보기

for (let student of studentAry) {
  sum += student.score;
  htmlStr += `<li> ${student.stdName}(${student.score}) </li>`;
}
htmlStr += `<li>합계 점수 (${sum})</li>`;
htmlStr += `</ul>`;
document.writeln(htmlStr);
// += 연산자는 누적시킨다라는 개념으로 이해하자. htmlStr 초기값이 `<ul>` 이고 그 다음 for ... of ... 반복문에 의해서 리스트가 그 뒤에 추가되는 방식이고 마지막에 for 반복문 밖에서 닫는 태그를 또 누적해서 ul, li를 완성한다.

console.log(`반 점수 합계 ${sum}, 평균 ${sum / studentAry.length}`);