// === 콜백 함수를 활용하는 JS의 '내장함수'
//! '배열'의 콜백 함수 메서드

// 4) reduce()
// : 배열의 각 요소에 대해 함수를 적요하여 '단일 값을 생성' (하나의 값)
// - 누적값으로 단일 결과 도출

//? array.reduce((acc, value, index, array) => {...}, initialValue)

// - acc: 누적값(이전 반환값)
//      >>> 각 순회마다 축적되는 값(이전 작업물의 반환갑, 첫 번째 호출 시에는 '초기값' 지정)
// - initialValue: 초기 누적값(생략시 첫 요소가 초기 acc 가 됨)

// cf) 기존 콜백 함수의 인자: value, index, array

let numbers = [1, 2, 3, 4];

let sum1 = numbers.reduce((acc, value) => acc + value, 0);

let sum2 = numbers.reduce(function (acc, value) {
  return acc + value;
}, 100);

console.log(sum1);
console.log(sum2);

// reduce 예시
let cars = ["audi", "bmw", "hyundai", "volvo"];

let combinedCar = cars.reduce((acc, car) => {
  return acc + car + ", ";
}, "Cars: ");
console.log(combinedCar);
console.log(typeof combinedCar);

//! === 기타 배열의 고급 메서드 ===
let numberArray = [1, 3, 5, 2, 6, 9];

// 1) sort(), reverse() : 정렬 메서드
console.log(numberArray.sort());
console.log(numberArray.reverse());

// 2) indexOf, lastIndexOf(): 특정 요소의 인덱스를 찾는 메서드
// 3) find(), findeIndex(): 특정 조건을 만족하는 첫 번째 요소 / 첫 번째 요소의 인덱스 반환
//    >> 존재하지 않으면 -1 반환

let nums = [4, 2, 6, 7, 1, 8];

let firstOverSix = nums.find((num) => num > 6);
console.log(firstOverSix); // 결과들중 가장 첫번째 요소 바환

let firstOverEightIndex = nums.findIndex((num) => num > 8);
console.log(firstOverEightIndex); //없기 때문에 -1 출력
