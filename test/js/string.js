// string.js
let str = `hello, world`;

//substring(); (시작인덱스, 끝인덱스) 시작 인덱스부터 끝 인덱스까지 문자를 떼어오는 메소드, javascript 특성상 범위를 정할 때 시작은 포함하고 끝부분은 포함 안함
`hellow, world`.substring(1, 3); // == str.substring(1, 3);
console.log(str.substring(7)); // 'world'

// indexOf()
console.log(str.indexOf(','));
console.log(str.substring(0, str.indexOf(',')));

// trim() ; 문자 앞 뒤의 공백을 제거하는 메소드
console.log("  Hello, World      ".trim());

// replace(a, b) ; a라는 문자를 찾아서 b로 변경하는 메소드
console.log(str.replace('world', 'WORLD')); // 'hello, WORLD'

// split() ; 구분자를 기준으로 각각의 값들을 나누고 배열에 담아준다.
let strAry = 'apple, banana, cherry'.split(',');
console.log(strAry); 

// charAt(index) ; 인덱스에 해당하는 문자열 반환해준다.
console.log('welcome home'.charAt(2));

['LG 노트북', '삼성노트북', '모니터', '마우스'].forEach(elem => {
  if (elem.indexOf('노트북') >= 0) {
    console.log(elem);
  }
})



// '980503-1236478', '030505-4567123', '1111112222222'
// 주민번호 판별 함수
function checkGender(resident = '000000-0000000') {
  // console에 출력(남자입니다 여자입니다.)
  let resi = resident.trim();
  if (resi.charAt(6) == '-') {
    if (resi.charAt(7) == 1 || resi.charAt(7) == 3) {
      console.log(`남자입니다`);
    } else if (resi.charAt(7) == 2 || resi.charAt(7) == 4) {
      console.log('여자입니다.');
    } else {
      console.log('주민번호를 다시 확인해주세요.');
    }
  } else {
    if (resi.charAt(6) == 1 || resi.charAt(6) == 3) {
      console.log(`남자입니다`);
    } else if (resi.charAt(6) == 2 || resi.charAt(6) == 4) {
      console.log('여자입니다');
    } else {
      console.log(`주민번호를 다시 확인해주세요.`);
    }
  }
} // end of checkGender

// let resiNumber = prompt(`주민번호를 입력해주세요`);
// checkGender(resiNumber);

function cherckGenderpro (resident = '1111112222222') {
  let pos = 7;
  if (resident.length == 13) { // 문자열의 크기를 파악해서 조건걸기
    pos = 6; // 포지션의 값만 변수로 지정해서 해줘도 코드가 짧아짐
  }
  switch (resident.charAt(pos)) {
    case '1' :
    case '3' :
       console.log('남자입니다.');
      break;
    case '2' :
    case '4' :
      console.log ('여자입니다');
      break;
    default: console.log('잘못된 값입니다.');
    break;
  }
}
// cherckGenderpro(resiNumber);