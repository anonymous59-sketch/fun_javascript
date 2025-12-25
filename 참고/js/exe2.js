// exe2.js
// 가위바위보 게임.
// 1(가위),2(바위),3(보)
// 시스템: 1~3, 사용자:1~3
// You Win!/ You Lost!/ You Same! 구문을 출력.
// 이기는 경우.
// 1 - 2 : -1
// 2 - 3 : -1
// 3 - 1 : 2
// 지는 경우.
// 1 - 3 : -2
// 2 - 1 : 1
// 3 - 2 : 1
let computer = Math.ceil(Math.random() * 3);
let myChoice = prompt('가위(1), 바위(2), 보(3)를 선택하세요:');

// 사용자가 값을 입력하지 않으면.
if (myChoice == null || myChoice == '') {
  alert('값을 입력해주세요.');

} else {

  let diff = computer - myChoice;
  // 내가 이기는 경우.
  console.log('computer: ' + computer + ', myChoice: ' + myChoice);
  if (diff == -1 || diff == 2) {
    console.log('You Win!');
  } else if (diff == -2 || diff == 1) {
    console.log('You Lost!');
  } else {
    console.log('You Same!');
  }
}

if (computer == 5) {
  console.log('-------------------------');
  switch (diff) {
    case -1:
    case 2:
      console.log('You Win!');
      break;
    case 1:
    case -2:
      console.log('You Lost!');
      break;
    default:
      console.log('You Same!');
  }
}