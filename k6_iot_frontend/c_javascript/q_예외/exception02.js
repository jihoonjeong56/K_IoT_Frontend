/*
! Error  객체
: JS 내의 모든 예외는 JS 내장 객체인 Error 객체를 상속받음
- Error 객체의 주요 속성
  name, message, stack

? 사용자 정의 예외 객체
  : 예외가 발생하면 예외와 발생된 정보를 확인
  - new Error('message 속성에 담긴 문자값);
*/
let myError = new Error("에러를 생성합니다.");
// console.log(myError.message);

//? throw 키워드
// : 강제 예외 발생
// - 예외나 기타 명시적인 값을 표현하는데 사용
// throw myError;
// throw "안녕하세요";
// throw 24;

function text(object) {
  if (!object || object.a === undefined || object.b === undefined) {
    // object가 undefined면
    // : 매개변수가 변수로 선언은 되었지만 인자값이 전달 안된 경우

    // object.a 와 object.b 가 undefined
    // : 객체의 각 속성에 초기화가 안된 경우
    throw new Error("함수 호출 시 object 와 a, b 속성이 전달 되어야 합니다.");
  }
  console.log(object.a + object.b);
}
try {
  text({ a: 4, b: 3 });
  text({ a: "a", b: "aa" });
  text();
} catch (e) {
  console.error("에러발생", e.message);
}
console.log("일반 코드 흐름");
