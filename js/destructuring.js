// destructuring 구조분해(객체, 배열)
const obj = {
  name: 'Hong',
  age: 20,
};
// 기존 방식
// let name = obj.name;
// let age = obj.age;
// console.log(name, age); // 변수로 name을 사용하는것은 추천하지 않는다는 의미로 취소선이 생김

// destructuring으로 선언
let { name, age } = obj;
// console.log(name, age);

// fetch 함수 = 비동기 함수
// AJAX 함수(Asynchronous Javascript And Xml)
// setTimeout(() => {}, 시간(ms)); 비동기함수가 queue에 들어가는 순서는 어떻게 되는지 확인해보기
fetch('js/data.json')
  .then(resp => resp.json())
  .then(({name, age}) => {
    // const res = JSON.parse(result);
    // console.log(result);
    // console.log(`${name}, ${age}`, name, age);
  })
  .catch(err => {
    console.log(err);
  });

// 배열의 구조분해
const names = ['Hong', 'Hwang', 'Choi'];
// const Name1 = names[0];
const [name1, name2, name3, name4] = names;
// console.log(name1, name2, name3, name4);

