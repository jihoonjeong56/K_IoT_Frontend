// 4. Math 내장 객체: 수학과 관련된 기본 연산 객체

console.log(`원주률 값: ${Math.PI}`);

console.log(`0이상 1미만 난수 생성: ${Math.random()}`);
// console.log(`0이상 N미만 난수 생성: ${Math.random()}` *N);
console.log(`0이상 10미만 난수 생성: ${Math.random() * 10}`);

console.log(`소수점 자리 내림: ${Math.floor(Math.random() * 10)}`);

console.log(`제곱근(square root): ${Math.sqrt(16)}`);
console.log(`제곱근(square root): ${Math.sqrt(225)}`);

// 5. Date 객체: 날짜, 시간 데이터 객체
let now = new Date();
console.log(now); // 한국이 UTC보다 9시간 빠름

//! 날짜
// getDate() : 현재 '일'
// getDay(): 현재 '요일'(일요일 0~ 토요일 6)
// getFullYear(): 현재 '년도' (YYYY:2025)
// getMoth(): 현재 '월' (1월 0 ~ 12월 11: 현재월은 반환값 +1)
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getMonth() + 1);

//! 시간
// getHours() : 0~23
// getMinutes(): 0~59
// getSeconds():0~59
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

//! 현지 날짜 표기법 & 시간 표기법 : Local(현재의)
console.log(now.toLocaleDateString()); // YYYY-MM-DD
console.log(now.toLocaleTimeString()); // 오전/오후 HH:mm:SS

// cf) 월-일-년도(MM-DD-YYYY) : 미국, 캐나다 등

//! === 요일 데이터 문자열 변환 ===
const current = new Date();
console.log(current);

// 요일 배열 정의
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// getDay()로 인덱스를 받아, 배열에서 요일 문자열 추출
const dayString = days[now.getDay()];
console.log(dayString);
