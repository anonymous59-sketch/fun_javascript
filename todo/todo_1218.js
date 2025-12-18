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

function scoreInfo() {
	let sum = 0, avg = 0, maxScore = 0;
	for (i = 1; i <= 5; i++) {
		let a = Math.ceil((Math.random() * 70) + 30);
		sum += a;
		if (maxScore < a) {
			maxScore = a;
		}
		console.log(`\/\/디버깅용\/\/ 횟수 ${i}, 점수 도출 값 ${a}`);
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
		console.log(`\/\/디버깅용\/\/ 횟수 ${j}, 점수 도출 값 ${a}`);
	}
	avg = sum / i;
	console.log(`합계는 ${sum}, 평균은 ${avg}, 최대 ${maxScore}`);
}
scoreInfo2(5);
