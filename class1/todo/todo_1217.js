// 15-2 ,15-3 창을 정독
// git 설치
// Dev/fun_javascript ; Dev 파일 만들어서 거기로 경로 이동 후 git clone "origin 주소"
// 3번 prompt, 이름, 연락처, 주소 정보를 입력하면
// 콘솔에 "이름은 홍길동, 전화번호는 000-0000-0000, 주소는 대구 중구 100번지"
// todo에 만든다
// git add .
// git commit -m "1217 숙제완료"
// git push -u origin main
let name = prompt(`이름을 입력하시오`);
let phone = prompt(`연락처를 입력하시오`);
let address = prompt(`주소 정보를 입력하시오`);

console.log(`\"이름은 ${name}, 전화번호는 ${phone}, 주소는 ${address}\"`);
