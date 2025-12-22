//array2.js

const nameAry = new Array();
nameAry.push(`홍길동`);
nameAry.unshift(`최길동`);
nameAry.splice(2, 0, `홍두깨`, `김길동`, `박길동`);

nameAry.sort(); // 배열을 정렬한다. 정렬 기준은 가나다 순.
nameAry.reverse(); // 배열을 반대로 정렬

let idx = nameAry.indexOf(`김길`); // 매개값으로 들어오는 값의 인덱스를 반환(return)해준다.
console.log(idx); // 값이 없으면 -1을 반환해준다. ; 찾는 값의 인덱스 반환이라 값이 배열에 있는지 확인하는데 사용한다.

// 입력 받아서 친구의 이름을 목록에서 삭제.

let putName = prompt(`이름을 입력해주세요`);
idx = nameAry.indexOf(putName);
idx == -1 ? alert(`목록에 이름이 없습니다`) : nameAry.splice(idx, 1); console.log(nameAry);

// if (idx == -1) {
//   alert(`목록에 이름이 없습니다.`);
// } else {
//   nameAry.splice(idx, 1);
//   console.log(nameAry);
// }

// nameAry.forEach(elem => console.log(elem));