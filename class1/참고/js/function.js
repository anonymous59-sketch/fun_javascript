// function.js

// 두 수를 비교해서 큰수 를 출력기능.
// 함수선언.
function showMax(a, b) {
  // parameter(매개변수)
  if (a > b) {
    console.log(`큰값은 ${a}`);
  } else {
    console.log(`큰값은 ${b}`);
  }
} // end of showMax(a, b)

let n1 = 10,
  n2 = 20;
// 함수호출.
showMax(n1, n2); // arguement(매개값)

let m1 = 30,
  m2 = 40;
showMax(m1, m2);

// 매개변수 2개, 2개의 곱을 콘솔에 출력하는 함수. getMulti 함수.
function getMulti(x, y) {
  let result = x * y;
  console.log(`두수의 곱은 ${result}`);
  return result; // 반환.
}

let result = getMulti(m1, 50);
result = getMulti(getMulti(2, 3), 7);
console.log(result);
