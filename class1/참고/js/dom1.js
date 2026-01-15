// dom1.js
console.log(document.querySelectorAll("div#detail>ul>li"));
// 1.element node, 2.text node <li id="first">Apple</li>
// 3.attribute node

// element node를 만드는 메소드: createElement()
let liTag = document.createElement("li"); // <li></li>
// let txt = document.createTextNode("Apple"); // "Apple"
// liTag.appendChild(txt); // <li>Apple</li>
liTag.innerText = "Apple";

console.log(liTag);

// ul에 자식요소로 등록.  <ul>...<li>Apple</li></ul>
document.querySelector("div#detail>ul").appendChild(liTag);
