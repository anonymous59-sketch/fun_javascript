// productPage.js
// 프로그래밍을 할 때 전역에서 작업을 1차적으로 console로 확인해가면서 기능을 전부 만들고, 함수에 집에넣든 이벤트에 집어넣든 정리를 하는 식으로 하는게 꼼꼼히 만들 수 있음
// 함수에 넣고, 이벤트에 넣는게 시간은 빠른데 익숙하지 않으면 조금 구상하기가 힘듬

// console.log(products); // 데이터 확인
const target = document.querySelector('#list');
const selectCategories = document.querySelector('select[class~="categories"');
const submitBtn = document.querySelector('.search button');

// 목록출력
showProductList(products);
// products.forEach(elem => {
//   let tr = document.createElement('tr');
//   ['productCode', 'productName', 'purchasePrice', 'category'].forEach(field => {
//     let td = document.createElement('td');
//     td.innerText = elem[field]; // 속성을 간단하게 반복하려고 앞에 배열을 하나 만들어서 forEach를 사용함
//     tr.appendChild(td);
//   })
//   target.appendChild(tr);
// });

// category 만들기 (중복제거)
let categories = [];
products.forEach(elem => {
  if (categories.indexOf(elem.category) == -1) {
    categories.push(elem.category);
  } 
})
// console.log(categories);

// 화면에 카테고리 추가
categories.forEach(elem => {
  // <option value = '값'> '값' </option>
  let opt = document.createElement('option');
  opt.setAttribute('value', elem);
  opt.innerText = `${elem}`;
  selectCategories.appendChild(opt);
})


//// 이벤트
// 카테고리 선택 이벤트
selectCategories.addEventListener('change', (e) => { // click보다는 option의 value가 변경되는게 더 맞는 말이니 change를 사용
  const selectValue = e.target.value;
  // console.log(selectValue);
  const filterProducts = products.filter(elem => elem.category == selectValue
  //   {
  //     if (elem.category == selectValue) {
  //     return true;
  //   }
  //   return false;
  // }
  );
  // console.log(filterProducts);
  showProductList(filterProducts);
  if(selectValue == `All`) {
    showProductList(products);
  }
});
// 조회 이벤트
// console.log(submitBtn);
submitBtn.addEventListener('click', () => {
  const productName = document.querySelector('.search input:first-child').value;
  const filterProductsName = products.filter(elem => elem.productName.indexOf(productName) >= 0)

  const optionValue = selectCategories.value;
  const filterProducts1 = products.filter(elem => elem.category == optionValue);

  let filter = filterProducts1.filter(elem => elem.productName.indexOf(productName) >= 0)
  showProductList(filter);
  
  if (optionValue == 'All') {
    showProductList(filterProductsName);
  }
})

//// 함수
function showProductList(listAry = []) {
  target.innerHTML = '';
  listAry.forEach(elem => { // 기능 만들때는 전체 데이터를 가지고 했고 함수로 들어오면 매개변수에 따라 설정을 해야되니까 기능에 알맞게 수정필요
  let tr = document.createElement('tr');
  ['productCode', 'productName', 'purchasePrice', 'category'].forEach(field => {
    let td = document.createElement('td');
    td.innerText = elem[field]; // 속성을 간단하게 반복하려고 앞에 배열을 하나 만들어서 forEach를 사용함
    tr.appendChild(td);
  })
  target.appendChild(tr);
  });
}