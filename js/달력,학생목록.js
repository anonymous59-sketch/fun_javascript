// 달력,학생목록.js

/////////// 달력 ////////////
//// 달력 초기값 /// 
let today = new Date();
document.querySelector('#yyyy').value = today.getFullYear();
document.querySelector('#mm').value = today.getMonth() + 1;
const calTbody = document.querySelector('.calendar tbody')
const year = document.querySelector('#yyyy');
const month = document.querySelector('#mm');
calendar(today.getFullYear(), today.getMonth() + 1);
/// 달력 함수 ////
function calendar(a, b){
	// 초기에 선언해둬야할 것들
	calTbody.innerHTML = '';
	today = new Date();
	today.setFullYear(a);
	today.setMonth(b-1);
	today.setDate(1);
	const space = today.getDay();
	today.setFullYear(a);
	today.setMonth(b);
	today.setDate(0);
	const lastDate = today.getDate();
	let caption = document.querySelector('.calendar caption');
	caption.textContent = `${today.getFullYear()}년 ${today.getMonth() + 1}월 달력`;
	const days = ['일', '월', '화', '수', '목', '금', '토']
	
	// tbody에 그리기
	let tr = document.createElement('tr');
	let td = document.createElement('td');
	for (let day of days) {
		td = document.createElement('td');
		td.innerText = day;
		tr.appendChild(td);
	}
	calTbody.append(tr);
	tr = document.createElement('tr');
	for (let s = 0; s < space; s++) {
		td = document.createElement('td');
		td.innerText = 'X';
		tr.appendChild(td);
	}
	for (let d = 1; d <= lastDate; d++) {
		td = document.createElement('td');
		td.innerText = d;
		tr.appendChild(td);
		
		if ((d + space) % 7 == 0) {
			calTbody.append(tr);
			tr = document.createElement('tr');
		}
	}
	let lastSpace = 7 - ((lastDate + space) % 7)
	for (let ls = lastSpace; ls > 0; ls--) {
		td = document.createElement('td');
		td.innerText = 'X';
		tr.appendChild(td);
	}
	calTbody.append(tr);
	// input 값 동기화
	year.value = today.getFullYear();
	month.value = today.getMonth() + 1;
}

// 버튼 이벤트
// 지난달 버튼
const prvM = document.querySelector('.prvM');
prvM.addEventListener('click', () => {
	let newMonth = Number(month.value) - 1;
	let newYear = Number(year.value);
	calendar(newYear, newMonth);
})

// 달력 확인
const now = document.querySelector('.now');
now.addEventListener('click', () => {
	let newMonth = Number(month.value);
	let newYear = Number(year.value);
	calendar(newYear, newMonth);
})

// 다음달 버튼
const nextM = document.querySelector('.nextM');
nextM.addEventListener('click', () => {
	let newMonth = Number(month.value) + 1;
	let newYear = Number(year.value);
	calendar(newYear, newMonth);
})

///////////////////// 학생 리스트 ////////////////////
// 데이터 베이스 역할의 행렬
let students = [
	{stuNo: '25-001', stuName: '김길동', score:20},
	{stuNo: '25-002', stuName: '이길동', score:30},
	{stuNo: '25-003', stuName: '박길동', score:40}
]
// 초기값
const stuTbody = document.querySelector('.studentList .stl');
makeTbody();
///// 이벤트
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');

// 등록버튼 이벤트
submit.addEventListener('click', () => {
	let inputNo = document.querySelector('#stuNo').value;
	let inputName = document.querySelector('#stuName').value;
	let inputScore = document.querySelector('#score').value;
	// 경고표시
	if (!inputNo || !inputName || !inputScore) {
		alert('값을 입력해주세요');
	}
	// 중복값 판별 학생번호로
	let exist = students.some(elem => elem.stuNo == inputNo);
	if(exist) {
		alert('학생번호가 존재합니다');
		document.querySelectorAll('.stuValue input').forEach(elem => elem.value = '');
		document.querySelector('#stuNo').focus();
		return;
	}
	// 값들을 기존 배열에 집어넣기
	students.push({stuNo: inputNo, stuName: inputName, score: inputScore});
	makeTbody();

	document.querySelectorAll('.stuValue input').forEach(elem => elem.value = '');
	document.querySelector('#stuNo').focus();
}) // end of submit

// 취소버튼 이벤트 
reset.addEventListener('click', () => {
	document.querySelectorAll(`.stuValue input`).forEach(elem => elem.value = '');
	document.querySelector(`#stuNo`).focus();
})

// 체크한 목록 모두 삭제 이벤트
let delChkButton = document.querySelector('.delAll'); 
delChkButton.addEventListener('click', () => {
	let delChk = document.querySelectorAll('input[name="delCheck"]:checked');
	let del1 = [];
	for (let prop of delChk) {
		del1.push(prop.dataset.sno);
	}
	students = students.filter(elem => {
		for (let del of del1) {
			if (elem.stuNo == del) {
				return false;
			}
		}
		return true;
	})
	makeTbody();
})

//// 함수
// table tbody에 그리는 함수
function makeTbody() {
	stuTbody.innerHTML = '';
	for (let prop of students) {
		let tr = makeTr(prop);
		stuTbody.appendChild(tr);
	}
}

function makeTr(student = {}) {
	let tr = document.createElement('tr');
	let td = document.createElement('td');
	let check = document.createElement('input');
	check.setAttribute('type', 'checkbox');
	check.name = 'delCheck';
	check.setAttribute('data-sno', student.stuNo)
	td.appendChild(check);
	tr.appendChild(td);
	for (let prop in student) {
		td = document.createElement('td');
		td.innerText = student[prop];
		tr.appendChild(td);
	}
	td = document.createElement('td');
	let button = document.createElement('button');
	button.setAttribute('data-sno', student.stuNo);
	button.innerText = '삭제';
	td.appendChild(button);
	tr.appendChild(td);
	button.addEventListener('click', delButton);
	return tr;
}

function delButton() {
	let delNo = this.dataset.sno;
	let delChk = document.querySelectorAll('input[name = "delCheck"]:checked');
	let delChk1 = [];
	for (let del1 of delChk) {
		delChk1.push(del1.dataset.sno);
	}
	students = students.filter(elem => {
		if (elem.stuNo == delNo) {
			return false;
		}
		for (let del2 of delChk1) {
			if (elem.stuNo == del2){
				return false;
			}
		}
		return true;
	})
	makeTbody();
}
	