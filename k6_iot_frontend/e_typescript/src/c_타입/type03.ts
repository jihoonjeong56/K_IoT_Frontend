//! == 타입 별칭(type alias)
// : 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게하는 기능
// - 코드의 재사용성과 가독성 향상

//? 기본 사용 방법
// : type 키워드 사용
// - type 타입 별칭 = 타입;
// +) 타입 별칭 지정 시 일반 변수와의 차이를 위해 'UpperCamelCase' 사용 권장

// 1. 변수 타입 별칭 : 사용 안함
type textType = string;
let textMessage: textType = "텍스트문자열 입니다.";
let textMessage2: string = "텍스트 문자열 입닏.";

type NumberType = number;
let num1: NumberType = 123;
let num2: number = 234;

// cf) 원시 타입 키워드 그대로를 사용한 것이 코드 해석 & 가독서에 도움

// 2. 객체 타입 별칭
type UserType = {
  name: string;
  height: number;
};

const user1: UserType = {
  name: "aaa",
  height: 167,
};

const user2: UserType = {
  name: "",
  height: 177,
};

// 3. 함수 타입 별칭
// : UserType 타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수
// - type 타입 별칭 = (매개변수: 타입지정) => 반환 타입;
type ValidUser = (user: UserType) => boolean;

// cf) 함수 타입 별칭 사용시 함수 표현식 또는 화살표 함수 사용 권장
const isValidUser: ValidUser = (user) => user.name !== "";
console.log(isValidUser(user1));
console.log(isValidUser(user2));

type FuncType = (num: number) => number;

const exampleFunc: FuncType = (num) => {
  num * 2;
  return num;
};
console.log(exampleFunc(3));

type ArrayReturnType = (num: number) => number[];
const arrayReturnFunc: ArrayReturnType = (num) => {
  return [num, num];
};
arrayReturnFunc(3);
console.log(arrayReturnFunc(3));

// === 타입 별칭 사용 ===

//! 문제 1: 타입 어노테이션 사용
// 변수 age를 선언하고 숫자 타입으로 어노테이션을 지정
// 변수 isStudent를 선언하고 불리언 타입으로 어노테이션을 지정
// 위 두 변수에 적절한 값을 할당하고, 콘솔에 출력

let age: number;
let isStudent: boolean;
age = 123;
isStudent = true;
console.log(`Age: ${age}, isStudent: ${isStudent} `);

//! 문제 2: 타입 별칭 사용
// ProductType이라는 타입 별칭을 생성
// 객체, id (문자열 타입), name (문자열 타입), price (숫자 타입) 속성 포함

type ProductType = {
  id: string;
  name: string;
  price: number;
};
let product: ProductType = {
  id: "1",
  name: "samsung",
  price: 1200000,
};

console.log(product);
