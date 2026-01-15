// array3.js
// 배열.filter() => true를 반환해주는 요소를 새로운 배열에 추가.
let filterAry = [10, 20, 30, 40, 50].filter((elem, idx, ary) => { // 배열을 변수에 담지 않고 바로 사용해도 된다.
  if(elem >= 30) {
    return true;
  } else {
    return false;
  }
  // == return elem >= 30;
});
// console.log(filterAry);

filterAry = [10, 20, 30, 40, 50].filter(elem => elem >= 30); // 화살표 함수를 사용하고 true false를 return으로 바로 받는 것으로 줄인 결과
// console.log(filterAry);

const friends = [`박상원`, `장수연`, `양현규`, `정찬우`, `서영준`];

// 삭제할 친구이름 입력 => 제거, 배열 출력; 없으면 warning을 띄우기
let userName = prompt(`이름을 입력하세요`);
let index = friends.indexOf(userName)
if (index == -1) {
  alert(`WARNING`);
} else {
  const filterFriends = friends.filter(elem => elem != userName) 
  console.log(filterFriends);
}

// const filterFrineds = friends.filter(elem => elem != userName ? console.log(filterFriends) : ) // 될 거 같은데?