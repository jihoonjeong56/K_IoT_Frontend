// 자바스크립트 객체의 프로토타임
// : 객체의 원형(프로토타입)을 사용하여 새로운 객체를 생성
// > 객체의 속성과 메서드 재사용 가능

//? cf) 클래스 기반 언어(java, c++)
// : 설계도(클래스)를 먼저 만들고, 해당 설계도를 통해서 인스턴스(객체)를 찍어낸

//? cf) 프로토타입 기반 언어(JavaScript)
// : 미리 클래스라는 설계도를 만들지 않아도 객체 생성가능
// : 대긴 시존 객체를 복사(prototype)해서 새로운 객체 생성 가능
// > 객체가 다른 객체를 복사해서 만들어지고, 그 원본 객체를 '프로토타입'이라고 부르는 구조
// > 모든 객체들이 메서드와속성을 상속받기 위한 템플릿(틀)으로 프로토 타입 객체를 가짐

const dog = {
  bark() {
    console.log("이것은 dog 객체입니다.");
  },
};

const myDog = Object.create(dog);
myDog.bark();
// >> myDog는 dog를 프로토 타입으로 삼은 객체(dog가 부모 객체 역할)

//! 클래스
// : 새로운 객체를 생성하는 템플릿 역할
// > 프로토 타입 구조를 클래스라는 이름을 빌려 표현
class UpperCamelCaseName {
  // 속성
  name;
  age;
  job;

  // 메서드
  // : 클래스를 기반으로 만들어지는객체가 공통적으로가지는 기능 정의
  // - 클래스 내부에서는 function 키워드 사용 안함
  greet() {
    console.log(`안녕하세요 ${this.name}님`);
  }

  // 생성자 : 클래스명과동일하지 않고 모든 생성자 메서드명은 constructor()
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}
let human1 = new UpperCamelCaseName("vvv", 20, "대학생");
let human2 = new UpperCamelCaseName("www", 17, "고등학생");

human1.greet();
human2.greet();

//! 생성자 함수
// : new 키워드를사용하여 함수 호출
// : UpperCamelCase 사용 권장
function Person(firstName, lastName) {
  this.name = {
    first: firstName,
    last: lastName,
  };
}
let person = new Person("aa", "c");
console.log(person.name);
