// event.js
// 이벤트 - 이벤트 핸들러.
// 버튼(클릭) - 이벤트핸들러 등록.

// document.querySelector('선택자') => 화면요소를 찾아서 반환.

console.dir(document.querySelector("button"));
document
  .querySelector("button") //
  .addEventListener("click", function () {
    console.log(`클릭됨`); // 1)이벤트유형, 2)이벤트핸들러(함수)
    // 이벤트핸들러 (this는 이벤트를 받는 대상)
    this.style.backgroundColor = "red";
    this.style.color = "yellow";
    this.innerHTML = "Event";
  });

document
  .querySelector("button") //
  .addEventListener("mouseover", (e) => {
    // 이벤트핸들러(this: Window객체)
    console.log(e.target);
    e.target.style.color = "blue";
  });

// li에 각 요소에 이벤트.
let allList = document.querySelectorAll("#second>li");
console.log(allList); // allList 확인.

for (let i = 0; i < allList.length; i++) {
  allList[i].addEventListener("click", liClickFnc);
  allList[i].addEventListener("mouseover", mouseOverFnc);
  allList[i].addEventListener("mouseout", mouseOutFnc);
}

// 함수들.
function liClickFnc(e) {
  console.log(e.target.innerHTML); // e.target 이벤트 대상.
}
function mouseOverFnc(e) {
  e.target.style.backgroundColor = "yellow";
}
function mouseOutFnc(e) {
  e.target.style.backgroundColor = "";
}
