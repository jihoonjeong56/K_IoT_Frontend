//  === 자바 스크립트의 this  키워드 ====
console.log(" === this === ");
/*
  객체(속성, 기능)

  변수종류 객체명 = {
    [속성]
    키1: 값1,
    키2: 값2,
    키3: 값3,

    [기능]
    키4: 함수 선언(함수선언식, 표현식, 화살표 모두 가능)
  }
*/

let shinRamyeon = {
  name: "신라면",
  company: "농심",
  taste: "아주매움",

  boil: function () {
    console.log("라면을 끓입니다.");
    console.log(`${this.name}을 끓입니다.`); // this는 shinRamyeon의 .name(이름):'신라면'
  },
  eat: () => {
    console.log("라면을 먹습니다.");
  },
  // 속성과 기능 사이에는 반드시 , 콤마로 구분
};

//! this
// : 지금 동작(호출)하고 있는 코드를 포함한 객체를 가리킴
// > this(지금 이것)

//! 컨텍스트(context)

// cf) 전역 컨텍스트(global context)
// : 파일 전체에서 가장 바깥쪽에 있는상태
// - 전역 실행 상태

console.log(this); // {}: 해당 파일의 전역 스코프(전역 상태)

let num = 1;
const PI = 3.14;
function add(a, b) {
  return a + b;
}

// - Node.js 환경에서는 global (전역) 객체
// - 브라우저 환경에서는 window 객체

// cf) 함수 컨텍스트: 함수 내부의 this
//? 1. 일반함수의 this
// : 전역 객체를 의미(전역 컨텍스트와 동일)
function showThis() {
  // 일반함수(함수 선언문)
  // console.log(this.num);
  // console.log(this.PI);
  console.log(this);
}
showThis();

//? 2. 객체 메서드 안의 this
// : 객체의 변수에 할당되는 함수
// - 메서드 호출 시 해당 메서드를 호출한 객체에 바인딩(bind: 묶다, 고정하다.)
const myObject = {
  name: "object",
  showThis: function () {
    console.log(this);
  },
};
myObject.showThis();
//? 3. 생성자 함수와 this

// cf) 객체 리터럴 정의 시: this값이 정의한 해당 객체에 고정(myObject로 고정)
//      생성자 함수 사용시: this값이 현재의 객체에 바인딩(어떤 객체를 호출하는냐에 따라 달라짐)

function Person(name) {
  // (좌항) this.name: 객체의 변수
  // (우항) name: 매개변수로 전달받은 실제 데이터값
  this.name = name;
}

const person1 = new Person("aaa"); // this 가 person1 (person1.name === aaa)
const person2 = new Person("bbb"); // this 가 person2 (person2.name === bbb)

console.log(person1.name);
console.log(person2.name);

//? 4. 화살표 함수와 this

const arrowObject = {
  naem: "arrow",
  showThis: () => {
    // '화살표 함수'는 this의 바인딩 체계가 다름
    // >> '해당 화살표 함수가 정의된 객체'의 생성 스코프를 this로 가져옴
    console.log(this);
  },
};

arrowObject.showThis();

//! cf) 객체 내부의 this는 
// 선언적 함수, 함수 표현식 vs 화살표 함수의 this 바인딩이 다름
// >> 현재의 객체값을 활용하기 위함이기 때문에 선언적 함수, 함수 표현식 사용 권장.