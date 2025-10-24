// % == 자바 스크립트의 '반복문'
//  : 동일한 코드블록을 여러 번 실행하는 제어문
//  - for, while, do-while (for in, for of 반복문)

// cf) 자바스크립트 배열 선언
//  : 변수 종류 면수명 = [요소1, 요소2, 요소3,...]
//  > 하나의 배열에 여러 데이터 타입의 요소 저장 가능

let fruit = ["apple", "banana", "mango"];
let numbers = [1, 2, 3, 4, 5];
let bools = [true, false];

// JS 배열에는 요소의 모든 타입이 동시에 삽입 가능
let js = [1, "자바 스크립트", true, null, undefined, [1, 2, 3]];

// 배열 요소 접근: 배열명[인텍스번호]
// 배열 길이 확인: .length 속성

/*
for(초기화식; 종료조건;증감식){
  표현의 결과가 참인동안 실행
}
*/
console.log("=== for 반복문 ===");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//? 별찍기
/*
 *
 **
 ***
 ****
 *****
 */
// 행에 대한 반복: 5번
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}

//% while 문
//  : 주어진 조건이 참인 동안 코드 블록을 계속 실행
/*
while(조건식){
  반복할 코드
}
*/
console.log("for 반복문");
for (let a = 0; a < 5; a++) {
  console.log(a);
}

console.log(" while 반복문 ");
let b = 0;
while (b < 5) {
  console.log(b);
  b++;
}

//% do-while 문
// while문과 유사하고 조건 확인 전 반드시 한 번은 코드블록을 실행 해야함

/*
do {
  반복할 실행 블록
} while (조건식);
*/
console.log(" do-while 반복문");
let c = 0;
do {
  console.log(c);
  c += 1;
} while (c < 5);
