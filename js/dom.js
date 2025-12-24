//dom.js
console.log(document.querySelectorAll(`button`)); // 선택자로 원하는 요소를 잘 선택했는지 콘솔 찍어보기
document.querySelectorAll(`button`).forEach((elem, idx, ary) => {
  console.log(elem); // 가지고 오는 요소가 뭔지 확인을 위해 콘솔 찍어보기; 중요.
  elem.addEventListener(`click`, e => {
    e.target.style.color = `red`;
  });
})
// 이미지 클릭하면 큰이미지로 보여주기

document.querySelectorAll(`.small`).forEach(elem => {
  console.log(elem);
  elem.addEventListener(`click`, e => {
    // console.log(e.target.src); // 클릭 이미지의 속성(attrbute)을 보기 위함.
    // 큰이미지 src를 찾아와서 방금 타겟을 해둔 src로 교체하는 식.
    document.querySelector(`#cup`).src = e.target.src;
  })
})

console.log(document.querySelector(`#view`));
document.querySelector(`#view`).addEventListener(`click`, e => {
  // 기능구현
  // console.log(e.target); // 화살표 함수라서 매개변수를 받아야해서 e.target으로 했고 그냥 함수로 선언하면 매개변수가 필요없어지니 this를 사용해도 된다.
  if (e.target.innerHTML == `상세 설명 보기`) {
    e.target.style.color = `red`;
    document.querySelector(`#detail`).style.display = `block`;
    e.target.innerHTML = `상세 설명 닫기`;
  } else if (e.target.innerHTML == `상세 설명 닫기`) {
    e.target.style.color = `blue`;
    document.querySelector(`#detail`).style.display = `none`;
    e.target.innerHTML = `상세 설명 보기`;
  }
})

// document.querySelector(`#view`).addEventListener(`dblclick`, e => {
// 	e.target.style.color = `blue`;
// 	document.querySelector(`#detail`).style.display = `none`;
// })

// document.querySelectorAll(`button`).addEventListener(`click`, e => {
// 	// 구현하려는 기능이 들어가면 된다. 매개변수 얻어오는 것 주의
// 	// 보통 제일 첫 번째 하나만 가지고 오니까 선택자 중복 안되게
// 	e.target.style.backgroundColor = `yellow`;
// });