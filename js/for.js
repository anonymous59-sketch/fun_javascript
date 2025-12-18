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

// 1부터 100까지 정수의 홀수의 합을 sum 변수에 누적 누적.
sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    sum += i;
    // console.log(`i의 값은 ${i}이고 sum의 값은 ${sum}이다.`);
  }
}
console.log(`최종홀수합계 : ${sum}`);

//1 ~ 100까지 정수 중에 홀수의 합을 oddSum, 짝수의 합 : evenSum에 누적.
sum = 0;
let oddSum = 0;
let evenSum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 1) {
    oddSum += i;
    // console.log(`홀수\ni의 값은 ${i} 합계는 ${oddSum}`)
  } else {
    evenSum += i;
    // console.log(`짝수\ni의 값은 ${i} 합계는 ${evenSum}`)
  }
}
// 작동 원리
/* 1. oddSum = 0 으로 대입
   2. evenSum = 0 으로 대입
   3. i = 1 부터 100까지 1씩 올라가는 카운트 반복문 설정
   4. i가 1부터 100까지 나올 텐데 그 중 홀수와 짝수를 구별하는 if문 설정
   5. oddSum에 1번쩨 i와 원래 초기값 oddSum을 더함
   6. if 실행문이 끝났으니 다시 for 반복문으로 올라감
   7. for 반복문에서 다음 i를 불러와서 if문에 보냄
   8. if 문에서 새로 받은 i를 5번에서 계산한 oddSum에 추가로 더함*/

console.log(`최종홀수합계 : ${oddSum}\n최종짝수합계 : ${evenSum}`);