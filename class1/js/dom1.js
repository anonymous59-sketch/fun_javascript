// dom1.js
console.log(document.querySelector(`div#detail>ul>li`));
// 1. element node, 2. text node 3. attribute node <li id="first">Apple<li> id = element node, Apple = text node, id='first' = attribute node // 4. comment node 주석 노드

// element node를 만드는 메소드 : createElement()
let liTag = document.createElement('li');// 태그는 대문자 소문자 구별 안함, li태그, elementnode 생성
console.log(liTag);
let txt = document.createTextNode('Apple'); // textnode 'Apple'을 생성
console.log(txt);
liTag.appendChild(txt);
console.log(liTag); // heap 저장소와 stack 저장소 차이, 원시유형과 복합유형의 차이, 
// stack = 원시유형 데이터 저장, heap = 복합유형 데이터 저장, 그리고 그 heap 메모리의 주소값을 stack에 저장 - 참조 원리랑 같음, 주소 참조가 후순위라사 값 수정 이후 주소 참조가 이루어져서 다 표시 됨.
// liTag.innerText = `apple`; 텍스트 노드 만들지 않고 바로 태그 사이에 문자를 넣기

// ul태그의 자식요소로 liTag 등록.
document.querySelector(`div#detail>ul`).appendChild(liTag);

