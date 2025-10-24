//! 1) add: Named Import(이름 붙여 가져오기)
// - 생성된 이름(수출파일)으로 사용하거나 중괄호 내에서 별칭 지정 가능
// - 중괄호 사용
import { add } from "./mathModule.js";
console.log(ad(add(2, 3)));

//! 2) substract: Default Import(기본 내보내기)
// - 사용하는 몯류에서 이름 지정 가능 + 단 하나의 모듈만 지정
// - 중괄호 사용 안함

import 빼기 from "./mathModule.js";
console.log(빼기(5, 2));

//! 3) multiply : Named Import(as 구문)
import { mulitiply as mp } from "./mathModule.js";

//! 4) divide: 모듈 전체 가져오기(import * as 별칭)
import * as mathModule from "./mathModule.js";
console.log(mathModule.add(2, 4));
console.log(mathModule.divide(6, 3));
