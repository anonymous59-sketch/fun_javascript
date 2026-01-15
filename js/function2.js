// console.log('function2 => ', result); // 같은 html에 연결된 자바스크립트이므로 전역 변수는 자바스크립트끼리 공유된다.
let ary1 = JSON.parse(jsonData1);

//// 함수(member => tr>td:(id),td(fn),td(ln),td(salary))
function makeTr (member) {
  let tr = document.createElement('tr');
  let fields = ['id', 'first_name', 'last_name', 'salary'];
  fields.forEach(field => {
    const td = document.createElement('td');
    td.innerHTML = member[field];
    tr.appendChild(td);
  })
  return tr;
}

// 멤버 수 만큼 tr 생성
const target = document.querySelector('#target');
ary1.forEach(elem => {
  const newTr = makeTr(elem);
  target.appendChild(newTr);
})