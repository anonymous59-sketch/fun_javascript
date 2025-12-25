// Date 객체.
////////////////////////////////////////////

let today = new Date("2025-02-04T10:00:00");
console.log(today.getMonth()); // 0(1월) ~ 11(12월)
console.log(today.getDay()); // 일(0) ~ 토(6)

today = new Date("2025-02-22");
today.setFullYear(2023);
today.setMonth(0);

today.setFullYear(1970); // 1970.01.01 +9시간.
today.setMonth(0);
today.setDate(1);
today.setHours(0);
today.setMinutes(0);
today.setSeconds(0); // getTime() 기준시간 + 1000
today = new Date();
const aday = new Date("Sun Dec 21 2025 16:27:00 GMT+0900");

// 두 시간의 차이 계산(시, 분, 초 단위로)
const diff = (today.getTime() - aday.getTime()) / 1000;
// (시), 분, 초 단위환산.
const hours = Math.floor(diff / (60 * 60));
const minutes = Math.floor((diff % (60 * 60)) / 60); // 분
const seconds = Math.floor(diff % 60); // 초
console.log(`${hours}시간 ${minutes} 분 ${seconds} 초`);
console.clear();
////////////////////////////////////////////

// 년도, 월 정보를 입력해서 1일의 요일정보와 말일정보 가져오기.
let year = 2025;
let month = 3;
today = new Date();
today.setFullYear(year);
today.setMonth(month - 1);
today.setDate(1);
console.log(
  `월: ${today.getMonth() + 1}, 날짜:${today.getDate()}, 요일:${today.getDay()}`
);
today.setMonth(month);
today.setDate(0);
console.log(`말일: ${today.getDate()}`);

////////////////////////////////////////////
// button에 클릭 이벤트 등록하기.
const BEGIN_YEAR = "2025";
const BEGIN_MONTH = "12";

year = BEGIN_YEAR;
month = BEGIN_MONTH;

// 달력그리기 위한 변수를 공유.
let calendarDate = new Date();
calendarDate.setFullYear(year);
calendarDate.setMonth(month - 1);

document.querySelector("button#prev").addEventListener("click", (e) => {
  // 화면에 출력된 "년도,월" 이전 달 정보 보여주기.
  month--;
  calendarDate.setFullYear(year);
  calendarDate.setMonth(month - 1);

  year = calendarDate.getFullYear();
  month = calendarDate.getMonth() + 1;

  document.querySelector("#yyyy").value = year;
  document.querySelector("#mm").value = month;

  printCalendar(year, month);
});

document.querySelector("button#now").addEventListener("click", (e) => {
  // 오늘날짜 기준의 달력을 보여주기.
  calendarDate = new Date();
  year = calendarDate.getFullYear();
  month = calendarDate.getMonth() + 1;

  document.querySelector("#yyyy").value = year;
  document.querySelector("#mm").value = month;
  printCalendar(year, month);
});

document.querySelector("button#next").addEventListener("click", (e) => {
  // 화면에 출력된 "년도,월" 다음 달 정보 보여주기.
  month++;
  calendarDate.setFullYear(year);
  calendarDate.setMonth(month - 1);

  year = calendarDate.getFullYear();
  month = calendarDate.getMonth() + 1;

  document.querySelector("#yyyy").value = year;
  document.querySelector("#mm").value = month;

  printCalendar(year, month);
});
////////////////////////////////////////////

// 계산.
// 달력()
function printCalendar(yyyy, mm) {
  // 1일이 화요일.
  let today = new Date(); // Date객체 선언. 2025년 5월달.
  today.setFullYear(yyyy); // 2025.
  today.setMonth(mm - 1); // 2025. 5.
  today.setDate(1); // 2025. 5. 1

  // 1일의 요일정보.
  const spaces = today.getDay(); // 요일정보.

  today.setMonth(mm); // 2025. 6.
  today.setDate(0); // 2025. 5. 말일.

  // 월의 마지막날.
  const lastDate = today.getDate();

  // 배열.
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let htmlStr = `<table border='2'><caption>${yyyy}년 ${mm}월 </caption><thead><tr>`;
  for (let day of days) {
    htmlStr += `<th>${day}</th>`;
  }
  htmlStr += "</tr></thead><tbody><tr>";
  // 공란.
  for (let s = 0; s < spaces; s++) {
    htmlStr += `<td> </td>`;
  }
  // 날짜.
  for (let d = 1; d <= lastDate; d++) {
    htmlStr += `<td>${d}</td>`;
    if ((d + spaces) % 7 == 0) {
      htmlStr += "</tr><tr>";
    }
  }
  htmlStr += `</tr></tbody></table>`;
  // id가 calendar인 요소의 innerHTML의 속성에 값을 넣으면...
  document.querySelector("#calendar").innerHTML = htmlStr;
}
printCalendar(year, month);

// 객체, 메소드 => 객체를 매개값으로 받아서 객체.메소드를 활용하기.
function printDay(now = new Date()) {
  // 콘솔에 요일정보를 출력하는 함수.
  switch (now.getDay()) {
    case 0:
      console.log("일요일");
      break;
    case 1:
      console.log("월요일");
      break;
    case 2:
      console.log("화요일");
      break;
    case 3:
      console.log("수요일");
      break;
    case 4:
      console.log("목요일");
      break;
    case 5:
      console.log("금요일");
      break;
    case 6:
      console.log("토요일");
  }
}

// printDay(today); // 매개값.
////////////////////////////////////////////
