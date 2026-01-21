// obj.js
class Student { /* 객체를 정의 */
  constructor(studNo, studName, studBirth /* 객체의 속성 정의 */){
    this.sno = studNo;
    this.sname = studName;
    this.birth = studBirth;
  } // 생성자 함수 (속성 정의)
  showInfo() {
    console.log(`학번 ${this.sno}`);
  } // 매서드 정의
  showBirth() {
    console.log(`${this.sname}의 생일은 ${this.birth}`);
  }
}

const hong = new Student('11-1', '홍길동', '2005-03-04'); // 인스턴스 생성
console.log(hong);
const hong2 = new Student('11-2', '홍길동2', '2003-03-01');
console.log(hong);

const park = {
  sno: "11-2",
  sname: "박호억",
  birth: "2006-07-09",
  showInfo: function () {
    console.log(`학번은 ${this.sno}, 이름은 ${this.sname}`);
  },
};
console.log(hong, hong2, park);

hong.fullInfo = function() {
  console.log(`학번은 ${this.sno}, 이름은 ${this.sname}, 생일은 ${this.birth}`);
}
hong.fullInfo();
console.log(hong, hong2, park);
// 클래스에 추가 기능
Student.prototype.allInfo = function() {
  console.log(`allInfo 기능 ${this.sname}`);
}
console.log(hong, hong2); // 클래스에 직접 추가했기때문에 기능이 포함된다.

// prototype 활용
const now = new Date();
console.log(now.toTimeString()); // 2026-05-02 13:22:34 포맷으로 출력하려면 따로 정의해서 사용해야됨
console.clear();
Date.prototype.toLocalFormat = function() {
  // console.log(this);
  const year = this.getFullYear();
  const month = this.getMonth() + 1;
  const day = this.getDate();
  const hour = this.getHours();
  const min = this.getMinutes();
  const sec = this.getSeconds();
  return `${('0000' + year).slice(-4)}-${('0' + month).slice(-2)}-${day} ${hour}:${('0' +min).slice(-2)}:${('0' + sec).slice(-2)}`;
}
console.log(now.toLocalFormat());