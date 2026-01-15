// array.js

const numAry = [10, 20, 30]; // new Array();
const chrAry = ["a", "b", "c"];
const str = "hello";

const newAry = numAry.concat(chrAry);
console.log(`newAry => ${newAry.join(",")}`); // 배열 -> 문자열.

// 추가, 삭제.
numAry.push(40); // 맨뒤에 추가.
numAry.unshift(50); // 맨앞에 추가.
numAry.pop(); // 맨뒤에 삭제.
numAry.shift(); // 맨앞에 삭제.
// [10, 20, 30]
numAry.splice(0, 2, 1, 2, 3, 4, 5); // 첫번째: 위치, 수정할대상의 크기, 대체할값.
console.log(`numAry => ${numAry}`, numAry);
// [1, 2, 3, 4, 5, 30]
console.log(numAry.slice(1));
// str.push("world");
// [1, 2, 3, 4, 5, 30]
numAry.forEach((elem, idx, ary) => {
  console.log(
    `첫번째 요소 : ${elem}, 두번째 인덱스 : ${idx}, 세번째 배열: ${ary}`
  );
});
// [1, 2, 3, 4, 5, 30]
// 각 요소들 값중에서 짝수만 콘솔에 출력.
numAry.forEach((elem, idx) => (idx < 3 ? console.log(elem) : ""));
