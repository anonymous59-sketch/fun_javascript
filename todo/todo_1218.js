// todo_1218.js

// Math.random() 활용. 31 ~ 100 생성.
// 5번 실행.
// 합계, 평균, 최대값 => "합계는 480, 평균 96, 최대 99"
// 함수 : scoreInfo.  => scoreInfo()

// & 몇번 실행 (10 매개값으로 받아서 10번 실행)
// scoreInfo(10)

// git add .
// git commit -m "18일 숙제완료"
// git push origin main

// 1 ~ 10 까지 숫자를 합하는 반복,
let sum = 0;
for (i = 1; i <= 10; i++) {
	sum += i;
	// console.log(`//디버깅용// i의 값은 ${i}이고 합은 ${sum}이다`);
}
console.log(`합계는 ${sum}이다.`);

// 1 ~ 10 까지 숫자 중에 홀수 값만 누적
sum = 0;
for (i = 1; i <= 10; i++) {
	if (i % 2 == 1) {
		sum += i;
		// console.log(`//디버깅용// i의 값은 ${i}이고, 합은 ${sum}이다.`);
	}
}
console.log(`홀수의 합계는 ${sum}이다.`);

// 함수: oddSum()으로 만들어보기
function oddSum() {
	sum = 0; // 혹시 모르니까 초기화 해주기
	for (i = 1; i <= 10; i++) {
		if (i % 2 == 1) {
			sum += i;
			// console.log(`//디버깅용// i의 값은 ${i}이고, 합은 ${sum}이다.`);
		}
	}
	console.log(`홀수의 합계는 ${sum}이다.`);
}
oddSum();

// 함수 : sumUp() // 1~5까지 합을 구하는 기능, 합을 반환하기
// 결과값을 result 변수에 저장

function sumUp(j) {
	sum1 = 0;
	for (i = 1; i <= j; i++) {
		sum1 += i;
		console.log(`//디버깅용// i의 값은 ${i}, 합은 ${sum1}`);
	}
	console.log(`//디버깅용// 최종 sum1의 값${sum1}`);
	return sum1;
}

let result = sumUp(5);
console.log(result);


function scoreInfo() {
	let sum = 0, avg = 0, maxScore = 0;
	for (i = 1; i <= 5; i++) {
		let a = Math.ceil((Math.random() * 70) + 30);
		sum += a;
		if (maxScore < a) {
			maxScore = a;
		}
		// console.log(`//디버깅용// 횟수 ${i}, 점수 도출 값 ${a}`);
	}
	avg = sum / 5;
	console.log(`합계는 ${sum}, 평균 ${avg}, 최대 ${maxScore}`);
}
scoreInfo();

function scoreInfo2(i) {
	let sum = 0, avg = 0, maxScore = 0;
	for (j = 1; j <= i; j++) {
		let a = Math.ceil((Math.random() * 70) + 30);
		sum += a;
		if (maxScore < a) {
			maxScore = a;
		}
		// console.log(`//디버깅용// 횟수 ${j}, 점수 도출 값 ${a}`);
	}
	avg = sum / i;
	console.log(`합계는 ${sum}, 평균은 ${avg}, 최대 ${maxScore}`);
}
scoreInfo2(10);
