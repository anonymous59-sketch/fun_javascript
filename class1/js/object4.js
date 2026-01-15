// object4.js

// 객체라는 건 한국어로 번역하다보니 나오게 된 단어인데 사실 object(실체), 클래스, 인스턴스 == 객체이다.

// 객체와 인스턴스
// 붕어빵틀(클래스) -> 실체 -> 붕어빵(인스턴스)
// 이전에 우리가 선언한건 인스턴스를 바로 만든것 ; const obj = {속성: 값, 속성:값, 메소드()}; 자바스크립트에서 제공해주는 편의기능이라고 생각하면 좋음

// People 사용자 정의 객체, 클래스명은 시작 단어가 대문자
class People {
  // 속성(생성자)
  constructor(name, age) {
    this.name = name; // constructor에서 받은 name을 People 객체(this)의 name(속성)의 값으로 넣겠다.
    this.age = age; // constructor에서 받는 값은 외부 또는 사용자가 지정해주는 값을 받아오기.
    // this를 쓰는 이유 ; 그냥 적으면 변수를 선언하는 것으로 표현되어 이것(this)의 속성(key)을 표현하기 위해 사용
  }
  // 기능(메소드)
  showInfo() {
    console.log();
  }
}

const person1 = new personalbar('홍길동', 22); // 인스턴스 생성 ; name = 홍길동, age = 22인 People 클래스 기반의 객체를 person1에 넣기
// new 객체(클래스)명() ; 뒤에 괄호를 붙이는 건 클래스도 값을 받아서 사용하는 함수처럼 사용되기 때문

