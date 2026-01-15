// 변수 선언.
// ES6(2015) 이전.
var name = "Hong"; // 윈도우 객체의 속성으로 취급한다
var name = "Hwang";

// ES6 이후.
//let name = "Hong";
// age = 10; // 변수 없이 선언하면 window객체의 속성과 값으로 취급한다.
// 밑에 let age를 선언하게되면 선언 전에 변수를 사용하는 것으로 인식해서 오류가 발생한다.
let age = 20; // var age, let age라는 식으로 중복 선언이 안된다.

console.log(window); // window 객체(웹브라우저가 가지고 있는 객체)

const myAge = 30;
// myAge = 31; // const라는 상수 값은 재할당이 불가능하다

// let while = 100; // 예약어는 변수로 사용할 수 없다.

// let myage = 10; // camel case를 사용하지 않은 변수 선언의 나쁜 방식

let liTag = document.createElement('li'); // 객체를 반환해서 변수 liTag에 넣어둔다. (객체 형식으로 넣어짐);
// liTag = {}; // liTag에 빈 객체를 담아두면서 변수 선언을 하는 형태

// 자료형(Data Type)
let loginID = 10; // number
loginID = 'user01'; // string
loginID = true; // boolean
loginID = null; // object
loginID = undefined; // undefined
loginID = ''; // string
// loginID = ; // 오류
let loginPw; // undefined
// loginPw = new Symbol(); 

console.log(typeof loginID);
console.log(typeof loginPw);

// 객체 선언
const myInfo = {
  name: "Hong",
  age: 20,
  phone: "010-1111-2222",
  // showInfo: e => console.log(`이름은 ${this.name}, 연락처는 ${this.phone}`) 
  // 화살표함수는 this의 binding에서 문제가 생길 수 있기 때문에 기존의 함수 선언 방식으로 메서드를 만드는 것이 좋다.
  showInfo: function () {
    console.log(`이름은 ${this.name}, 연락처는 ${this.phone}`);
  },
}; // 객체 리터럴 (변수에다가 값을 바로 담는 방식)
const myInfo1 = new Object(); // 객체 선언 방식, 가능은한데 추천은 안하는 방식

myInfo.showInfo(); // myInfo.showInfo() 메소드, 비교) document.createElement();
console.log(myInfo['phone']);

// 객체 속성 값 변경
myInfo['name'] = 'Hwang';
myInfo.phone = '010-2222-3333';

myInfo.showInfo();

////복사
// 원시유형
let hisAge = 20;
let yourAge = hisAge;
hisAge = 21;
yourAge = 21;
console.log(yourAge);

// 객체유형
let hisInfo = {
  name: 'Park',
  age: 20,
};
let yourInfo = hisInfo; // 객체의 변수는 참조 변수라고 부른다.
// hisInfo.name = 'Choi';
// hisInfo['age'] = 30;
// console.log(yourInfo);
// hisInfo = {
//   name: 'Park',
//   age: 20,
// };

console.log(yourInfo, hisInfo);
console.log(yourInfo == hisInfo, yourInfo === hisInfo); // 객체는 참조 변수를 활용하므로 주소값을 비교하게된다. 그래서 속성과 값이 동일하더라도 주소값이 다르면 다른 객체가 된다.
yourInfo.name = 'Seo';
console.log(yourInfo, hisInfo);

yourInfo = Object.assign({}, hisInfo); // 빈 객체에 hisInfo의 속성과 값을 복사해서 할당해준다.

console.log(yourInfo == hisInfo, yourInfo === hisInfo);
yourInfo.name = 'Choi';
console.log(yourInfo, hisInfo);

// 객체 반복문
for (let prop in hisInfo) {
  console.log(prop, hisInfo[prop]);
}

// 배열
const fruitBasket = ['Apple', 'Banana', 'Melon'];
let fruitBasket1 = [];
for (let i = 0; i < fruitBasket.length; i++){ fruitBasket1 += fruitBasket[i] }

fruitBasket[0] = '사과';
fruitBasket[3] = 'Cherry';

// 배열 메서드
fruitBasket.push('Grape');
fruitBasket.unshift('Corn');
fruitBasket.pop();
fruitBasket.shift();

// 배열의 반복문
for (let elem of fruitBasket) {
  console.log(elem);
}
for (let elem in fruitBasket) {
  console.log(elem, fruitBasket[elem]);
} // 배열의 속성은 index를 표현하기때문에 이런 방법으로 사용할 수 있다. 

console.log(fruitBasket, fruitBasket1);

// 사과, Banana, Grape, Melon, Cherry
fruitBasket.splice(2, 0, 'Grape');
console.log(fruitBasket);

// 사과, banana, Grape, Cherry
fruitBasket.splice(3, 1);
console.log(fruitBasket);

// Banana, 사과, Grape, Cherry
fruitBasket.splice(0, 2, 'Banana', '사과');
console.log(fruitBasket);