// spread.js 
const friends = ['Park', 'Choi', 'Kim'];
console.log(...friends);

const newAry = [friends];
console.log(newAry, ...newAry);
const newAry1 = [...friends];
console.log(newAry1, ...newAry1);

const clone = friends;
console.log(clone);
friends.push('Lee');
console.log(clone, friends);
// 배열도 객체라서 참조변수를 사용
console.clear();
const clone2 = [...friends];
console.log(clone2);
clone2.push('Lee');
console.log(clone2, friends);
const clone3 = [];
clone3.push(...friends);
console.log(clone3);
clone3.push('Kang');
console.log(clone3, friends);