// dom.js
// id를 기준으로 선택.
document.querySelector("#view").addEventListener("click", (e) => {
  console.log(e.target);
  // 기능구현.
  if (e.target.innerText == "상세 설명 보기") {
    document.querySelector("#detail").style.display = "block";
    e.target.innerText = "상세 설명 닫기";
  } else if (e.target.innerText == "상세 설명 닫기") {
    document.querySelector("#detail").style.display = "none";
    e.target.innerText = "상세 설명 보기";
  }
});

// 이미지 클릭하면 큰이미지로 보여주기.
document.querySelectorAll(".small").forEach((elem) => {
  // 이벤트 등록대상 선택하고 이벤트 등록.
  elem.addEventListener("click", (e) => {
    console.log(e.target.src); // 클릭한 이미지의 src 속성(attribute).
    // 큰 이미지.
    document.querySelector("#cup").src = e.target.src;
  });
});

console.log(document.querySelectorAll("button")); // => 버튼 2개의 배열.
document.querySelectorAll("button").forEach((elem) => {
  console.log(elem); // elem 의 정체를 꼭 파악하세요!!! 꼭꼭꼭꼭....2025.12.23
  // 이거 안해보고 질문하기 없기..
  elem.addEventListener("click", (e) => {
    e.target.style.color = "red";
  });
});
// document.querySelector("button").addEventListener("click", (e) => {
//   // 구현하려는 기능.
//   e.target.style.backgroundColor = "yellow";
// });
