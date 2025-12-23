// date.js

let today = new Date(`2025-12-03T10:00:00`);
console.log(today); // .getMonth(); 0(01월) ~ 11(12월)
console.log(today.getDate()); // 일 정보
console.log(today.getDay()); // 0(일요일) ~ 6(토요일)

// switch(today.getDay()) {
//   case 0: console.log(`일요일`);
//   break;
//   case 1: console.log(`월요일`);
//   break;
//   case 2: console.log(`화요일`);
//   break;
//   case 3: console.log(`수요일`);
//   break;
//   case 4: console.log(`목요일`);
//   break;
//   case 5: console.log(`금요일`);
//   break;
//   default: console.log(`토요일`);
// }

today = new Date(`2024-02-22`);
today.setFullYear(2023);
today.setMonth(0);

today.setFullYear(1970); //1970.01.01 00:00:00 을 기준
today.setMonth(0);
today.setDate(1);
today.setUTCHours(0);
today.setUTCMinutes(0);
today.setUTCSeconds(0); // UTC 시간 기준이라서 한국 시간이면 9시간 차이가 난다.
console.log(today.getTime()); // 1970.01.01 00:00:00 기준 miliseconds 단위로 시간을 세고 있다.

today = new Date();

const aday = new Date(`Sun Dec 21 2025 16:25:30 GMT+0900`);
console.log(aday);

console.log(today.getTime());

let a = today.getTime();
let b = aday.getTime();
let sec = (a - b) / 1000;   // 예상 결과값 XXXXXXXXXX.XXXX초 
let min = (a - b) / 1000 / 60;  // XXXXXX.XXXX분
let hour = (a - b) / 1000 / 60 / 60;  // XXX.XXXX시간
console.log(`두 날의 시간 차이는 시간으로 ${hour}시간, 분으로 ${min}분, 초는 ${sec}초 차이가 난다.`)
console.log(`두 날의 시간 차이는 ${parseInt(hour)}시간 ${parseInt(min) - parseInt(hour) * 60}분 ${parseInt(sec) - parseInt(min) * 60}초이다`)
console.log(`두 날의 시간 차이는 ${parseInt(hour)}시간 ${parseInt(min) % 60}분 ${parseInt(sec % 60)}초 (다른 계산식) `)

// 달력() 시작일이 무슨 요일인지, 총 일수가 며칠인지 알면 달력을 그릴 수 있다.
function printCalendar(a, b) {
  // 1일이 화요일, 31일이 마지막 날.
  const spaces = 2; // 달력 앞의 날짜가 없는 공란
  const lastDate = 31; // 달력의 마지막날은 31일
  // 배열을 이용해보기
  const days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

  let htmlStr = `<table border = '2'><thead><tr>`;
  
  for (let day of days) {
    htmlStr += `<th>${day}</th>`;
  }

  htmlStr += `</tr></thead><tbody><tr>`;
  // 공란 그리기
  for(let s = 1; s <= spaces; s++) {
    htmlStr += `<td></td>`;
  }

  for (let d = 1; d <= lastDate; d++) {
    htmlStr += `<td>${d}</td>`;
    if((d + spaces) % 7 == 0) {
      htmlStr += '</dr><tr>';
    }
  }

  htmlStr += `</tr></tbody></table>`;

  document.writeln(htmlStr);
}
printCalendar();

function printCalendar1(yyyy, mm) {
  // 1일이 화요일, 31일이 마지막 날.
  if (mm > 12) {
    alert(`월은 12월까지 입력해 주세요`)
  } else {
    const today = new Date();
    today.setFullYear(yyyy);
    today.setMonth(mm - 1);
    today.setDate(1); 
    const spaces = today.getDay(); // 달력 앞의 날짜가 없는 공란
    today.setMonth(mm);
    today.setDate(0);
    const lastDate = today.getDate(); // 달력의 마지막날 세팅을 위해 다음달의 setDate를 0으로 설정
    // 배열을 이용해보기
    const days = [`Sun`, `Mon`, `Tue`, `Wed`, `Thu`, `Fri`, `Sat`];

    let htmlStr = `<table border = '2'><h2>${yyyy}년</h2><thead><caption>${mm}월</caption><tr>`;
    
    for (let day of days) {
      htmlStr += `<th>${day}</th>`;
    }

    htmlStr += `</tr></thead><tbody><tr>`;
    // 공란 그리기
    for(let s = 1; s <= spaces; s++) {
      htmlStr += `<td></td>`;
    }

    for (let d = 1; d <= lastDate; d++) {
      htmlStr += `<td>${d}</td>`;
      if((d + spaces) % 7 == 0) {
        htmlStr += '</dr><tr>';
      }
    }

    htmlStr += `</tr></tbody></table>`;

    document.writeln(htmlStr);
}
}
let yyyy = Number(prompt(`확인하고 싶은 달력의 년도를 입력해주세요(yyyy형식)`));
let mm = Number(prompt(`확인하고 싶은 달력의 월을 입력해주세요 (mm형식)`));

printCalendar1(yyyy, mm);

let year = 2025; // 입력받는 값
let month = 2; // 입력받는 값

today = new Date();
today.setFullYear(year);
today.setMonth(month);
today.setDate(1); // setDate 값이 0이면 전 달 마지막날
today.getDay(); // 1일의 요일정보 알 수 있다(공백의 값을 얻을 수 있다.),

// 객체, 메소드 => 
  function printDay(now = new Date()) {    // 매개값이 없을 때를 대비해서 초기값을 설정하는 것
    // 콘솔에 요일정보를 출력하는 함수를 완성, return 안해도 됨
    switch(now.getDay()) {
      case 0: console.log(`일요일`);
      break;
      case 1: console.log(`월요일`);
      break;
      case 3: console.log(`수요일`);
      break;
      default: console.log(`다른요일`);
      break;
    }
  }

printDay(today);