// React 스니펫
// : rfce(ㅎ마수형 컴포넌트 생성 + export default 내보내기)
// - tsx 파일은 반드시 컴포넌트 형식 / HTML 요소를 반환

// cf) ts 파일은 일반 ts 문법 코드 형식 / 모듈(변수, 함수, 클래스 등 ) 반환

//! Component
// : 컴포넌트, 사용자 인터페이스(UI) 를 구축하는 기본단위

// cf) 사용자 인터페이스(UI)
// : 사용자와 컴퓨터 시스템 사이의 의사소통 매개체( 화면! )

// - 화면을 구성하는 코드집합 (재사용 가능)
// - 재사용은 export(내보내기)와 import (가져오기)를 통해 구현

// - 파일명이 반드시 '대문자'로 시작(UpperCamelCase)
//    cf) 일반함수 (기능적)는 '소문자'로 시작(lowerCamelCase)

// - HTML 요소를 반환
//   : 함수형 컴포넌트의 return 키워드 뒤에서 작성
//   : 반환되는 컴포넌트가 한 개일 경우  () 소괄호 생략, 두 개 이상일 경우 소괄호 필수

//! 2. JSX(TSX) 문법 체계
// 1) 단일 루트 노드
// : 최상단 루트 태그 존재
// - 최상단에 형제 태그 있을 수 없음 (반드시 하나의 부모가 필요)
// - <></> 빈 Fragment 태그를 사용

// 2) 태그 닫기

// 3) 대소문자 구분
// - 소문자 태그: HTML 요소로 인식
// - 대문자 태그: 사용자 정의'컴포넌트'
//        >> <Img /> 태그가 오류나는 상황
//          - 1) 해당 태그를 생성하지 않음
//          - 2) 해당 컴포넌트를 import하지 않거나 경로가 잘못됨

// 4) JSX 내에서 HTML 코드 작성 시
// - 대부분 lowerCamelCase 사용 권장
//    : CSS 속성, on- 이벤트 핸들러 등
// - class명 속성은 className으로 대체

export function ExampleComponent() {
  let name = "aaa";
  let fruits = ["사과", "오렌지", "망고"];
  // function: js문법
  // >> JS 문법 내에서 HTML 코드 작성 시 () 소괄호 사용
  //    : return 뒤  ()
  return (
    <>
      <h1>20251030 강의</h1>
      <p>복습중입니다.</p>
      {/* HTML 코드 내에서 JS 코드 작성시  {} tkdyd */}
      <p>{name} 강사</p>
      {/* 매열 순회 출력 */}
      {fruits.map((fruit, index) => (
        <p key={index}>{fruit}</p>
      ))}
    </>
  );
}

import React from "react";

function F_Review() {
  return <div>F_Review</div>;
}

export default F_Review;
