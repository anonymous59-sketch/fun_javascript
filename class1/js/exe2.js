// exe2.js
// 가위바위보 게임.
// 1(가위), 2(바위), 3(보)
// 시스템: 1~3, 사용자 : 1~3 값 비교 prompt
// 비긴거 이긴거 진거 만들기
// Math.random 0 <= x < 1 ; Math.random * 3 0 <= x < 3
let a = Number(prompt(`1, 2, 3번 중에 하나를 입력하시오\n1은 가위, 2는 바위, 3은 보입니다.`));
let b = Math.ceil(Math.random() * 3);
// 사용자 기준 You Win!, You Lost! You Same 구문 출력
switch (a) {
  case 0:
    alert(`숫자를 입력해주세요`);
  case 1:
    console.log(`당신은 가위를 냈습니다\n`);
    if (b == 1) {
      console.log(`컴퓨터는 가위를 냈습니다\nYou Same!`);
    } else if (b == 2) {
      console.log(`컴퓨터는 바위을 냈습니다\nYou Lost!`);
    } else {
      console.log(`컴퓨터는 보를 냈습니다.\nYou Win!`);
    }
    break;
  case 2:
    console.log(`당신은 바위를 냈습니다\n`);
    if (b == 1) {
      console.log(`컴퓨터는 가위를 냈습니다\nYou Win!`);
    } else if (b == 2) {
      console.log(`컴퓨터는 바위을 냈습니다\nYou Same`);
    } else {
      console.log(`컴퓨터는 보를 냈습니다.\nYou Lost!`);
    }
    break;
  case 3:
    console.log(`당신은 보를 냈습니다.`);
    if (b == 1) {
      console.log(`컴퓨터는 가위를 냈습니다\nYou Lost!`);
    } else if (b == 2) {
      console.log(`컴퓨터는 바위을 냈습니다\nYou Win!`);
    } else {
      console.log(`컴퓨터는 보를 냈습니다.\nYou Same`);
    }
    break;
  default:
    console.log(`잘못 입력하셨습니다.`);
}