// array.js
const numAry = [];
for(let i = 1; i <= 6; i++) {
  numAry.push(Math.ceil(Math.random() * 100));
}
// 반복문
numAry.forEach(element => console.log(element));
// map()
// {score : 80}처럼 만들어보기
const mapResult = numAry.map(elem => ({score : elem})); 
console.log(mapResult);
// filter()
const filterResult = numAry.filter(elem => elem > 90);
console.log(filterResult);
console.clear(); // 콘솔 클리어
// reduce() - 정의할 수 있는 종류가 다양하다.
let result = numAry.reduce((acc, elem, idx, ary) => {
  console.log(acc, elem, ary);
  // return acc + elem;
  // return acc > elem ? acc : elem;
  // acc.push(elem);
  // return acc;
  if(elem > 50) {
    acc.push(elem);
  }
  return acc;
}, []); // reduce((매개값) => {}, 초기값)
// return 값이 acc에 들어가서 사용된다. acc = Accumulator (누산기) ; 계속 더해가는 계산기
// 배열의 총 합을 구하는데 활용
// 3항 연산자를 통해 배열의 최대값 또는 최소값을 구할 수 있다.
// 초기값을 []로 두고 acc.push(elem)을 통해 배열을 새로 만들 수 있다.
console.log(result);
console.clear();
// reduce() DOM에도 활용 할 수 있다.
result = numAry.reduce((acc, elem , idx, ary) => {
  // let li = document.createElement('li');
  // li.textContent = elem;
  // acc.appendChild(li);
  // return acc;
  let li = `<li>${elem}</li>`;
  acc.insertAdjacentHTML('beforeend', li);
  return acc;
}, document.querySelector('ul#list'));

result = document.querySelectorAll('#list li');
console.log(result); // nodeList는 forEach()는 사용할 수 있는데 다른 배열 매서드를 사용하지 못한다
result.forEach(elem => console.log(elem.innerText))

result = Array.from(result); // nodeList => array
console.log(result);
result = result.filter(elem => elem.innerText < 50).map(elem => elem.innerText);
console.log(result);
console.clear();

const digits = Array.of(1, 7, 2, 3, 4, 5);
console.log(digits);
console.log(digits.find(elem => elem > 3));
console.log(digits.findIndex(elem => elem > 4));
const digits2 = Array.of(49,50,30,50);
console.log(digits2);
console.log(digits2.some(elem => elem > 4));
console.clear();

digits2.some(elem => console.log(elem));

const apple = 'Apple';
const myArr = Array.from(apple);
console.log(myArr);

console.log(Array.from([1, 2, 3], elem => elem * elem));
// Array.from(a, (e) => {}), 첫번째 매개값은 함수로 변환하는 기능, 두번째 매개값은 map()처럼 사용할 수 있다.
