// == 자바스크립트 함수 구조: 매개변수/인자/반환값 ==//
//! 1. 매개변수(parameter) VS 인자(argument)
// - 매개변수: 함수에 전달될 데이터를 담는 변수
// - 인자: 함수 호출 시 전달한는 데이터값

function add(a, b) {
  // 타입 명시 X
  console.log(a + b);
}

add(3, 7);

//! 2. JS에서의 매개변수, 인자 특징
// : 두 가지 수가 반드시 일치할 필요 없음

function log(a) {
  console.log(a);
}
log(); // 인자를 전달하지 ㅇㄶ은 파라미터 값은 undefined
// >> undefined: 변수를 선언하고 초기화 이전의 타입

log("hello");
log("hello", "world"); // hello 만 출력
// >> 여러개의 파라미터, 인자값 나열시 ,콤마로 구분
//    지정된 수의 파라미터 이상의 인수는 읽히지 않음(무시)

function introduce(name, age) {
  console.log(`${name} is ${age} years old`);
}

introduce("aaa", 20);
introduce(20, "aaa"); // >> 매개변수의 차례로 인자값이 전달

//! 3. 반환값(return, 리턴값)
// : 결과를 반환
// - 함수 내에서 return 키워드가 읽히면 함수의 실행을 즉시 중단사고, return 뒤의 값을 반환

function subtract(a, b) {
  let result = a - b;
  return result;
  // console.log('안녕하세요');
  // >> return과 같은 스코프에서 키워드 뒤의 코드는 읽히지 않음
}

let outcome = subtract(10, 3);
console.log(outcome);
console.log(subtract(20, 3));

// cf) return 키워드가 없는 함수는 실행시 undefined를 반환
function noReturn() {
  console.log("Helllo");
}
console.log(noReturn());

// == 연습문제 ==
// - square1,2,3 함수 작성
// - 파라미터를 x로 지정
// - 반환값으로 x의 제곱을 지정
// - 함수 선언 방식 3가지 모두 사용 마지막 결과를 콘솔에 출력
function square1(x) {
  return x * x;
}

const square2 = function (x) {
  return x * x;
};

// const square3 = (x) => {
//   return x * x;
// };
const square3 = (x) => x * x;

console.log(square1(12));
console.log(square2(11));
console.log(square3(10));
