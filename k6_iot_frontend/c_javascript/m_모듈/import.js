// import : 수입하다

// 1) export된 특정 맴버 가져오기
import { PI as PIE, add as sum } from "./export.js";
// 사용하지 않는 import 기능은 연하게 표시
console.log(PIE);
console.log(sum(3, 5));

// +) as 없이 export에 정의된 이름만 사용
import { PI, add } from "./export.js";
console.log(PI);
console.log(add(5, 7));
// 2) export default로 내보낸 항목 가져오기
import a from "./export.js";
import b from "./export.js";
import c from "./export.js";
// : 중괄호가 없는 import >> 무조건 기본 내보내기
console.log(a(1, 4));
console.log(b(2, 4));
console.log(c(3, 4));

// 3) 모든 멤버를 하나의 객체로 가져오기
// : import * as 별칭 from '파일명.확장자';
// > 사용시 별칭.변수명 or 별칭.함수명();
import * as exportData from "./export.js";
console.log(exportData.name);
// > 전체 내보내기는 내부에서 내보낸 기능만 담김
//    : export 되지 않은 내부 맴버는 접근 안됨
console.log(exportData.add(5, 8));
