// cf) 주석 ctrl + / 
// 1줄 주석 : //, 여러줄 /* */
// 간단한 js 예제
// 기능
// : 버튼을 클릭하면 새로운 이름을 입력 받는 창이 생성, 작성된 이름으로 버튼 내의 Player 명이 변경

// 현재 웹 문서에서 button 태그를 찾아 저장
// ? query(질문하다)Selector(선택자를)
const button = document.querySelector('button');

// 저장된 변수에 클릭 이벤트 추가
// 변수명.기능();
// >> 객체의 속서/메서드 사용 .연산자 사용
// ? add(더하다)EventListner(이벤트읽기를)
button.addEventListener('click', updateName);
// updateName: 새로운 이름을 입력받고 버튼을 수정하는 기능
// 사용자 정의 함수
function updateName(){
  const name = prompt('새로운 이름읇 입력해 주세요');
  button.textContent = `Player 1: ${name}`;
}
// ! 플러그인 설치
// - 코드 스니펫(JavaScript (ES6) code snippents) 설치
// >> JS 단축키 제공

// clg: console.log();
// >> 출력문(콘솔 창 출력)
//    - 간단한 코드, 결과값 출력(개발자 친화적 코드)
// >> [개발자 도구] - [console(콘솔)]
console.log('안녕하세요');
function name(params) {
  
}
//fof
for (const item of object) {
  
}
//fin
for (const item in object) {
  
}
//imp
// import moduleName from 'module';