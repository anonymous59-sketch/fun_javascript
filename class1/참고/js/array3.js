// array3.js
// 배열.filter(). => true 반환해주는 요소를 새로운 배열에 추가.
let numAry = [10, 20, 30, 40, 50];
let filterAry = numAry.filter((elem) => {
  return elem >= 30;
});
console.log(filterAry);

const friends = ["박상원", "장수연", "양현규", "정찬우", "서영준"];

// 삭제할 친구이름 입력 => 제거, 없으면 warning을 띄우기.

// 1. 이름 입력하도록 prompt
let delName = prompt("삭제할 이름을 입력하세요:");
// 2. 입력한 값을 friends 배열에서 찾아서 filter 메소드 활용.
//    입력한 이름과 같은값은 걸러내고 아닌 값만 새로운 배열에 담도록.
let ixdx = friends.indexOf(delName);
if (ixdx == -1) {
  alert("찾는 이름이 없습니다.");
} else {
  const filterFriends = friends.filter((elem, idx) => {
    return elem != delName; // 찾는 인덱스를 기준으로 비교.
  });
  console.log(filterFriends);
}
