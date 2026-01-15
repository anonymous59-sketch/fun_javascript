// switch.js
let msg = prompt('A,B,C중에 값을 입력하세요:');
console.log(msg);

switch (msg) {
  case 'A':
    console.log('A를 입력.');
    break;
  case 'B':
    console.log('B를 입력.');
    break;
  case 'C':
    console.log('C를 입력.');
    break;
  default:
    console.log('A,B,C중에 입력.')
}