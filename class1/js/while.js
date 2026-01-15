// while.js
for (let i = 1; i <= 5; i++) {
  //
  console.log(`i의 값은 ${i}`);
}

// while(조건) { 실행블럭 }
console.log(`\nwhile조건문`);
let i = 1;
while (i <= 5) {
  console.log(`i의 값은 ${i}`);
  i++;
}

// 조건을 만족할 동안에만 실행.
/* while (true) {
  let num = Math.ceil(Math.random() * 10 );
  console.log(`num => ${num}`);
  if (num == 9) {
    break; // break 명령어가 있으면 while 구문이 끝이 남
  }
}
 */
// 수를 입력받아서 합을 구하고 quit를 입력하면 반복을 종료한다.
// let sum = 0;
// while (true) {
//   let yourValue = prompt(`숫자를 입력하세요. 종료하려면 quit 또는 \/q 입력.`);
//   console.log(yourValue);
//   // 종료 조건 => quit 입력
//   if (yourValue == 'quit' || yourValue == `\/q`) {
//     break; // 반복문 종료
//   } else if (isNaN(yourValue) == true || yourValue === null) /* isNaN 함수 : 이 값이 숫자가 아닌지 확인하는 함수; 형태 체크는 안함 */ {
//     alert(`잘못 입력하셨습니다`);
//   } else {
//     yourValue = parseInt(yourValue);
//     sum += yourValue;
//   }
// }
// console.log(`입력한 값의 합 ${sum}`);

// Math.random() => 1 ~ 10 범위의 값을 생성.
// 5가 되면 반복문을 종료
// sum 에 누적
let num1 = 0
sum = 0;
while (num1 != 5) {
  num1 = Math.ceil(Math.random() * 10);
  console.log(num1);
  sum += num1;
}
console.log(sum)

// 학생의 점수를 입력받는다. => quit 구문 입력시 종료, 
// 전체 학생의 점수 평균을 구하기 ; 합계점수 / 사람의수
// 평균은 얼마입니다. 출력하기

// let people = 0; //사람수 
// sum = 0;
// num1 = 0; //프롬프트 받기 위한 변수

// while (true) {
//   num1 = prompt(`학생의 점수를 숫자로 입력하시오. \n종료하려면 quit를 입력하시오.`);
//   if (num1 == `quit`) {
//     alert(`종료하였습니다`);
//     break;
//   } else if (Number.isNaN(parseInt(num1)) == true) {
//     alert(`잘못입력하셨습니다.`); // 숫자 이외의 것을 입력했을 때 경고창
//   } else {
//     sum += parseInt(num1);
//     people++;
//   }
// }
// ==========================================================================
// while (num1 != `quit`) {
//   num1 = prompt(`학생의 점수를 숫자로 입력하시오. \n종료하려면 quit를 입력하시오.`);
//   if (Number.isNaN(parseInt(num1)) == true) {
//     if (num1 == `quit`) {
//       alert(`종료하였습니다.`);
//       break;
//     }
//     alert(`잘못입력하셨습니다.`);
//   } else {
//     sum += parseInt(num1);
//     people++;
//   }
// }
// 코드를 줄일 수 있을 거 같았는데 좀 더 복잡해진 느낌

// let avg = (sum / people);
// console.log(`총 학생 수는 ${people}, 점수의 총 합은 ${sum}\n평균은 ${avg}입니다`);

//================================================================================
// 최고 점수는 얼마입니다 확인해보기

let people = 0; //사람수 
sum = 0;
num1 = 0; //프롬프트 받기 위한 변수
let maxScore = 0; //최대 점수 받기 위한 변수

while (true) {
  num1 = prompt(`학생의 점수를 숫자로 입력하시오. \n종료하려면 quit를 입력하시오.`);
  if (num1 == `quit`) {
    alert(`종료하였습니다`);
    break;
  } else if (Number.isNaN(parseInt(num1)) == true) {
    alert(`잘못입력하셨습니다.`); // 숫자 이외의 것을 입력했을 때 경고창
  } else {
    num1 = parseInt(num1); //parseInt 계속 하지말고 타입 변환
    if (maxScore <= num1) {
      maxScore = num1;
    } //최고점수 확인용 코드 추가
    sum += num1;
    people++;
  }
}

let avg = (sum / people);
console.log(`총 학생 수는 ${people}, 점수의 총 합은 ${sum}\n평균은 ${avg}입니다\n입력한 최고 점수는 ${maxScore}입니다.`);