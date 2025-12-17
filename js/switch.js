// switch.js 파일
let msg = prompt(`A,B,C중에 값을 입력하세요 : `);
console.log(msg);

switch (msg) { // 값 매칭이 되어야 작동하기때문에 if문처럼 범위 조건은 어렵다.
  case `A`:
    console.log(`A를 입력.`);
    break;
  case `B`:
    console.log(`B를 입력.`);
    break;
  case `C`:
    console.log(`C를 입력.`);
    break;
  default:
    console.log(`A, B, C 중에 입력`);
}