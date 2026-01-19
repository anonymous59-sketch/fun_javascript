// destructuring2.js
// fetch 연습 
fetch('js/data2.json')
  .then(resp => resp.json())
  .then(data => {
    const ul = document.querySelector('ul#list');
    data.forEach(({id, first_name, salary}) => {
      // console.log(id, first_name, salary);
      const li = `<li>${id}, ${first_name}, ${salary}</li>`;
      ul.insertAdjacentHTML('beforeend', li);
    })
  })
  .catch(err => {
    console.log(err)
  });

