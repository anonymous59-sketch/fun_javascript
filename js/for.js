//for.js
let sum = 0; // 값을 누적

// 1 ~ 5까지 숫자를 sum에다가 누적해보기

/* sum += 1;
sum += 2;
sum += 3;
sum += 4;
sum += 5; */ // 이런식을 간단하게 하는 방법 찾기.

sum = 15;
console.log(`sum의 초기값은 ${sum}`); 
for (let i = 1; i <= 5; i++) {
  sum += i;
  // console.log(`i => ${i}, sum => ${sum}`);
}

console.log(`최종합계 : ${sum}`);