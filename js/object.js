//object.js

// 객체 타입 = {속성 : 값, 속성 : 값}
// 객체는 속성과 값, 함수만 존재할 수 있다.
// 객체 : 1) 속성 : 값, 2) 속성 : 메소드(함수)
const obj = {
  name: `홍길동`,
  stuNo: `25-001`,
  phone: `010-1111-2222`,
  bloodType: `AB`,
  showInfo: function () {
    console.log(`학번은 ${obj.stuNo}이고, 이름은 ${obj.name}입니다.`)
  }, // 객체 안에서는 쉼표로 계속 구분해주는거 주의하기
  friends: [`김길동`, `박길동`, `최길동`], // 배열이니까 순서는 0부터 시작하는거 주의
};

console.log(obj.name);
obj.name = `박길동`; // 속성 값을 변경하고 싶으면 변수명.속성에 대입을 하면 됨 또는 변수명[`속성`] = `값`, 변수명[``] 할 때 대괄호 안에는 속성을 찾는 것이기 때문에 무조건 `` 같은 표시를 해줘야함. 
console.log(obj.name);

console.log(obj.phone);
obj[`phone`] = `010-3838-3838`;
console.log(obj.phone);

obj.showInfo();

console.log(`첫 번째 친구 이름 ${obj.friends[2]}`);

//배열
const numAry = [20, 17, 30, 25, 22, 'hello', true, 5]; // 자바스크립트는 자료형을 느슨하게 판정하기 때문에 같은 배열에 여러 지료형이 있어도 되지만 가능하면 자료형을 통일하자.
numAry[2] = 40; // 배열 안의 값을 변경하는 것 - heap 저장소에서 교체하는 것이라 상수 선언에도 변경 가능함
// numAry = [11, 22, 33, 44, 55]; // 이건 주저장소에서 교체를 하는 것이라 상수라서 변경이 불가능 함
// console.log(numAry[0]); // 배열의 index는 0부터 시작하는 것 주의
// console.log(numAry[2]);
// 배열 & 반복문 복합적으로 자주 사용된다.

// for (i = 0; i <= 4; i++) {
//   console.log(numAry[i]);
// }

//배열의크기
console.log(numAry.length);

// 위의 for 구문을 배열의 크기에 맞게 자동 설정해서 반복 할 수 있다.
for (i = 0; i < numAry.length; i++) {
  console.log(numAry[i]);
}

// 홍길동, 박길동, 최길동 => nameAry ;; 배열이름
const nameAry = [`홍길동`, `박길동`, `최길동`];
nameAry[3] = `류길동`;
// 배열을 쉽게 하는 반복문 for...of... 반복문.
for (let name /* 반복변수 */ of nameAry) { // 반복변수에 배열의 크기만큼 '대입하는 것을 반복하겠다'라는 의미가 들어있는 반복문
  console.log(name);
}

// for ... in ... 반복문 => 객체일 때 사용하면 좋은 반복문
obj.hobby = [`게임`, `독서`, `캠핑`, `스포츠`] // 객체에 속성 추가하기 //obj[`hobby`] 방식도 있는데 동적인 방식을 사용하려면 대괄호 방식으로만 사용가능하다.
delete obj.bloodType; // 객체의 속성을 삭제하기

for (let prop in obj) { // obj라는 객체가 가지고 있는 속성의 수 만큼 반복하는 원리
  console.log(`속성 => ${prop}, 값 => ${obj[prop]}`); // 속성의 이름만 가져온다. 전부 문자열로 가져온다, 객체명[prop]울 하면 값을 가져온다.
}