import React from "react";
import { create } from "zustand";

//! Zustand(독일어: 상태)
// : 상태 관리 라이브러리
// - React Hooks기반 + 최소한의 API를 사용하녀 상태를 쉽게 생서하고 접근
// - create로  store생성 / 훅 형태의 useStore로 컴포넌트가 구독

//? 장점
// 1) 부분 구독: useStore(s => s.x); 형태로 필요한 값만 구독 가능
//    > 불필요한 렌더링 감소
// 2) 미들웨어: devtools, persist, immer등 사용 가능
// 3) TypeScript 친화적: 상태, 액션 타입 정의가 유연

//? 파일명 & 명명 규칙 (베스트 프렉티스)
// 파일명
// : <domain>.store.ts
//  EX) auth.store.ts, cart.store.ts, ui.store.ts
// 훅명
// : use도메인Store
// EX) useAuthStore, useCartStore, useUiStore  등
// 상태 타입 네이밍
// : AuthState, CartState, UserState, UiState 등

//? 설치
// npm install zustand

//! == Zustand 예제(폴더/ 파일 단위 분리 x 예제)

//? 0. 저장소 타입 선언
interface CountState {
  // 객체의 속성
  count: number;

  // 객체의 메서드
  increment: () => void;
  decrement: () => void;
}

//? 1. store 생성
// : 전역 상태가 담긴 저장소
// - create 함수를 사용하여 생성(zustand 라이브러리에 포함)
//  > 애플리케이션에서 관리할 상태와 상태 업데이트 함수들이 포함

//! count 값에 대한 전역 상태 관리
// : create 함수의 제네릭 타입
//  > 전역 관리할 대상(상태와 액션)을 정의

// +) create 함수는 set 함수를 인자로 전달
//  : zustand 스토어의 상태를 업데이트 하는데 사용
export const useCountstore = create<CountState>((set) => ({
  // 객체 반환 - CountState 타입
  // 상태 변경전 초기값 설정
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

function B_Zustand() {
  const { count, increment, decrement } = useCountstore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  );
}

export default B_Zustand;
