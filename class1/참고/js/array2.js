// array2.js
const nameAry = new Array();
nameAry.push("홍길동");
nameAry.unshift("양현규");
nameAry.splice(1, 0, "정찬우", "김진환", "홍길영");

nameAry.sort(); // 가나다 순 정렬.
nameAry.reverse();

// 홍길영,홍길동,정찬우,양현규,김진환
// 입력 받아서 친구의 이름을 목록에서 삭제.
// 1. 삭제할 친구이름 입력받기.
let delName = prompt("삭제할 이름을 입력하세요:");
// 2. 이름을 찾기 (인덱스를 활용)
let idx = nameAry.indexOf(delName); // 찾는 값의 인덱스 반환.
// 3. 배열에서 삭제하기 만약 삭제할 이름이 없으면 warning 띄우기.
if (idx == -1) {
  alert("찾는 이름이 없습니다.");
} else {
  nameAry.splice(idx, 1);
}
// 목록확인.
nameAry.forEach((elem) => {
  console.log(elem);
});
