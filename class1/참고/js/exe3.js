// exe3.js

const numAry = [10, 30, 50];
numAry[numAry.length] = 20;
numAry[numAry.length] = 60;
numAry[numAry.length] = 80;

// 콘솔에 출력.
// 50보다 크거나 같은 값만 출력.
// 홀수번째 값을 출력.
// 큰값.
let max = 0;
for (let i = 0; i < numAry.length; i++) {
  console.log(`numAry[${i}] 의 값: ${numAry[i]}`);
  if (max < numAry[i]) {
    max = numAry[i];
  }
}
console.log(`최대값: ${max}`);

// 회원정보(회원아이디, 이름, 포인트)
let members = [
  { id: "user01", name: "홍길동", point: 800 },
  { id: "user02", name: "김문희", point: 756 },
  { id: "user03", name: "박동철", point: 980 },
];

// 포인트 합계: 2586, 최고포인트: 980
let sum = 0;
for (let i = 0; i < members.length; i++) {
  sum += members[i].point;
  if (max < members[i].point) {
    max = members[i].point;
  }
}
console.log(`포인트 합계: ${sum}, 최고포인트: ${max}`);

// 화면에 목록출력하기.
let str = `<table border="3">
      <thead>
        <tr>
          <th>아이디</th>
          <th>이름</th>
          <th>포인트</th>
        </tr>
      </thead>
      <tbody>`;
for (let member of members) {
  str += `<tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>${member.point}</td>
          </tr>`;
}
str += `<tr><td colspan='2'>합계</td><td>${sum}</td></tr>`;
str += `</tbody>
    </table>`;
document.writeln(str);
