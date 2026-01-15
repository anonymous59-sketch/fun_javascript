//// 함수
// 함수 정의(sumArray)
function sumArray(ary = []) {
  // 배열 요소의 합을 반환하는 기능
  let sum = 0;
  for (let elem of ary) {
    sum += Number(elem);
  }

  return sum; // sum 값을 반환
}

let result = sumArray([1, 2, 3, 4, 5]);
console.log(`결과값은 ${result}`);

// 정의: 함수 표현식
const getMax = function (ary = []) {
  // 배열요소 중에서 제일 큰 값을 반환
  let max = 0;
  for (let elem of ary) {
    if (max < isNaN(Number(elem)) ? 0 : Number(elem)) {
      max = isNaN(Number(elem)) ? 0 : Number(elem);
    }
  }
  return max;
};

result = getMax(['a', '2', '4', '5', 'b', 3, 200]);
console.log(result);

// 함수 정의, 화살표함수로
const getMin = (n1, n2) => {
  // 두개의 매개변수 중에서 작은 값을 반환하는 함수
  let num1 = isNaN(Number(n1)) ? 0 : Number(n1);
  let num2 = isNaN(Number(n2)) ? 0 : Number(n2);
  if (num1 > num2) {
    return n2;
  } else if (num1 < num2) {
    return n1;
  } else {
    return `${n1} = ${n2}`;
  }
};

result = getMin('0', 21);
console.log(`결과값은 ${result}`);

const getMin1 = (n1, n2) => n1 > n2 ? n2 : n1;

result = getMin1(29, 22);
console.log(`결과값은 ${result}`);

// 함수는 기능을 위해 존재, 변수를 가지고 새로운 값을 만들어내는 것이 정상적, 만약 변수의 값을 직접적으로 바꾸는 기능을 넣는건 함수로써의 기능이 좋지 않은 편이다.
let myInt = 1;

function increase(value) {
  return value += 1;
}

console.log(increase(myInt));

let myCar = {
  maker: 'bmw',
  color: 'black',
};

function changeColor(car) {
  car.color = 'blue';
  return car;
}

myCar['color'] = 'black';
console.log(changeColor(myCar));
myCar['color'] = 'black';
console.log(myCar);

// 험슈, 배열, 객체 => 평균나이를 구하는 함수
function getAverageAge(persons = []) {
  if (!Array.isArray(persons) /* 배열인지 아닌지 확인하는 메서드 */ ) {
    return 0;
  }
  let sum = 0;
  persons.forEach(elem => {
    sum += elem.age;
  })
  let avg = (sum / persons.length);
  return avg;
}

function getAverageAge1(persons = []) {
  if (!Array.isArray(persons) /* 배열인지 아닌지 확인하는 메서드 */ ) {
    return 0;
  }
  let sum = 0;
  for (let elem of persons) {
    sum += elem.age;
  }
  let avg = (sum / persons.length);
  return avg;
}

function getAverageAge2(persons = []) {
  if (!Array.isArray(persons) /* 배열인지 아닌지 확인하는 메서드 */ ) {
    return 0;
  }
  let sum = 0;
  for (let elem in persons) {
    sum += persons[elem].age;
  }
  let avg = (sum / persons.length);
  return avg;
}

const manyPeople = [{
    name: '홍길동',
    age: 20,
  },
  {
    name: '박민수',
    age: 33,
  },
  {
    name: '최태영',
    age: 27,
  },
  {
    name: '홍성식',
    age: 17,
  },
];

result = getAverageAge(manyPeople);
console.log(result);

result = getAverageAge1(manyPeople);
console.log(result);

result = getAverageAge2(manyPeople);
console.log(result);

result = getAverageAge2(12123);
console.log(result);

// json 문자열 데이터
const jsonData = `[{"id":1,"first_name":"Marilyn","last_name":"Janecek","email":"mjanecek0@comcast.net","gender":"Female","salary":7878},
{"id":2,"first_name":"Pia","last_name":"Zannetti","email":"pzannetti1@epa.gov","gender":"Female","salary":8405},
{"id":3,"first_name":"Jose","last_name":"Fahrenbacher","email":"jfahrenbacher2@geocities.jp","gender":"Male","salary":5332},
{"id":4,"first_name":"Smith","last_name":"Grevatt","email":"sgrevatt3@google.es","gender":"Male","salary":2166},
{"id":5,"first_name":"Horatius","last_name":"Bithell","email":"hbithell4@dot.gov","gender":"Male","salary":8779},
{"id":6,"first_name":"Andi","last_name":"Byas","email":"abyas5@e-recht24.de","gender":"Female","salary":12888},
{"id":7,"first_name":"Dela","last_name":"Izaks","email":"dizaks6@nyu.edu","gender":"Female","salary":16965},
{"id":8,"first_name":"Lucias","last_name":"Dinnis","email":"ldinnis7@pagesperso-orange.fr","gender":"Male","salary":18331},
{"id":9,"first_name":"Boigie","last_name":"Brokenshaw","email":"bbrokenshaw8@tripod.com","gender":"Male","salary":11929},
{"id":10,"first_name":"Grove","last_name":"Davenhall","email":"gdavenhall9@nps.gov","gender":"Male","salary":19638},
{"id":11,"first_name":"Durand","last_name":"Covendon","email":"dcovendona@reference.com","gender":"Male","salary":12661},
{"id":12,"first_name":"Winnah","last_name":"Marcombe","email":"wmarcombeb@wiley.com","gender":"Female","salary":13786},
{"id":13,"first_name":"Tamar","last_name":"Wyche","email":"twychec@fc2.com","gender":"Bigender","salary":18547},
{"id":14,"first_name":"Ilsa","last_name":"Brindley","email":"ibrindleyd@yahoo.com","gender":"Female","salary":5925},
{"id":15,"first_name":"Ada","last_name":"Sendley","email":"asendleye@biglobe.ne.jp","gender":"Female","salary":12764}]`;

const memberAry = JSON.parse(jsonData); // json 문자열을 일반 자바스크립트 객체로 변환

let sum = 0; // memberAry 급여 합
memberAry.forEach(elem => {
  sum += elem.salary;
});

sum = 0;
for (let elem of memberAry) {
  sum += elem.salary;
}

let sumOfMale = 0; // Gender가 'Male'인 합계
memberAry.forEach(elem => {
  if (elem.gender == 'Male') {
    sumOfMale += elem.salary
  }
})

let avg = 0; // 전체 평균
let avgOfMale = 0; // 남자 평균
let cntOfMale = 0;

avg = sum / memberAry.length
memberAry.forEach(elem => {
  if (elem.gender == 'Male') {
    cntOfMale++; // 남자 수 카운트
  }
});
avgOfMale = sumOfMale / cntOfMale;


console.log(`전체 합계는 ${sum}\n전쳬 평균 급여는 ${avg}\n남자 합계급여는 ${sumOfMale}\n남자 평균 급여는 ${avgOfMale}`);

function getMemberInfo(jsonData) {
  const memberAry = JSON.parse(jsonData); // json 문자열을 일반 자바스크립트 객체로 변환
  let sum = 0; // memberAry 급여 합
  memberAry.forEach(elem => {
    sum += elem.salary;
  });

  let sumOfMale = 0; // Gender가 'Male'인 합계
  memberAry.forEach(elem => {
    if (elem.gender == 'Male') {
      sumOfMale += elem.salary
    }
  });

  let avg = 0; // 전체 평균
  let avgOfMale = 0; // 남자 평균
  let cntOfMale = 0;

  
  memberAry.forEach(elem => {
    if (elem.gender == 'Male') {
      cntOfMale++; // 남자 수 카운트
    }
  });
  
  
  avg = sum / memberAry.length; // 전체 평균
  avgOfMale = sumOfMale / cntOfMale; // 남자 평균

  // 객체를 활용해서 return을 한다.
  return {sum, avg, sumOfMale, avgOfMale, cntOfMale};
}
