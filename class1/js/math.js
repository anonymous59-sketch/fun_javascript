//math.js
const ary = new Array(); // 인스턴스마다 각기 다른 값을 갖기 위해 사용 

Math.random(); // 인스턴스를 선언해서 굳이 다른 값을 갖게 할 필요가 없고 기능만 사용하면 되기때문에 바로 사용. (정적메소드)

// 51(포함) ~ 100(포함)
let comNum = Math.ceil(Math.random() * 50) + 50;
let cnt = 0;
while (true) {
  let userNum = prompt(`숫자를 입력하여 51 ~ 100 중의 랜덤한 수를 맞춰보세요.`);
  if (51 <= userNum && userNum <= 100 && Number(userNum) % 1 == 0) {
    cnt++;
    if (comNum > userNum) {
      alert(`숫자가 더 커야합니다.`);
    } else if (comNum < userNum) {
      alert(`숫자가 더 작아야합니다.`);
    } else {
      alert(`정답입니다. 컴퓨터가 뽑은 수는 ${comNum}이었습니다. ${cnt}번만에 맞추셨습니다.`);
      break;
    }
  } else {
    alert(`값을 잘못 입력하셨습니다. 51과 100 사이의 정수 값을 입력해주세요`);
  }
}