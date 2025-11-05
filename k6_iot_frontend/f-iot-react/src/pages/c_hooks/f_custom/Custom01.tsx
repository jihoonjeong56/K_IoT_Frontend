import useCount from "@/hooks/useCount";
import React, { useState } from "react";

//! 커스텀 훅(Custom Hook)
// : 리액트의 기본 Hooks을 사용하여 작성되는 재사용 가능한 로직의 모음
// >> useState, useEffect, useRef 등

//? 커스텀 훅 사용 방법
// 1) 반드시 use로 시작해야함
//  ex) useSomthing, useInput,  use+기능을 설명하는 키워드
// 2) 다른 Hooks을 내부에서 호출 가능
// 3) 결과와 기능을 반환

function Custom01() {
  // count 관리하는 useState
  // const [count, setCount] = useState<number>(0);
  const { count, increment, decrement, reset } = useCount<number>(0);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default Custom01;
