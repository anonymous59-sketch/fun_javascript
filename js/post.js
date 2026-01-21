// post.js

let maxId = 0;
// 1. fetch를 활용해서 글 목록 출력하기
fetch('http://localhost:3000/posts')
  .then(res => res.json())
  .then(result => {
    // console.log(result);
    const tbody = document.querySelector('#postList');
    result.forEach(elem => {
      const tr = `<tr class="accordion-header" data-bs-toggle="collapse" data-bs-target="#collapse${elem['id']}" aria-expanded="false" aria-controls="collapse${elem['id']}" ondblclick="DblClick(event)" data-id="${elem['id']}" data-title="${elem['title']}" data-author="${elem['author']}"><td>${elem['id']}</td><td>${elem['title']}</td><td>${elem['author']}</td><td><button class="btn btn-danger" data-delno=${elem['id']}>삭제</button></td></tr>`;
      tbody.insertAdjacentHTML('beforeend', tr);
      
      fetch(`http://localhost:3000/comments?postId=${elem.id}`)
        .then(res => res.json())
        .then(result => {
          // console.log(result);
          result.forEach(elem => {
            const tr = `<tr id="collapse${elem['postId']}" class="accordion-collapse collapse" data-bs-parent="#postList"><td>${elem['id']}</td><td colspan="3">${elem['body']}</td></tr>`;
            document.querySelector(`tr[data-id="${elem.postId}"]`).insertAdjacentHTML('afterend', tr);
              })
            })
        .catch(err => console.log(err));
    });

    maxId = result.reduce((acc, elem) => {
      return acc > Number(elem.id) ? acc : Number(elem.id);
    }, maxId)
  })
  .catch(err => console.log(err));




// 삭제 버튼을 눌렀을 때 이벤트
document.querySelector('#postList').addEventListener('click', e => {
  // console.log(e.target.tagName);
  if(e.target.tagName == 'BUTTON') {
    // console.log(e.target.dataset.delno);
    const delNo = e.target.dataset.delno;
    fetch(`http://localhost:3000/posts/${delNo}`, {
      method: 'delete'
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        e.target.parentElement.parentelement.remove();
      })
      .catch(err => console.log(err));
  }
 });

// 등록을 눌렀을 때 이벤트
document.querySelector('form[name="addForm"]').addEventListener('submit', e => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  fetch('http://localhost:3000/posts/', {
        method: 'post',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringify({id: "" + (maxId + 1), title, author}),
      })
    .then(resp => resp.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

// 행을 더블클릭했을 때 실행 함수
function DblClick(e) {
  document.querySelector('.modal-overlay').style.display = 'block';
  // console.log(e.target.parentElement);
  const tr = e.target.parentElement;
  document.querySelector('#modalNo').textContent = tr.dataset.id;
  document.querySelector('#modalTitle').value = tr.dataset.title;
  document.querySelector('#modalAuthor').value = tr.dataset.author;
}

// 모달창의 저장버튼을 클릭했을 때 함수
function closeModal() {
  document.querySelector(".modal-overlay").style.display = "none";
  const id = document.querySelector("#modalNo").textContent;
  const title = document.querySelector("#modalTitle").value;
  const author = document.querySelector("#modalAuthor").value;
  fetch(`http://localhost:3000/posts/${id}`, {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title, author})
      })
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

// 교수님 코드
// 1. fetch 글목록 출력.
// const fields = ["id", "title", "author"];
// const target = document.querySelector("#postList");
// let max_id = 0; // 신규글번호

// fetch("http://localhost:3000/posts")
//   .then((resp) => resp.json())
//   .then((data) => {
//     // 데이터 건수만큼 tr 생성해주기.
//     data.forEach((elem) => {
//       target.appendChild(makeTr(elem));
//     });
//     // reduce.
//     max_id = data.reduce((acc, { id, title, author }) => {
//       return acc > Number(id) ? acc : Number(id);
//     }, 0);
//   })
//   .catch((err) => console.log(err));

// // 등록이벤트.
// document
//   .querySelector('form[name="addForm"]')
//   .addEventListener("submit", (e) => {
//     e.preventDefault();
//     // title, author => 입력값.
//     const title = document.querySelector("#title").value;
//     const author = document.querySelector("#author").value;
//     // fetch. Post요청처리.
//     fetch("http://localhost:3000/posts", {
//       method: "post",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ id: "" + (Number(max_id) + 1), title, author }),
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((err) => console.log(err));
//   });

// // tr생성함수.
// function makeTr(post) {
//   let tr = document.createElement("tr");
//   tr.addEventListener("dblclick", (e) => {
//     document.querySelector(".modal-overlay").style.display = "block";
//     // 글번호영역.
//     document.querySelector("#modalNo").textContent = post.id;
//     document.querySelector("#modalTitle").value = post.title;
//     document.querySelector("#modalAuthor").value = post.author;
//   });

//   for (let field of fields) {
//     let td = document.createElement("td");
//     td.innerText = post[field]; // 객체[속성] => 값을 가져옴.
//     tr.appendChild(td);
//   }
//   let td = document.createElement("td");
//   let btn = document.createElement("button");
//   btn.innerText = "삭제"; // 텍스트.
//   btn.className = "btn btn-danger"; // 클래스 지정.
//   btn.setAttribute("data-no", post.id); // 속성추가.
//   btn.addEventListener("click", function (e) {
//     // btn의 data-no속성의 값 가져오기.
//     const no = this.dataset.no; // data-no의 속성값.

//     // fetch(삭제는 delete요청) 호출 start.
//     fetch("http://localhost:3000/posts/" + no, {
//       method: "delete",
//     })
//       .then((resp) => resp.json())
//       .then((data) => {
//         // 화면삭제를 해야하지만 화면이 refresh되면서 목록을 새로 가져옴.
//         tr.remove();
//       })
//       .catch((err) => console.log(err));
//     // fetch(삭제는 delete요청) 호출 end.
//   }); // end of btn.addEventListener.

//   td.appendChild(btn);
//   tr.appendChild(td);

//   return tr;
// } // end of makeTr.

// // 저장버튼 이벤트.
// function closeModal() {
//   document.querySelector(".modal-overlay").style.display = "none";
//   const id = document.querySelector("#modalNo").textContent;
//   const title = document.querySelector("#modalTitle").value;
//   const author = document.querySelector("#modalAuthor").value;
//   fetch(`http://localhost:3000/posts/${id}`, {
//         method: 'put',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({title, author})
//       })
//         .then(resp => resp.json())
//         .then(data => console.log(data))
//         .catch(err => console.log(err));
// }