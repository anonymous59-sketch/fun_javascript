// todo_1219.js
// 화살표함수(ES6),

// 데이터유형(객체, 배열)

// 이벤트, 
// 화면 영역에서 키보드 마우스 => 동작 - 이벤트 - 이벤트핸들러(함수)
// 

// 객체,

// 친구(이름, 연락처, 생일: `08-20-12`, 키: 163.5) 이런 느낌으로 4명정도
// friends 배열에 친구 객체 저장
// 친구 평균 키를 구하기, 제일 큰 키 찾기, 제일 큰 키는 151(이름) 이런 식으로 나오게 하기
// 테이블태그를 활용해서 document.write(); 그리기

// mdn 사이트 - 메소드 확인하기

let friends = [
	{name: `홍길동`, tel: `010-1111-2222`, birth: `08-20-12`, tall: 163.5},
	{name: `김길동`, tel: `010-2222-3333`, birth: `03-30-02`, tall: 181.1},
	{name: `이길동`, tel: `010-3333-4444`, birth: `05-14-08`, tall: 175.4},
	{name: `박길동`, tel: `010-4444-5555`, birth: `05-17-04`, tall: 154.7}
];

let sum = 0; // 코드 리뷰를 해보니 변수 선언을 해야 됨
let max = 0;
let max_name = ""; // 변수를 하나씩 선언하는게 가독성도 좋고 git으로 확인 했을 때 어느 변수가 수정되었는지 확인하기가 편리함
for (let prop of friends) {
	sum += prop.tall;
	if (max < prop.tall) {
		max = prop.tall;
		max_name = `${prop.name}`;
	}
}
let avg = sum / friends.length; // 요즘 추세는 변수를 상단에 다 선언하는 것이 아니라 필요한 경우나 사용하는 곳 근처에서 선언을 하는 것이다.

// max += max_name // 이건 자료형이 다른 두 변수를 합치는 것이라 권장되지 않음

console.log(`키의 평균은 ${avg}cm이고 제일 큰 키는 ${max}cm(${max_name})이다.`);

let table = `<table border="2px"><thead><tr><th>이름</th><th>전화번호</th>
<th>생일</th><th>키</th></tr></thead><tbody>`;

for (let prop of friends) {
	table += `<tr><td>${prop.name}</td><td>${prop.tel}</td><td>${prop.birth}</td><td>${prop.tall}cm</td></tr>`;
}

table += `</tbody><tfoot><tr><td colspan="2">키 평균 / 제일 큰 사람</td><td colspan="2">${avg}cm / ${max}(${max_name})</td></tr></tfoot></table>`;

document.writeln(table);