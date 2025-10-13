//! 1. 배열 합계 구하기
let array = [1, 2, 3, 4, 5];

function sumArray(array) {
  let sum = 0; // 배열의 요소 합을 저장 시킬 변수

  let length = array.length;
  for (let i = 0; i < length; i++) {
    //요소 전체를 순회할 횟수
    sum += array[i];
  }
  return sum;
}
console.log(sumArray(array));
console.log(sumArray([24, 31, 76, 45]));

//! 2. 특정 수 이상의 요소 필터링

// 전달되는 배열 안에서 10 이상의 요소만 필터링 >> 새로운 배열로 반환
function filterTen(array) {
  let filterdValue = []; // 10 이상의 값을 담는 배열

  let length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] > 10) {
      filterdValue.push(array[i]);
    }
  }
  return filterdValue;
}
console.log(filterTen([2, 14, 5, 6, 23, 32, 12, 5, 9, 4]));

//! 3. 배열의 평균 구하기
// - findAverage(array)
// : 평균 == 전체 요소의 합/ 요소의 개수
function findAverage(array) {
  let sum = 0;
  let length = array.length;
  for (let i = 0; i < length; i++) {
    sum += array[i];
  }
  let avg = sum / length;
  return avg;
}
console.log(findAverage([1, 2, 3]));

//! 4. 배열 내의 최대값 찾기
// - findMax(array)
// : 배열의 첫번째 요소를 max 라는 변수에 담기
// : 배열을 순회하면서  max 보다 큰 값이 있는 경우 max를 해당 값으로 재할당

function findMax(array) {
  let max = array[0];
  let length = array.length;
  for (let i = 1; i < length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log(findMax([2, 4, 6, 4]));
