import styled from "@emotion/styled";
import React, { useState } from "react";
import { Button } from "./Button";
import { theme } from "./theme";
import { Input } from "./Input";

function LoginForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <Container>
      <Card>
        {mode === "login" ? (
          <>
            <Title>로그인</Title>
            <Subtitle>모임 생성 시스템에 접속하세요</Subtitle>
            <Form>
              <Input />
              <Input />
              <Button />
            </Form>
            <Footer>계정이 없으신가요? 회원가입</Footer>
            <LinkText onClick={() => setMode("signup")}>회원가입</LinkText>
          </>
        ) : (
          <>
            <Title>최원가입</Title>
            <Subtitle> 모임 생성 시스템을 시작하세요</Subtitle>
            <Form>
              <Input type="text" placeholder="아이디" />
              <Input type="password" placeholder="비밀번호" />
              <Input type="text" placeholder="이름" />
              <Input type="email" placeholder="이메일" />
              <Button>회원가입</Button>
            </Form>
            <Footer>이미 계정이 있으신가요? 로그인</Footer>
            <LinkText onClick={() => setMode("login")}>로그인</LinkText>
          </>
        )}
      </Card>
    </Container>
  );
}

export default LoginForm;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(160deg, #f6d365, #fda085 100%);
  /* 
  clamp : CSS 함수
    : 값을 최소값, 최대값 사이로 제한(clamp)
    - 가운데 인자는 권장값을 계산하여, 그 값이 최소보다 작으면 최소값을 ,최대보다 크면 최대값을, 그렇지 않으면 그 권장값을 사용

    vw단위: viewport width 의 약자 (viewport너비 대비 퍼센트 수치)
  */
  padding: clamp(1rem, 5vw, 3rem);
`;
const Card = styled.div`
  display: grid;
  gap: 1.5rem;
  background-color: #fff;
  padding: clamp(2rem, 5vw, 4rem);
  width: min-content(100%, 420px);
  border: 1px solid #ddd;
  border-radius: var(--radius-md);
  /* align-items + juscify-items */
  place-items: center;
`;
const Title = styled.h1`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #333;
`;
const Subtitle = styled.form`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #666;
  text-align: center;
`;
const Form = styled.form`
  display: grid;
  gap: 1rem;
  width: 100%;
`;

const Footer = styled.p`
  font-size: 0.9rem;
  color: #888;
  text-align: center;
`;

const LinkText = styled.span`
  color: ${theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
