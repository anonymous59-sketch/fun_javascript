// math.js
const ary = new Array(); // 인스턴스마다 각기 다른 값.
const today = new Date(); // 동일.

// console.log(Math.round(3.523));

function numberGame() {
  // 51(포함) ~ 100(포함) => 67 생성.
  // 숫자맞추기 함수.
  // 70입력 크다/작다 60입력 크다/작다 .... 여러번 시도 67입력 "정답입니다"
  // 임의의 값 변수, 사용자 입력값 변수, while , break,
  let randomNo = Math.ceil(Math.random() * 50) + 50;
  let userNo = 0;
  let cnt = 0;
  while (true) {
    userNo = prompt("51 ~ 100 사이의 임의의 값 입력!");

    cnt++;
    if (randomNo == userNo || !userNo) {
      alert("정답입니다. (" + cnt + ")횟수");
      break;
    }
    // 비교.
    if (randomNo < userNo) {
      alert("입력값보다 작습니다.");
    } else {
      alert("입력값보다 큽니다.");
    }
  } // end of while.

  console.log("end of game.");
}
numberGame();
